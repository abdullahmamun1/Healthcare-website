import React from 'react';
import aboutImage from '../../../image/portrait-doctor.jpg';
import './about.css';

const About = () => {
    return (
        <div id="about">
            <div className="my-10">
                <h1 className="text-center text-5xl font-bold mt-8 mb-4 "><span className="custom-color underline">About Us</span></h1>
                <p className="text-center text-xl">We assured to you that we will provide responsible treatment to you.</p>
            </div>

            <div className="lg:flex">
                <div className="lg:w-1/2 mb-6">
                    <img src={aboutImage} alt="" />
                </div>
                <div className="lg:w-1/2 ml-6 items-center flex">
                    <div>
                    <h1 className="font-semibold">About <span className="custom-color">Smart MediCare</span></h1>
                    <p className="text-3xl font-bold">We’re giving everyone <span className="custom-color">most powerful treatment system</span>. They are making beautifully.</p>
                    <p>Every patient getting best care from us. again is there anyone who of itself, because it is pain, but because occasionally circumstance procure him some great pleasure.</p>
                    <br/>
                    <br/>
                    <ul className="ml-4">
                        <li className="list">We have so many expert doctors</li>
                        <li className="list">We think of our patients</li>
                        <li className="list">We have extra ordinary services</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;