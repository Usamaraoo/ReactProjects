import CartNav from './CartNav'
import CartHome from './CartHome'
import { CartProvider, useGlobalCartContext } from './CartContext'

export default function CartMain() {

	return (
		<div>
			<CartProvider>
				<CartNav />
				<CartHome />
			</CartProvider>
		</div>
	)
}
