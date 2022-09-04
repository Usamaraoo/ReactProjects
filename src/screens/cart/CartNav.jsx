import { BsHandbagFill } from 'react-icons/bs'
import { useGlobalCartContext } from './CartContext'

function CartNav() {
    const {amount} = useGlobalCartContext()
	return (
		<nav className='py-3 bg-blue-200'>
			<div className='flex items-center justify-around text-3xl '>
				<p className='tracking-widest font-bold'>
					Use<span className='text-red-400'>Reducer</span>{' '}
				</p>
				<div className='relative px-3 '>
					<p className='rounded-full  text-sm absolute font-medium -top-1 right-0 text-blue-800'>{amount}</p>
					<BsHandbagFill className='text-blue-800' />
				</div>
			</div>
		</nav>
	)
}

export default CartNav
