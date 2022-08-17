import { useState, useEffect } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';
import BackButton from './../../components/BackButton';

function ColorGenerator() {
    const [colorList, setColorList] = useState(new Values('#f15025').all(10));
    const [inputColor, setInputColor] = useState('');
    const [error, setError] = useState(false);

    const colorInput = (val) => {
        if (val === '') {
            setColorList([]);
        }
        setInputColor(val);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let color = new Values(inputColor).all(10);
            setColorList(color);
            setError(false);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    return (
        <div className='min-h-screen bg-gray-800'>
            <BackButton color='white'/>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col justify-center mx-auto items-center flex-wrap w-4/5  gap-4 pt-20'
            >
                <p className='text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-400'>
                    Color Generate
                </p>
                <input
                    onChange={(e) => colorInput(e.target.value)}
                    placeholder='#f15025'
                    type='text'
                    className={`${
                        error ? ' border-red-500' : ''
                    } border-2 border-gray-200 rounded-md py-2 px-4 text-black mt-10`}
                />
                <button className='text-white font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md text-sm py-2 px-4'>
                    Generate
                </button>
            </form>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-4/5 md:max-w-8xl mx-auto gap-3'>
                {!error &&
                    colorList.map((color, i) => {
                        return (
                            <div key={i}>
                                <SingleColor
                                    {...color}
                                    hex={color.hex}
                                    index={i}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ColorGenerator;
