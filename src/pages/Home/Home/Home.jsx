import React from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import WhyChoose from '../WhyChoose/WhyChoose';
import PlatformStats from '../PlatformStats/PlatformStats';
import FAQ from '../FAQ/FAQ';
import HowItWorks from '../HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel> 
            <div className='max-w-7xl mx-auto'>

            <TestimonialSlider></TestimonialSlider>
            <WhyChoose></WhyChoose>
            <HowItWorks></HowItWorks>
            <PlatformStats></PlatformStats>
            <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;