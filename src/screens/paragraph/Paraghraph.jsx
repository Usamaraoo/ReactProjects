import React, { useState } from 'react';
import Header from '../../components/Header';
import text from './parghData';

function Paraghraph() {
    const [inputVal, setInputVal] = useState(0);
    const [prgh, setPrgh] = useState([]);
   
    const generatParagraph = () => {
        if (typeof inputVal === 'number' && parseInt(inputVal) >= 0) {
            setPrgh(text.slice(0, inputVal));
        }
    };
    return (
        <div>
            <Header title='Generate Paragraph' lineClr='black' />
            <div className='flex justify-center mx-auto items-center flex-wrap w-4/5  gap-4 mt-20'>
                <p className='text-2xl font-400'>Paraghraph</p>
                <input
                    onChange={(e) => setInputVal(parseInt(e.target.value))}
                    placeholder='How many paragraph ?'
                    type='number'
                    className='border-2 border-gray-200 rounded-md py-2 px-4'
                />
                <button
                    onClick={generatParagraph}
                    className='bg-green-300 rounded-md text-sm py-2 px-4'
                >
                    Generate
                </button>
            </div>
            <div className='mt-10 flex flex-col w-4/5 md:max-w-xl mx-auto'>
                {prgh.map((p, i) => {
                    return (
                        <div key={i} className='mt-6    '>
                            <p>{p}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Paraghraph;
