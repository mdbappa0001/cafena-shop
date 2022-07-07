import React from 'react';
import banner from "../../images/banner/banner.jpeg";

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-10'></div>
                <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center justify-center'>
                    <div className='text-2xl pl-4 md:text-4xl lg:text-5xl lg:mr-96 font-bold text-white'><span className='lg:mr-72'>Best Coffee In The World</span></div>
                    <div className='hidden md:block lg:block py-12 lg:py-5 text-white pl-6 lg:mr-96'><span className='lg:mr-72'>We always try to help you by supplying world best coffee.You can always trust us.</span></div>
                    <a href="#contact" className='lg:mr-72'>
                        <button className='btn hidden md:block lg:block bg-lime-500 text-black hover:bg-lime-700 hover:text-white lg:mr-96'>Get Started Your Business With Us</button>
                    </a>
                </div>
                <img src={banner} className="w-full" alt='' />
            </div>
        </div>
    );
};

export default Banner;