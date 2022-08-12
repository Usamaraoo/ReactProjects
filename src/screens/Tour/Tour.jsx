import React, { useEffect, useState } from 'react';
import tourdata from './data';
import TourList from './TourList';
import { Link } from 'react-router-dom';
function Tour() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const notInteresed = (tourId) => {
        const newTourList = data.filter((tour) => tour.id !== tourId);
        setData(newTourList);
    };
    useEffect(() => {
        setTimeout(() => {
            setData(tourdata);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className='text-center'>
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
            {loading ? (
                <p className='text-3xl font-bold my-10'>Loading...</p>
            ) : (
                <TourList tours={data} notInteresed={notInteresed} />
            )}

            {/* <div className='h-2 mx-auto bg-blue-200  w-2'></div> */}
        </div>
    );
}

export default Tour;
