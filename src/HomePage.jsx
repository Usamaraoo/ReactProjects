import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1 className='text-3xl font-bold   mt-20'>
                These are basic Projects
            </h1>
            <div className='my-10'>
                <Link to='/birthday-reminder'>Birthday Riminder</Link>
            </div>
            <div className='my-10'>
                <Link to='/tour'>Tour App</Link>
            </div>
            <div className='my-10'>
                <Link to='/reviews'>Reviews App</Link>
            </div>
        </div>
    );
}

export default HomePage;
