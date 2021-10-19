import { faFax, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className="my-10 pt-20">
            <div className="my-10">
                <h1 className="text-center text-5xl font-bold mt-8 mb-4 "><span className="custom-color underline">Contact Us</span></h1>
                <p className="text-center text-xl">Really we want to help you as soon as possible.</p>
            </div>
            <div>
                <div className="lg:flex w-full">
                    <div className="mx-4 lg:mx-20 lg:w-1/2 justify-center">
                        <h1 className="text-5xl font-semibold mb-4 text-center">Send Us Message</h1>
                        <div className="lg:flex lg:mb-4">
                            <input className="border-2 mb-2 p-1 w-full lg:w-1/2 custom-border-color mr-2" type="text" name="first-name" placeholder="First Name" />
                            <input className="border-2 mb-2 p-1 w-full lg:w-1/2 custom-border-color lg:ml-2" type="text" name="last-name" placeholder="Last Name" />
                        </div>
                        <input className="border-2 p-1 w-full custom-border-color mb-4" type="email" name="email" placeholder="Email" />
                        <textarea className="border-2 p-1 w-full custom-border-color" name="message" placeholder="Your Message" cols="30" rows="10"></textarea>
                        <button className="w-full custom-bg-color text-white py-2 hover:bg-red-700">Submit</button>
                    </div>
                    <div className="lg:w-1/2 lg:text-left text-center pt-20">
                        <br/>
                        <p className="text-xl">Or..</p>
                        <h3 className="text-3xl">Contact us on..</h3>
                        <br />
                        <p><FontAwesomeIcon icon={faPhone} /> +11 234 554</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +11 234 555</p>
                        <p><FontAwesomeIcon icon={faFax} /> +11 234 556</p>
                        <br/>
                        <p><FontAwesomeIcon icon={faMapMarker} /> 21 no. Street, Green Road, Dhaka</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;