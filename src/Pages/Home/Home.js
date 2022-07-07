import React from 'react';
import About from './About';
import Banner from './Banner';
import Review from './Review';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;