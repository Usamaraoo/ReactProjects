import React, { useState } from 'react';
import testimonials from './reviewUser';
import Header from '../../components/Header';

export default function Reviews() {
    const [count, setCount] = useState(0);
    const { name, image, role, msg } = testimonials[count] || null;
    const checkNum = (no) => {
        if (no > testimonials.length - 1) {
            return 0;
        }
        if (no < 0) {
            return testimonials.length - 1;
        }
        return no;
    };
    const prevCount = () => {
        setCount((count) => {
            const newCount = count - 1;
            return checkNum(newCount);
        });
    };
    const nextCount = () => {
        setCount((count) => {
            const newCount = count + 1;
            return checkNum(newCount);
        });
    };
    return (
        <div className=' bg-pink-100 min-h-screen'>
            <Header
                title='Accordion'
                textClr='black'
                lineClr='black'
                btnClr='black'
            />

            <div className=' mt-20 flex flex-col    items-center'>
                <div className='h-1/4  bg-white w-96 border border-red p-6 bg-gray shadow-2xl rounded-md '>
                    <img
                        src={image}
                        alt='user1'
                        className='mx-auto rounded-full w-24 h-24 object-cover'
                    />
                    <p className='text-base tracking-widest italic py-2 font-medium'>
                        {name}
                    </p>
                    <p className='py-1 text-sm bg-red-200  mx-auto rounded-md w-20'>
                        {role}
                    </p>
                    <p className='text-gray-500 mt-4'>{msg}</p>
                    {/* Arrow buttons */}
                    <div className='flex flex-row justify-center gap-4 mt-6 '>
                        <svg
                            onClick={() => prevCount()}
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 cursor-pointer'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
                            />
                        </svg>
                        <svg
                            onClick={() => nextCount()}
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 cursor-pointer'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            />
                            <path
                                fillRule='evenodd'
                                d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
