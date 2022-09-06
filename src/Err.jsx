import React from 'react'
import { Link } from 'react-router-dom'
import errPage from './imgs/cocktail/404.svg'


export default function Err() {
  return (
    <div>
        <div className='mt-20 tracking-widest'>
            <p className='text-2xl  mb-10'>Oops Nothing here  </p>
        <img className='max-w-sm mx-auto mb-5' src={errPage} alt="404" />
        <Link  to='/'  className='bg-green-300  tracking-widest px-4 py-1 rounded-md text-bold'>Go Back</Link>
        </div>
    </div>
  )
}
