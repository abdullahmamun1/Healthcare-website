import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, img, name, description} = service
    return (
        <div>
            <img src={img} alt="" className="mb-4"/>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="mb-2">{description}</p>
            <Link to={`/service/${id}`}><button className="btn custom-btn">More Info</button></Link>
        </div>
    );
};

export default Service;