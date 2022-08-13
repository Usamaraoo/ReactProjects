import React from 'react';

function SingleAccordion() {
    return (
        <div className='shadow-xl px-3 py-6 max-w-2xl mx-auto bg-white rounded-md'>
            <div className='flex justify-between items-center cursor-pointer'>
                <h1 className='font-medium text-base'>
                    Do I have to allow the use of cookes?
                </h1>
                <div className='text-pink bg-gray-200 p-2 rounded-full '>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4  '
                        viewBox='0 0 20 20'
                        fill='blue'
                    >
                        <path
                            fillRule='evenodd'
                            d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                            clipRule='evenodd'
                        />
                    </svg>
                </div>
            </div>
            <div>
                <p className='text-sm text-start py-4'>
                    Unicorn vinyl poutine brooklyn, next level direct trade
                    iceland. Shaman copper mug church-key coloring book,
                    whatever poutine normcore fixie cred kickstarter post-ironic
                    street art.
                </p>
            </div>
        </div>
    );
}

export default SingleAccordion;
