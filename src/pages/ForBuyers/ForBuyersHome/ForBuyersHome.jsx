import React from 'react';
import BuyerBanner from '../BuyerBanner/BuyerBanner';
import WhyChoosePlatform from '../WhyChoosePlatform/WhyChoosePlatform';
import TaskCategories from '../TaskCategories/TaskCategories';
import GetYourTask from '../GetYourTask/GetYourTask';

const ForBuyersHome = () => {
    return (
        <div>
            <BuyerBanner></BuyerBanner>
            <WhyChoosePlatform></WhyChoosePlatform>
            <TaskCategories></TaskCategories>
            <GetYourTask></GetYourTask>
        </div>
    );
};

export default ForBuyersHome;