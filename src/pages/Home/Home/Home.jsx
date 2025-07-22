import React from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel> 
            <div className='max-w-7xl mx-auto'>

            <TestimonialSlider></TestimonialSlider>
            <WhyChoose></WhyChoose>
            </div>
        </div>
    );
};

export default Home;