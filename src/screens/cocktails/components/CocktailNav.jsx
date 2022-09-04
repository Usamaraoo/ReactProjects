import React from 'react'
import cocktailLogo from './../../../imgs/cocktail/cocktaillogo.svg'
import { Link } from 'react-router-dom'
export default function CocktailNav() {
	return (
		<div className='flex justify-between px-12 py-4 shadow-md text-gray-800'>
            <Link to='/cocktails'><img src={cocktailLogo} alt="cocktaillogo" className='w-52 md:w-72 ' /></Link>
            <div className='flex gap-4 font-medium text-xl tracking-widest'>
                <Link to='/cocktails'><p>Home</p></Link>
                <Link to='/cocktail/about'>About</Link>
            </div>
		</div>
	)
}
