import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="">
            <div className="flex footer">
                <div className="w-1/2 flex justify-center items-center">
                    <div>
                        <p className="text-white">Follow us on:</p>
                        <a href="/home"><FontAwesomeIcon icon={faFacebook} className="text-white mr-2"/></a>
                        <a href="/home"><FontAwesomeIcon icon={faInstagram} className="text-white mr-2"/></a>
                        <a href="/home"><FontAwesomeIcon icon={faTwitter} className="text-white mr-2"/></a>
                        <a href="/home"><FontAwesomeIcon icon={faGithub} className="text-white"/></a>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <h1 className="font-bold text-white text-3xl">Smart <br/> MediCare</h1>
                </div>
                
            </div>
            <div className="text-center py-2 custom-bg-color text-white">
                    <h1>&#169; 2021 Smart MediCare all right reserved</h1>
                </div>
        </div>
    );
};

export default Footer;