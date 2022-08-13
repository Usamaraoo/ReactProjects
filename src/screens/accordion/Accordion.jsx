import React from 'react';
import BackButton from '../../BackButton';
import SingleAccordion from './SingleAccordion';
import questions from './quesData';
import { useState } from 'react';

function Accordion() {

    return (
        <div className='min-h-screen bg-purple-600'>
            <h1 className='pt-24 text-3xl font-bold text-white italic'>
                Accordion
            </h1>
            <BackButton color={'white'}/>
            <div className=' flex bg-white mx-auto max-w-5xl py-4 px-3 rounded-md mt-14'>
                <div className=' divide-y-2 divide-yellow-900  '>
                    <h1 className='text-3xl text-start pt-5'>
                        Questions and answers about login
                    </h1>
                </div>
                <div className='flex flex-col gap-3 w-4/5'>
                    {questions.map((ques) => {
                        return (
                            <div>
                                <SingleAccordion {...ques} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Accordion;
