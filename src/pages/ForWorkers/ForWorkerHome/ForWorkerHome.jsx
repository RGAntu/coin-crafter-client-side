import React from 'react';
import WorkerBanner from '../WorkerBanner.jsx/WorkerBanner';
import WhyWork from '../WhyWork/WhyWork';
import TaskTypes from '../TaskTypes/TaskTypes';
import Earnings from '../Earnings/Earnings';
import StartEarning from '../StartEarning/StartEarning';

const ForWorkerHome = () => {
    return (
        <div>
            <WorkerBanner></WorkerBanner>
            <WhyWork></WhyWork>
            <TaskTypes></TaskTypes>
            <Earnings></Earnings>
            <StartEarning></StartEarning>
        </div>
    );
};

export default ForWorkerHome;