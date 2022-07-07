import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import review1 from "../../images/review/pic-1.png";
import review2 from "../../images/review/pic-2.png";
import review3 from "../../images/review/pic-3.png";
import quote from "../../images/review/quote-img.png";
const Review = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='bg-black py-10 px-12'>
            <h1 className='text-center font-bold text-orange-200 text-5xl py-12 mb-12 '>Customer <span className='text-white'>Review</span></h1>
            <Carousel
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}

            >

                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className='w-12 mb-4 ml-32' src={quote} alt="" />
                            <small className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</small>
                        </div>
                        <div className="rating">
                            <span className='font-bold text-xl ml-8 mr-3'>Rating : </span>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review1} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>William Cox</h4>
                                <small className='font-extrabold'>*Canada</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className='w-12 mb-4 ml-32' src={quote} alt="" />
                            <small className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</small>
                        </div>
                        <div className="rating">
                            <span className='font-bold text-xl ml-8 mr-3'>Rating : </span>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review2} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>William Cox</h4>
                                <small className='font-extrabold'>*Canada</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className='w-12 mb-4 ml-32' src={quote} alt="" />
                            <small className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</small>
                        </div>
                        <div className="rating">
                            <span className='font-bold text-xl ml-8 mr-3'>Rating : </span>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review3} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>William Cox</h4>
                                <small className='font-extrabold'>*Canada</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className='w-12 mb-4 ml-32' src={quote} alt="" />
                            <small className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</small>
                        </div>
                        <div className="rating">
                            <span className='font-bold text-xl ml-8 mr-3'>Rating : </span>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review1} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>William Cox</h4>
                                <small className='font-extrabold'>*Canada</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className='w-12 mb-4 ml-32' src={quote} alt="" />
                            <small className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</small>
                        </div>
                        <div className="rating">
                            <span className='font-bold text-xl ml-8 mr-3'>Rating : </span>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review2} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>William Cox</h4>
                                <small className='font-extrabold'>*Canada</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className='w-12 mb-4 ml-32' src={quote} alt="" />
                            <small className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</small>
                        </div>
                        <div className="rating">
                            <span className='font-bold text-xl ml-8 mr-3'>Rating : </span>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd52b]" />
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review3} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>William Cox</h4>
                                <small className='font-extrabold'>*Canada</small>
                            </div>
                        </div>
                    </div>
                </div>


            </Carousel>
        </div>

    );
};

export default Review;