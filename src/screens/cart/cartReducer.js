const cartReducer = (state, action) => {
	let newPrice = 0
	let newCart = {}
	switch (action.type) {
		// On removing item from cart
		case 'removeWholeItem':
			// getting the removing item to update price before remove
			const itemToUpdatePrice = state.cart.filter((item) => {
				return item.id === action.payload
			})[0]
			newPrice =
				state.total - itemToUpdatePrice.price * itemToUpdatePrice.amount
			// Now removing item
			newCart = state.cart.filter((item) => {
				return item.id !== action.payload
			})

			return { ...state, cart: newCart, total: newPrice }
		// On Item increment
		case 'itemIncrement':
			const tempCart = state.cart.map((item) => {
				// if id matches increasing the total price and single item amount
				if (item.id === action.payload) {
					newPrice = state.total + item.price
					return { ...item, amount: item.amount + 1 }
				}
				return item
			})
			// increasing total amount
			const newAmount = state.amount + 1

			return {
				...state,
				cart: tempCart,
				amount: newAmount,
				total: newPrice,
			}

		// On Item decrement
		case 'itemDecrement':
			const deCart = state.cart
				.map((item) => {
					// if id matches decreasing the total price and single item amount
					if (item.id === action.payload) {
						item.amount = item.amount - 1
						newPrice = state.total - item.price
						return { ...item, amount: item.amount + 1 }
					}
					return item
				})
				.filter((item) => item.amount !== 0)

			// decreasing the total amount
			const newAm = state.amount - 1

			return {
				...state,
				cart: deCart,
				amount: newAm,
				total: newPrice,
			}
		default:
			return new Error()
	}
}

export default cartReducer
