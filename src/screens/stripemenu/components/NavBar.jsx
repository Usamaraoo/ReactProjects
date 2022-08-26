import React from 'react';
import { useGlobalContext } from '../stripeContext';
import stripeLogo from '../../../imgs/stripe/stripelogo.svg';
import { TiThMenu } from 'react-icons/ti';
export default function NavBar() {
  const { isSubmenuOpen, openSideBar, openSubmenu, closeSubmenu } =
    useGlobalContext();
  // when user hover over the nav links
  const displaySubmenu = (e) => {
    const page = e.target.textContent; // getting current element name
    // getting the position of hovered element for submenu
    const tempBtn = e.target.getBoundingClientRect();
    // calculating center
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 3;
    openSubmenu(page, { center, bottom }); // sending vals to function
  };
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
        <ul className='flex text-lg hidden  md:flex md:justify-center md:gap-24 font-bold  text-white '>
          <li>
            <button onMouseOver={displaySubmenu} className='tracking-widest'>
              Products
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='tracking-widest'>
              Developers
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='tracking-widest'>
              Company
            </button>
          </li>
        </ul>
        {/* button SignUp */}
        <button className='hidden  md:block md:visible bg-gray-800 rounded-md text-white tracking-widest italic px-4 py-1'>
          Sign Up
        </button>
      </div>
    </nav>
  );
}
