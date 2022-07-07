import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services)
    return (
        <div className='py-10 bg-black'>
            <h1 className='text-center font-bold text-white text-5xl mb-8'> Our <span className='text-orange-300'>Services</span></h1>

            <div className='grid grid-cols-1 md:grid-cols-3  gap-10'>
                {services.map(service => <ServiceCard service={service} key={service.id}
                
                > </ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;