import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/Header';
import TabContent from './TabContent';
const url = 'https://course-api.com/react-tabs-project';

function Tab() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [singJob, setSingleJob] = useState(0);
    const fetchJobs = async () => {
        const res = await fetch(url);
        const newJobs = await res.json();
        setJobs(newJobs);
        setLoading(false);
    };

    const changeJob = (index) => {
        const currentJob = jobs.filter((j) => j.index === index);
        setSingleJob(currentJob);
    };
    useEffect(() => {
        fetchJobs();
    }, []);
    console.log('this is val', jobs[singJob]);
    return (
        <div className='bg-blue-50 min-h-screen '>
            <Header title='Tabs' textClr={'purple'} lineClr='purple' btnClr={'purple'}/>
            {/* Tabs */}
            {loading ? (
                <p className='text-4xl font-medium'>Loading....</p>
            ) : (
                <div className='flex gap-4 max-w-5xl mx-auto mt-20'>
                    <div className='flex flex-col text-3xl font-light text-gray-700'>
                        {jobs.map((job, i) => {
                            const { order, company } = job;
                            return (
                                <p
                                    key={i}
                                    className={
                                        singJob === i ? 'text-purple-500' : ''
                                    }
                                    onClick={() => setSingleJob(i)}
                                >
                                    {company}
                                </p>
                            );
                        })}
                    </div>
                    {/* tab-content */}
                    <TabContent val={jobs[singJob]} />
                </div>
            )}
        </div>
    );
}

export default Tab;
