import { useGlobalCartContext } from './CartContext'
import CartItem from './CartItem'

export default function CartHome() {
	const {cart,total} = useGlobalCartContext()
	return (
		<div className='w-4/5 md:w-3/5 lg:w-2/5 mx-auto '>
			<h1 className='text-4xl mt-20 tracking-widest font-bold'>
				Your Bag
			</h1>
            {/* Items */}
			<div className='mt-20'>
				{cart.map((item,index) => {
					return <CartItem key={index} {...item} />
				})}
			</div>
            {/* Total */}
            <div className='flex justify-between  border-t-2 py-2 text-gray-800 font-bold'>
                <p>Total</p>
                <p>{total} $</p>
            </div>
		</div>
	)
}
