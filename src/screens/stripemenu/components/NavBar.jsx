import React from 'react';
import { useGlobalContext } from '../stripeContext';
import stripeLogo from '../../../imgs/stripe/stripelogo.svg';
import { TiThMenu } from 'react-icons/ti';
export default function NavBar() {
  const { openSideBar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav className=' bg-transparent fixed w-screen '>
      <div className='flex justify-between items-center lg:mx-40 smd:mx-30 mx-10 py-3 tracking-widest'>
        <div className=' flex justify-between items-center  md:w-auto w-full'>
          <img src={stripeLogo} alt='Stripe' />
          {/* hamburgur Menu btn */}
          <button onClick={openSideBar} className='visible md:invisible'>
            <TiThMenu />
          </button>
        </div>
        {/* center links */}
        <ul className='flex hidden  md:flex md:justify-center md:gap-24 font-bold  text-white '>
          <li>
            <button className='tracking-widest'>products</button>
          </li>
          <li>
            <button className='tracking-widest'>developers</button>
          </li>
          <li>
            <button className='tracking-widest'>company</button>
          </li>
        </ul>
        {/* button SignUp */}
        <button className='hidden  md:block md:visible bg-gray-800 rounded-md text-white tracking-widest italic px-4 py-1'>Sign Up</button>
      </div>
    </nav>
  );
}
