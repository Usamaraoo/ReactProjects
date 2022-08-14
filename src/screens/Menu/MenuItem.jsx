import React from 'react';

function MenuItem({ id, title, category, price, img, desc }) {
    return (
        <div className='max-w-sm bg-pink rounded-lg shadow-xl '>
            <img className='rounded-t-lg w-screen object-cover  h-52' src={img} alt={title} />
            <div className='p-3 flex justify-between bg-yellow-100'>
                <h1 className='text-lg text-md font-bold'>{title}</h1>
                <p className='font-medium text-gray-600 bg-yellow-200 px-2 rounded-md'>{price} $</p>
            </div>
            <p className='text-start text-sm p-3'>{desc}</p>
        </div>
    );
}

export default MenuItem;
