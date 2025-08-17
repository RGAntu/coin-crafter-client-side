import React from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import WhyChoose from '../WhyChoose/WhyChoose';
import PlatformStats from '../PlatformStats/PlatformStats';
import FAQ from '../FAQ/FAQ';
import HowItWorks from '../HowItWorks/HowItWorks';
import BestWorkers from '../BestWorkers/BestWorkers';
import JoinCommunity from '../JoinCommunity/JoinCommunity';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel> 
            <div className='max-w-7xl mx-auto'>
            <BestWorkers></BestWorkers>
            <TestimonialSlider></TestimonialSlider>
            <WhyChoose></WhyChoose>
            <HowItWorks></HowItWorks>
            <PlatformStats></PlatformStats>
            <JoinCommunity></JoinCommunity>
            <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;