import React from 'react';

export default function List({ friends }) {
    return (
        <div>
            <h1 className='text-2xl font-medium text-start py-4'>
                List of friends
            </h1>
            {friends.map((friend) => {
                return (
                    <div className='py-4' key={friend.id}>
                        <div className='flex'>
                            <img
                                src={friend.image}
                                className='rounded-full  w-16 '
                                alt={friend.name}
                            />
                            <div className='text-start pl-4'>
                                <p className='text-xl font-medium'>{friend.name}</p>
                                <p className='text-gray-400'>{friend.age} years</p> 
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}
