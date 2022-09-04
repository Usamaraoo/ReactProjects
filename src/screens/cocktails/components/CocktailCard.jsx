import React from 'react'
import { Link } from 'react-router-dom'

export default function CocktailCard({idDrink,strDrink,strCategory,strDrinkThumb,strGlass}) {
    return (
		<div className='w-full md:max-w-xs text-left shadow-2xl rounded-md overflow-hidden'>
			<Link to={'/cocktails/'+idDrink}><img
				className='w-full'
				src={strDrinkThumb}
				alt={strGlass}
			/>
            </Link>
			<div className='flex flex-col gap-3 tracking-wides  px-3 py-2'>
				<h1 className='font-bold text-3xl'>{strDrink}</h1>
				<p className='font-medium'>{strGlass}</p>
				<p className='text-gray-400'>{strCategory}</p>
				<button className='bg-blue-300 px-4 py-1 tracking-widest rounded-sm font-medium'>
					Detail
				</button>
			</div>
		</div>
	)
}
