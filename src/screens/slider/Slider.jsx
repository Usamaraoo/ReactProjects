import React, { useState } from 'react'
import { useEffect } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Header from '../../components/Header'
import reviewData from '../Reviews/reviewUser'

export default function Slider() {
	const [index, setIndex] = useState(0)
	const [next, setNext] = useState(0)
	const [prev, setPrev] = useState(reviewData.length - 1)
	const [back, setBack] = useState(false)
	const [forward, setForwad] = useState(false)

	const { name, role, image, msg } = reviewData[index]

	const numCheck = (no) => {
		if (no > reviewData.length - 1) {
			return 0
		} else if (no < 0) {
			return reviewData.length - 1
		}
		return no
	}

	const backward = () => {
		setBack(true)
		setTimeout(() => {
			setIndex((count) => {
				const newCount = count - 1
				return numCheck(newCount)
			})
			setBack(false)
		}, 1000)
	}
	const forwardFun = () => {
		setForwad(true)
		setTimeout(() => {
			setIndex((count) => {
				const newCount = count + 1
				return numCheck(newCount)
			})
			setForwad(false)
		}, 1000)
	}

	useEffect(() => {
		if (index === reviewData.length - 1) {
			setNext(0)
			setPrev(index - 1)
		} else {
			if (index === 0) {
				setPrev(reviewData.length - 1)
			} else {
				setPrev(index - 1)
			}
			setNext(index + 1)
		}
	}, [index])
	return (
		<div>
			<Header
				title={'Slider Animated'}
				textClr={' text-red-400'}
				lineClr={' bg-red-400 '}
				btnClr={'red'}
			/>
			{/* Main div */}
			<div className=' max-w-2xl mx-auto relative  overflow-hidden mt-20 '>
				<button onClick={backward} className='absolute left-5  top-20 z-10'>
					<BsFillArrowLeftCircleFill size={22} className='text-red-400' />
				</button>
				{/* Center content div  */}
				<div>
					{/* back */}
					<div
						className={`${
							back
								? ' translate-x-0 transition    duration-1000 block opacity-100 absolute top-0 left-0 right-0 bottom-0  z-2'
								: '-translate-x-full'
						} `}
					>
						<img
							src={reviewData[prev].image}
							alt='user1'
							className='mx-auto rounded-full w-24 h-24 object-cover'
						/>
						<p className='text-base tracking-widest italic py-2 font-medium'>
							{reviewData[prev].name}
						</p>
						<p className='py-1 text-sm bg-red-400  mx-auto rounded-md w-20'>
							{reviewData[prev].role}
						</p>
					</div>
					{/* current */}
					<div
						className={`${forward ? '-translate-x-full duration-1000  ' : ''}
                    absolute top-0 left-0  right-0 bottom-0 z-1
                    ${back ? 'translate-x-full duration-1000  ' : ''}
                    `}
					>
						<img
							src={image}
							alt='user1'
							className='mx-auto rounded-full w-24 h-24 object-cover'
						/>
						<p className='text-base tracking-widest italic py-2 font-medium'>
							{name}
						</p>
						<p className='py-1 text-sm bg-red-400  mx-auto rounded-md w-20'>
							{role}
						</p>
						<p className='text-gray-600 tracking-widest mt-10 px-5'>{msg}</p>
					</div>
					{/* next */}
					<div
						className={`${
							forward
								? ' translate-x-0 transition    duration-1000 block opacity-100  absolute top-0 left-0 right-0 bottom-0  z-2'
								: ' translate-x-2/3 '
						}`}
					>
						<img
							src={reviewData[next].image}
							alt='user1'
							className='mx-auto rounded-full w-24 h-24 object-cover'
						/>
						<p className='text-base tracking-widest italic py-2 font-medium'>
							{reviewData[next].name}
						</p>
						<p className='py-1 text-sm bg-red-400  mx-auto rounded-md w-20'>
							{reviewData[next].role}
						</p>
					</div>
				</div>
				<button onClick={forwardFun} className='absolute z-10   top-20 right-5  '>
					<BsFillArrowRightCircleFill size={22} className='text-red-400' />
				</button>
			</div>
		</div>
	)
}
