import { useEffect, useRef, useState } from 'react';
import { links, socialIcons } from './data';

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  console.log('show links', showLinks);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <div>
      <nav className='grid grid-cols-2 md:grid-cols-3 shadow-xl px-8 py-4 items-center'>
        {/*  Logo */}
        <div className='flex gap-2 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 sm:w-12 sm:h-12'
            viewBox='0 0 20 20'
            fill='#65B3F8'
          >
            <path
              fillRule='evenodd'
              d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
          <p className='text-lg sm:text-xl font-medium'>CodePlus</p>
        </div>
        {/* Menu  */}
        <div className='flex justify-end md:hidden text-center '>
          <svg
            onClick={() => setShowLinks(!showLinks)}
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 '
            fill='#65B3F8'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        {/* Center Content */}

        <div
          ref={linksContainerRef}
          className={` 
            overflow-hidden   text-lg 
            link-container
          `}
        >
          <div ref={linksRef} className='flex gap-x-5  gap-y-5 mt-5 md:mt-0 items-start flex-col md:flex-row   '>
            
            {links.map((li,i) => {
              return (
                <p
                  
                  className=' w-full sm:hover:none sm:w-auto text-left '
                  key={i}
                >
                  {li.text}
                </p>
              );
            })}
          </div>
        </div>

        {/* Social icons */}
        <div className='lg:flex md:gap-5 hidden  md:justify-end '>
          {socialIcons.map((icon,i) => <div key={i}> {icon}</div>)}
        </div>
      </nav>
    </div>
  );
}
