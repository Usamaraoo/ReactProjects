import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../stripeContext'

export default function SubMenu() {
	const { isSubmenuOpen, submenuPosition, navSubLinks } = useGlobalContext()
	const positionSubMenu = useRef(null)
	useEffect(() => {
		const { center, bottom } = submenuPosition
		// by useref changing the location of submenu when user hover nav links
		positionSubMenu.current.style.left = `${center}px`
		positionSubMenu.current.style.top = `${bottom}px`
	}, [submenuPosition])

	return (
		<aside
			ref={positionSubMenu}
			className={`${
				isSubmenuOpen && 'scale-105  '
			} scale-0  transition-all   absolute -translate-x-1/2  
      bg-white px-10 py-6    absolute hidden md:block  rounded-md shadow-xl duration-1000 `}
		>
			<div class='w-4 overflow-hidden inline-block absolute -top-2'>
				<div class=' h-3 w-3 bg-white rotate-45 transform origin-bottom-left'></div>
			</div>
			<div className={`flex gap-8`}>
				{navSubLinks.map((li, i) => {
					const { label, icon } = li
					return (
						<div className='flex  items-center gap-4' key={i}>
							<div className='text-sm'>{icon}</div>
							<p>{label}</p>
						</div>
					)
				})}
			</div>
		</aside>
	)
}
