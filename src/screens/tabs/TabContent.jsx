import React from 'react';

function TabContent(props) {
    console.log('cd',props);
    return (
        <div className='text-start'>
            <h1 className='text-3xl text-gray-800'>{props.val.title}</h1>
            <p className=' text-gray-600 px-2 py-4 font-bold'>{props.val.company}</p>
            <p className='text-sm text-gray-500 tracking-widest'>
                {props.val.dates}
            </p>
            {/* Tags */}
            <div className='mt-6'> 
                <div className='flex align-items items-center gap-4'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='blue'
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M13 5l7 7-7 7M5 5l7 7-7 7'
                        />
                    </svg>
                    <p className='text-md text-gray-800 '>
                        Hashtag drinking vinegar scenester mumblecore snackwave
                        four dollar toast, lumbersexual XOXO. Cardigan
                        church-key pabst, biodiesel vexillologist viral squid.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TabContent;
