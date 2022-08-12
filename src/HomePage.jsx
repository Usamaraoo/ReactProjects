import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1 className='text-3xl font-bold   mt-20'>
                These are basic Projects
            </h1>   
            <Link to="/birthday-reminder">Birthday Riminder</Link>
            <Link to="/tour">Tour App</Link>
            
        </div>
    );
}

export default HomePage;
