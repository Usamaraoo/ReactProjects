import React, { useEffect, useState } from 'react';
import tourdata from './data';
import TourList from './TourList';
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
