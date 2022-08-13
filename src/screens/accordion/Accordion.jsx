import React from 'react';
import BackButton from '../../BackButton';
import SingleAccordion from './SingleAccordion';

function Accordion() {
    return (
        <div className='min-h-screen bg-purple-600'>
            <h1 className='pt-24 text-3xl font-bold text-white italic'> Accordion</h1>
            <BackButton />
            <div className=' flex bg-white mx-auto max-w-4xl py-4 px-3 rounded-md mt-14' >
                <div className=' divide-y-2 divide-yellow-900 '>
                    <h1 className='text-3xl '>Questions and answers about login</h1>
                </div>
                <div className='flex flex-col gap-3 '>
                    <SingleAccordion />
                    <SingleAccordion />

                </div>
            </div>
        </div>
    );
}

export default Accordion;
