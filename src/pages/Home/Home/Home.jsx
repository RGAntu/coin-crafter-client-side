import React from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import WhyChoose from '../WhyChoose/WhyChoose';
import PlatformStats from '../PlatformStats/PlatformStats';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel> 
            <div className='max-w-7xl mx-auto'>

            <TestimonialSlider></TestimonialSlider>
            <WhyChoose></WhyChoose>
            <PlatformStats></PlatformStats>
            </div>
        </div>
    );
};

export default Home;