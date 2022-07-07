import React from 'react';
import Notfound from "../images/notFound.png";

const NotFound = () => {
    return (
        <div className='md:ml-64 lg:ml-96'>
            <img className='w-96 justify-center items-center' src={Notfound} alt="" />
        </div>
    );
};

export default NotFound;