import React from 'react';
import portfolio from "../../images/me/portfolio.jpg";
import Footer from '../../Shared/Footer';

const Portfolio = () => {
    return (
       <>
        <div className='my-10  md:h-[100vh] px-10'>
            <div className='text-2xl'>
                <div className='grid md:grid-cols-2'>
                    <div className='md:order-1 order-2 '>
                        <p><b>Hello , I am Abu Tanif MD Bappa </b> <br /> <br />
                            {/* I am studding department of agriculture at Sylhet Agricultural University, Bangladesh. */}
                            I want to become a developer. Now I am very close to it. I want to get a job on a software company as a junior  web developer I always Dedicated myself for achieve my goal.</p>
                        <p className='my-5'>I am very determined to get what i want. I did practice 5-8 hours to clear the concept that Jhankar Mahabub vai taught us. I did all the assignment very carefully and try my best to full fill all the requirement. I never stopped before my jod done. In last 6 months I faced many difficulties but I continue with my learning I will continue my herd work until success.</p>
                    </div>
                    <div className='md:order-2 order-1 md:p-10 pb-10'>
                        <img className='w-3/4 ml-12' src={portfolio} alt="" />
                    </div>


                </div>

            </div>
        </div >
        <Footer></Footer>
       </>
    );
};

export default Portfolio;