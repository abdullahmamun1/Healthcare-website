import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../image/banner1.png"
import banner2 from "../../../image/banner2.png"
import banner3 from "../../../image/banner3.png"

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100 bg-banner"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-2xl lg:text-5xl ">Best <span className="custom-color">Medical & </span><br></br> HealthCare Center</h3>
                        <p className="text-sm lg:text-xl ">  Pleasure, but because those who do not know how to pursue <br/> pleasure rationally extremely painful.</p>
                    </Carousel.Caption>
    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 bg-banner"
                    src={banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-2xl lg:text-5xl ">Best <span className="custom-color">Medical & </span><br></br> HealthCare Center</h3>
                    <p className="text-sm lg:text-xl ">  Pleasure, but because those who do not know how to pursue <br/> pleasure rationally extremely painful.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 bg-banner"
                    src={banner3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-2xl lg:text-5xl ">Best <span className="custom-color">Medical & </span><br></br> HealthCare Center</h3>
                    <p className="text-sm lg:text-xl ">  Pleasure, but because those who do not know how to pursue <br/> pleasure rationally extremely painful.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;