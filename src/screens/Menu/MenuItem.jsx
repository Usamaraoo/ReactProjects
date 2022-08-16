import React from 'react';

function MenuItem({ id, title, category, price, img, desc }) {
    return (
        <div className='max-w-sm bg-pink rounded-lg shadow-xl '>
            <img
                className='rounded-t-lg w-screen object-cover  h-52 border-8 border-yellow-200'
                src={img}
                alt={title}
            />
            <div className='p-3 flex justify-between '>
                <h1 className='text-lg text-start text-md font-bold tracking-widest'>{title}</h1>
                <p className='font-medium text-gray-600 bg-yellow-200 px-2 rounded-md '>
                    {price} $
                </p>
            </div>
            <hr className='border-1 border-yellow-200  ' />
            <div className='  divide-y-8 divide-stone-500'>
                <p className='text-start text-sm p-3 leading-6 tracking-wide'>{desc}</p>
            </div>
        </div>
    );
}

export default MenuItem;
