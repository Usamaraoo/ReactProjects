import React from 'react'
import { useGlobalContext } from '../stripeContext'
import phoneImg from '../../../imgs/stripe/phone.svg'
import heroImg from '../../../imgs/stripe/hero.svg'

export default function Hero() {
	const { closeSubmenu } = useGlobalContext()

	return (
		<section
			onMouseOver={closeSubmenu}
			style={{
				backgroundImage: 'url(' + heroImg + ')',
				backgroundSize: '100%',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div
				className={`flex justify-between items-center flex pt-20 lg:mx-40 smd:mx-30 mx-10 `}
			>
				<article className={`hero-info md:max-w-xl text-start `}>
					{' '}
					<h1 className='md:text-4xl  lg:text-7xl text-2xl leading-snug font-bold  text-gray-800'>
						Payments infrastructure for the internet
					</h1>
					<p className='md:mt-10 md:leading-8 text-sm md:text-lg text-gray-600 '>
						Millions of companies of all sizes—from startups to
						Fortune 500s—use Stripe’s software and APIs to accept
						payments, send payouts, and manage their businesses
						online.
					</p>
					<button className='  mt-6 md:visible bg-gray-800 rounded-md text-white tracking-widest italic px-4 py-1'>
						Start now
					</button>
				</article>
				<article className='imgs  hidden md:block'>
					<img src={phoneImg} alt='stripe-phone' />
				</article>
			</div>
		</section>
	)
}
