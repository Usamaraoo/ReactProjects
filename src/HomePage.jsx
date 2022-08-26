import React from 'react'
import { Link } from 'react-router-dom'
import appsData from './appsData'

function HomePage() {
	return (
		<div className=' min-h-screen bg-gray-800 py-4'>
			<h1 className='pt-20 text-4xl font-bold text-white '>
				React Projects
				<sup className='text-sm font-medium  italic ml-2'>
					<span className='text-blue-600'>React </span>+
					<span className='text-red-600'>Tailwind</span>
				</sup>
			</h1>

			<div className='  grid sm:grid-cols-2 md:grid-cols-3 grid-col-1 px-12 xl:px-0    max-w-6xl  mx-auto mt-20 gap-10 '>
				{appsData.map((app, index) => {
					return (
						<Link key={index} to={app.link}>
							<div className='shadow-xl bg-gray-100  rounded-t-lg'>
								<img
									src={app.image}
									alt={app.name}
									className='object-cover w-screen h-52 rounded-t-lg '
								/>
								<p className='text-lg py-3 tracking-widest font-medium  '>
									{app.name}
								</p>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default HomePage
