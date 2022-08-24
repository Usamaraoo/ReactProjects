import { useState } from 'react';
import { links, social } from './data';
import { useGlobalBarContext } from './context';
import { ImCross } from 'react-icons/im';

function SideBar() {
  const { isSideBarOpen, closeSideBar} = useGlobalBarContext();

  return (
    <aside
      className={`${isSideBarOpen ? ' translate-x-0 ' : '-translate-x-80'}
      transition duration-1000
        fixed
        w-full sm:w-3/5 md:w-2/5 lg:w-1/5 bg-gray-300 h-screen  `}
    >
      <div className='flex  justify-between items-center p-8 '>
        <div className='text-2xl text-pink-400 font-bold tracking-widest'>
          Code <span>Plus</span>
        </div>
        <div onClick={() => closeSideBar()}>
          <ImCross className='text-red-400' />
        </div>
      </div>
      {/* Content */}
      <div className='flex flex-col h-4/5 justify-between'>
        {/* urls */}
        <div className='flex flex-col justify-start h-3/5 gap-0  text-gray-700  '>
          {links.map((li) => {
            return (
              <div
                key={li.id}
                className='flex justify-start gap-4 items-center text-xl hover:bg-gray-800 py-4 px-8  hover:text-white cursor-pointer'
              >
                <p>{li.icon}</p>
                <p>{li.text}</p>
              </div>
            );
          })}
        </div>
        {/* Social icons */}
        <div className='flex justify-center gap-4 text-xl text-blue-700'>
          {social.map((s) => {
            return (
              <div className='cursor-pointer' key={s.id}>
                {s.icon}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
