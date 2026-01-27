import React from 'react';
import AboutCoin from './AboutCoin';
import HowItWorks from '../Home/HowItWorks/HowItWorks';
import GetStart from './GetStart';
import WhyChooseAbout from './WhyChooseAbout';
// import HowItWorks from '../Home/../Home/HowItWorks';

const About = () => {
    return (
        <div>
            <AboutCoin></AboutCoin>
            <div className='max-w-7xl mx-auto'>
                
            <HowItWorks></HowItWorks>
            <WhyChooseAbout></WhyChooseAbout>
            </div>
            <GetStart></GetStart>
        </div>
    );
};

export default About;