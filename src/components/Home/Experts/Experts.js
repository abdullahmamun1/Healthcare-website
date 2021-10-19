import React, { useEffect, useState } from 'react';
import Expert from './Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        fetch('./experts.json')
        .then(res => res.json())
        .then(data => setExperts(data))
    },[])
    return (
        <div id="experts" className="my-10">
            <div className="my-10">
                <h1 className="text-center text-5xl font-bold mt-8 mb-4 "><span className="custom-color underline">Our Experts</span></h1>
                <p className="text-center text-xl">We provided some specialists for your  better treatment.</p>
            </div>
            <div  className="container grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;