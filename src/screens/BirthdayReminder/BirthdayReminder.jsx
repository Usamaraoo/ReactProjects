import React, { useState } from 'react';
import data from './data';
import List from './List';
import Header from '../../components/Header';

function BirthdayReminder() {
    const [friends, setFriends] = useState(data);
    return (
        <div className='bg-yellow-200  min-h-screen'>
            <Header
                title='Birthday'
                textClr='black'
                lineClr='black'
                btnClr='black'
            />

            <div class='p-6  mt-10  object-center max-w-sm mx-auto bg-white rounded-xl shadow-md   space-x-4'>
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
