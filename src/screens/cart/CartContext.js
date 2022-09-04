import React, { useContext, useReducer } from 'react'
import cartData from './cartData'
import cartReducer from './cartReducer'

const CartContext = React.createContext()

const initialState = {
	loading: false,
	cart: cartData,
	total: cartData
		.map((item) => item.price)
		.reduce((prev, cur) => prev + cur, 0),
	amount: cartData
		.map((item) => item.amount)
		.reduce((prev, cur) => prev + cur, 0),
}
const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState)
	return (
		<CartContext.Provider value={{ ...state, dispatch }}>
			{children}
		</CartContext.Provider>
	)
}

export const useGlobalCartContext = () => {
	return useContext(CartContext)
}

export { CartContext, CartProvider }
