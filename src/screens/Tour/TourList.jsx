import { useState } from 'react';

function TourList({ tours, notInteresed }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className='mt-20'>
            <h1 className='text-3xl mb-14 font-bold text-black'>
                Our Tours {tours.length}
            </h1>
            {tours.map((tour) => {
                const { id, image, name, discription, price } = tour;
                return (
                    <div
                        key={id}
                        className='mx-auto mt-5  bg-gray-100 max-w-xl rounded-xl shadow-md'
                    >
                        <img
                            src={image}
                            className='min-w-full rounded-xl max-h-80 object-cover'
                            alt={name}
                        />
                        <div className='flex  justify-between px-6 py-4'>
                            <p className='text-x font-bold'>{name}</p>
                            <p className='bg-blue-200 py-1 px-3 text-gray-600 rounded-sm text-sm font-medium'>
                                {price}$
                            </p>
                        </div>
                        <p className='text-start text-gray-600 px-6 py-4 '>
                            {readMore
                                ? discription
                                : `${discription.substring(0, 200)}...`}

                            <button
                                onClick={() => setReadMore(!readMore)}
                                className='bg-blue-200 text-sm py-1 px-2 rounded-xl ml-2'
                            >
                                {readMore ? 'Read less' : 'Read More'}
                            </button>
                        </p>
                        <button onClick={()=> notInteresed(id)} className='text-red-500 px-6 py-1 mb-5 border border-[red]'>
                            Not Interested
                        </button>
                    </div>
                );
            })}
            {/* <div className='mx-auto bg-gray-200 max-w-xl'>
                <img src="" alt="" />
                <p>title</p>
            </div> */}
        </div>
    );
}

export default TourList;
