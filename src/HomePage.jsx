import React from 'react';
import { Link } from 'react-router-dom';
import birthdayImg from './imgs/apps/BrithdayApp.png';
import tourImg from './imgs/apps/Tour.png';
import reviewImg from './imgs/apps/Reviews.png';
import accordionImg from './imgs/apps/accordion.png';
import menuImg from './imgs/apps/Menu.png';
import tabsImg from './imgs/apps/tabs.png';
import pImg from './imgs/apps/paragraph.png';
import clrAppImg from './imgs/apps/colorapp.png';
import groceryImg from './imgs/apps/grocery.png';


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
                <Link to='/birthday-reminder'>
                    <div className='shadow-xl bg-yellow-50  rounded-t-lg'>
                        <img
                            src={birthdayImg}
                            alt='Birthday App '
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium  '>
                            Birthday Riminder
                        </p>
                    </div>
                </Link>
                <Link to='/tour'>
                    <div className='shadow-xl bg-yellow-50  rounded-t-lg'>
                        <img
                            src={tourImg}
                            alt='Tour '
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Tour</p>
                    </div>
                </Link>
                <Link to='/reviews'>
                    <div className='shadow-xl bg-yellow-50  rounded-t-lg'>
                        <img
                            src={reviewImg}
                            alt='Reviews'
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Reviews</p>
                    </div>
                </Link>
                <Link to='/accordion'>
                    <div className='shadow-xl bg-yellow-50  rounded-t-lg'>
                        <img
                            src={accordionImg}
                            alt='Accordion '
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Accordion</p>
                    </div>
                </Link>
                <Link to='/menu'>
                    <div className='shadow-xl  bg-yellow-50  rounded-t-lg'>
                        <img
                            src={menuImg}
                            alt='Menu'
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Menu</p>
                    </div>
                </Link>
                <Link to='/tabs'>
                    <div className='shadow-xl  bg-yellow-50  rounded-t-lg'>
                        <img
                            src={tabsImg}
                            alt='Menu'
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Tabs</p>
                    </div>
                </Link>
                {/* <Link to='/slider'>
                    <div className='shadow-xl  rounded-t-lg'>
                        <img
                            src={tabsImg}
                            alt='Menu'
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Slider</p>
                    </div>
                </Link> */}
                <Link to='/paragraph'>
                    <div className='shadow-xl bg-yellow-50  rounded-t-lg'>
                        <img
                            src={pImg}
                            alt='paragraph'
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Paragraph</p>
                    </div>
                </Link>
                <Link to='/colors'>
                    <div className='shadow-xl bg-yellow-50  rounded-t-lg'>
                        <img
                            src={clrAppImg}
                            alt='paragraph'
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Color Generator</p>
                    </div>
                </Link>
                <Link to='/grocerybud'>
                    <div className='shadow-xl bg-yellow-50  rounded-t-lg'>
                        <img
                            src={groceryImg}
                            alt='paragraph'
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Grocery Bud</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
