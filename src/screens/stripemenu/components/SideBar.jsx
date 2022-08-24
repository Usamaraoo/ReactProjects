import React from 'react';
import { useGlobalContext } from '../stripeContext';
import { ImCross } from 'react-icons/im';
import sublinks from '../data';
export default function SideBar() {
  const { isSideBarOpens, closeSideBar } = useGlobalContext();
  return (
    <div
      // checking the condition and adding transition to open close
      className={`${
        isSideBarOpens && 'scale-100'
      }  scale-0 transition duration-1000 fixed top-10 left-0 right-0 h-full block md:hidden`}
    >
      {/* Sidebar div */}
      <div className='bg-white w-4/5  mx-auto p-8 rounded-md shadow-2xl h-4/5'>
        <div className='text-end flex   justify-end'>
          <ImCross onClick={closeSideBar} className='text-gray-500' />
        </div>
        <div>
          {/* main object */}
          {sublinks.map((obj, i) => {
            const { page } = obj;
            return (
              <div className='my-6' key={i}>
                <p className='font-bold text-gray-700 text-start'>{page}</p>
                <div
                  className='grid grid-cols-2 gap-1 items-center my-2'
                  key={i}
                >
                  {/* submenut items / inner loop */}
                  {obj.links.map((subLi) => {
                    const { label, icon } = subLi;
                    return (
                      <div
                        className='flex items-center gap-2 text-gray-700 '
                        key={label}
                      >
                        <div className='text-sm'>{icon}</div>
                        <p>{label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
