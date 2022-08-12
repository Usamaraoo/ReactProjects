import React, { useState } from 'react';
import data from './data';
import List from './List';
import { Link } from 'react-router-dom';

function BirthdayReminder() {
    const [friends, setFriends] = useState(data);
    return (
        <div className='bg-yellow-200  min-h-screen'>
            <div className='absolute left-36 top-20'>
                <Link to='/'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-7 w-7'
                        viewBox='0 0 20 20'
                        fill='gray'
                    >
                        <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
                            clipRule='evenodd'
                        />
                    </svg>
                </Link>
            </div>
            <div class='p-6   object-center max-w-sm mx-auto bg-white rounded-xl shadow-md   space-x-4'>
                <div>
                    <div class='text-3xl font-bold text-black'>
                        {friends.length} Birthdays today
                    </div>
                    <List friends={friends} />
                    <button
                        className='px-6 py-3 min-w-full rounded-xl bg-yellow-200'
                        onClick={() => setFriends([])}
                    >
                        Clear List
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BirthdayReminder;
