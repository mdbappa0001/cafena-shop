import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import contact from "../../images/banner/contact.jpg";

const ContactUs = () => {

    const orderPlaced = async (e) => {
        e.preventDefault()
        toast('Welcome !!! You are connected with us.');

    }

    return (
        <>

            <div>

                <div className='w-full relative'>
                    <div className='w-full h-full sm:w-full bg-gray-700 top-0 left-0 absolute opacity-50'></div>
                    <div className='w-full h-full flex flex-col absolute top-0 left-0 items-center'>
                        <div className='lg:block text-2xl font-bold text-yellow-400 mt-12 '>Contact Us</div>
                        <div className='text-3xl  text-white mb-16 mt-2'>Stay Connected With Us</div>
                        <div>

                            <form onSubmit={orderPlaced}>

                                <input type="email" placeholder="Email Address" className="input input-bordered input-error w-96 mb-6" required /><br />
                                <input type="text" placeholder="Subject" className="input input-bordered input-error w-96 mb-6" required /><br />
                                <textarea type="text" placeholder="Your Message" rows="4" className="input input-bordered input-error w-96 mb-6 h-48" required /><br />
                                <ToastContainer />
                                <div>
                                    <input type="submit" value="Contact Us" className='btn bg-lime-400 text-black hover:bg-orange-600 hover:text-white ml-28' required />
                                </div>
                            </form>
                        </div>
                    </div>
                    <img className='w-full h-1/2 min-h-screen' src={contact} alt="" />
                </div>

            </div>
        </>
    );
};

export default ContactUs;