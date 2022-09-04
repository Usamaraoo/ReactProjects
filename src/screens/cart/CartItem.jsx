import { RiArrowUpSLine } from 'react-icons/ri'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useGlobalCartContext } from './CartContext'

export default function CartItem({ id, title, img, price, amount }) {
	const { dispatch } = useGlobalCartContext()
	return (
		<div className='flex justify-between my-4'>
			{/* left side */}
			<div className='flex'>
				<img className='h-20 w-20 object-cover' src={img} alt='' />
				<div className='tracking-widest text-start ml-2'>
					<p className=' font-medium text-lg'>{title}</p>
					<p className=' text-gray-500'>${price}</p>
					<button
						onClick={() =>
							dispatch({ type: 'removeWholeItem', payload: id })
						}
						className='text-red-400 text-sm hover:text-red-800'
					>
						Remove
					</button>
				</div>
			</div>
			{/* Right side */}
			<div>
				<div className='flex flex-col text-blue-500'>
					<RiArrowUpSLine
						onClick={() =>
							dispatch({ type: 'itemIncrement', payload: id })
						}
					/>
					<p>{amount}</p>
					<RiArrowDownSLine 
                    onClick={() =>
                        dispatch({ type: 'itemDecrement', payload: id })
                    }/>
				</div>
			</div>
		</div>
	)
}
