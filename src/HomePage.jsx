import React from 'react';
import { Link } from 'react-router-dom';
import birthdayImg from './imgs/apps/BrithdayApp.png';
import tourImg from './imgs/apps/Tour.png';
import reviewImg from './imgs/apps/Reviews.png';
import accordionImg from './imgs/apps/accordion.png';
import menuImg from './imgs/apps/Menu.png';

function HomePage() {
    return (
        <div className='bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-200  h-screen'>
            <h1 className='pt-20 text-4xl font-bold'>
                React Projects
                <sup className='text-sm font-medium  italic ml-2'>
                    <span className='text-blue-400'>React </span>+
                    <span className='text-red-400'>Tailwind</span>
                </sup>
            </h1>

            <div className='grid grid-cols-3 max-w-6xl mx-auto mt-20 gap-10 '>
                <Link to='/birthday-reminder  '>
                    <div className='shadow-xl bg-white rounded-t-lg'>
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
                    <div className='shadow-xl bg-white rounded-t-lg'>
                        <img
                            src={tourImg}
                            alt='Tour '
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Tour</p>
                    </div>
                </Link>
                <Link to='/reviews'>
                    <div className='shadow-xl bg-white rounded-t-lg'>
                        <img
                            src={reviewImg}
                            alt='Reviews'
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Reviews</p>
                    </div>
                </Link>
                <Link to='/accordion'>
                    <div className='shadow-xl bg-white rounded-t-lg'>
                        <img
                            src={accordionImg}
                            alt='Accordion '
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Accordion</p>
                    </div>
                </Link>
                <Link to='/menu'>
                    <div className='shadow-xl bg-white rounded-t-lg'>
                        <img
                            src={menuImg}
                            alt='Menu'
                            className='object-cover w-screen h-44 rounded-t-lg '
                        />
                        <p className='text-lg py-6 font-medium'>Menu</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
