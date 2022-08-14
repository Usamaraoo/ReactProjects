import React, { useEffect, useState } from 'react';
import tourdata from './data';
import TourList from './TourList';
import Header from '../../components/Header';

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
            <Header title='Tours App' textClr='black' lineClr='black' btnClr='black' />
           
            {loading ? (
                <p className='text-3xl font-bold my-10'>Loading...</p>
            ) : (
                <TourList tours={data} notInteresed={notInteresed} />
            )}
        </div>
    );
}

export default Tour;
