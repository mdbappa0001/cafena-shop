import React from 'react';
import about from "../../images/items/about.jpeg";
import bullet from "../../images/icons/bullet.png";

const About = () => {
    return (
        <>
            <div className=' bg-black'>

                <h2 className='text-center text-3xl lg:text-5xl font-bold text-white'><span className='text-orange-200'>About</span> Us</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-12 lg:mt-24 px-12'>

                    <div>
                        <img className='w-full lg:w-5/6' src={about} alt="" />
                    </div>

                    <div className='justify-center text-center lg:mt-2 pb-4 w-11/12 ml-4'>

                        <h2 className='text-2xl lg:text-3xl text-center text-white font-bold mb-6'>What Makes Our Coffee Special?</h2>

                        <div className='flex items-center mb-6'>
                            <img className='w-6' src={bullet} alt="" />
                            <p className=' text-white ml-2'>Good communication is just as stimulating as black coffee, and just as hard to sleep after.</p>
                        </div>

                        <div className='flex items-center mb-6'>
                            <img className='w-6' src={bullet} alt="" />
                            <p className=' text-white ml-2'>If this is coffee, please bring me some tea; but if this is tea, please bring me some coffee.</p>
                        </div>

                        <div className='flex items-center mb-6'>
                            <img className='w-6' src={bullet} alt="" />
                            <p className=' text-white ml-2'>Slip joint, groove joint, and long nose pliers come with the socke the best stoke in the world.</p>
                        </div>

                        <div className='flex items-center mb-6'>
                            <img className='w-6' src={bullet} alt="" />
                            <p className=' text-white ml-2'>If this is coffee, please bring me some tea; but if this is tea, please bring me some coffee.</p>
                        </div>

                        <button className='btn bg-orange-300 text-black w-full hover:text-orange-400'>Let I Recomended You Best Coffee In The World </button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default About;