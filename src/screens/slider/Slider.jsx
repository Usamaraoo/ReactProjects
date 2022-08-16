import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../components/Header';
import reviewData from '../Reviews/reviewUser';

export default function Slider() {
    const [reviews, setReviews] = useState(reviewData);
    const [index, setIndex] = useState(0);
    useEffect(() => {}, []);

    return (
        <div>
            <Header
                title={'Slider'}
                textClr={'gray'}
                lineClr={'black'}
                btnClr={'gray'}
            />
            <div className='my-24  mx-auto flex items-center'>
                {/* left button  */}
                <div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 '
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='gray'
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
                        />
                    </svg>
                </div>
                {/* content */}
                {reviews.map((singleReview, index) => {
                    const { image, name, role, msg } = singleReview;
                    return (
                        <div className=''>
                            <img
                                src={image}
                                alt=''
                                className='rounded-full w-24 h-24 object-cover mx-auto'
                            />
                            <p className='text-red-400 font-bold text-xl my-2'>
                                {name}
                            </p>
                            <p className='font-bold text-gray-500 tracking-widest'>
                                {' '}
                                {role}
                            </p>
                            <p className='text-gray-400 tracking-wide'>{msg}</p>
                        </div>
                    );
                })}

                {/* right button */}
                <div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 '
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='gray'
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M13 5l7 7-7 7M5 5l7 7-7 7'
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
