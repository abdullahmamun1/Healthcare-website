import React from 'react';

const Expert = ({expert}) => {
    const {img, name,title, medical, schedule} = expert
    return (
        <div>
            <img src={img} alt="" />
            <h1 className="font-bold text-3xl">{name}</h1>
            <p className="font-semibold text-xl">{title}</p>
            <p>{medical}</p>
            <p>Schedule: {schedule}</p>
        </div>
    );
};

export default Expert;