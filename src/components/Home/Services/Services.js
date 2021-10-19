import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container" id="services" >
            <div className="my-10">
                <h1 className="text-center text-5xl font-bold mt-8 mb-4 "><span className="custom-color underline">Our Services</span></h1>
                <p className="text-center text-xl">We provided some important services to you for your betterment.</p>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;