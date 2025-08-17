import React from 'react';
import BuyerBanner from '../BuyerBanner/BuyerBanner';
import WhyChoosePlatform from '../WhyChoosePlatform/WhyChoosePlatform';
import TaskCategories from '../TaskCategories/TaskCategories';

const ForBuyersHome = () => {
    return (
        <div>
            <BuyerBanner></BuyerBanner>
            <WhyChoosePlatform></WhyChoosePlatform>
            <TaskCategories></TaskCategories>
        </div>
    );
};

export default ForBuyersHome;