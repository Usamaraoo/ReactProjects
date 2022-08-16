import { useState } from 'react';

function SingleAccordion({ title, info }) {
    const [show, setShow] = useState(false);
    return (
        <div className='shadow-xl px-3 py-6  mx-auto bg-white rounded-md'>
            <div
                onClick={() => setShow(!show)}
                className='flex justify-between items-center cursor-pointer'
            >
                <h1 className='font-medium text-start text-base'>{title}</h1>
                <div className='text-pink bg-gray-200 p-1 rounded-full '>
                    {/* Plus minus icon */}
                    {show ? (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
                            viewBox='0 0 20 20'
                            fill='blue'
                        >
                            <path
                                fillRule='evenodd'
                                d='M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z'
                                clipRule='evenodd'
                            />
                        </svg>
                    ) : (
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
                    )}
                </div>
            </div>
            <div>
                {show && <p className='text-sm text-start py-4'>{info}</p>}
            </div>
        </div>
    );
}

export default SingleAccordion;
