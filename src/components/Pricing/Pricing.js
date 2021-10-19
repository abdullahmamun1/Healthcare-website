import React from 'react';
import {Card} from 'react-bootstrap';

const Pricing = () => {
    return (
        <div className="container pt-20">
            <div className="my-10">
                <h1 className="text-center text-5xl font-bold mt-8 mb-4"><span className="custom-color underline">Pricing</span></h1>
                <p className="text-center text-xl font-semibold">Make life easier with comfortable pricing</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
                <Card>
                    <Card.Body>
                        <Card.Title className="text-4xl">Basic Plan</Card.Title>
                        <Card.Text>
                        <li>Weekly health check-ups</li>
                        <li>Lab test system an hour</li>
                        <li>Free diet consultation</li>
                        <li>Custom exercise plans</li>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <div className="flex justify-between items-center">
                    <button className="custom-border-btn">Get Started</button>
                    <small className="text-muted text-xl">$39</small>
                    </div>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-4xl">Standard Plan</Card.Title>
                        <Card.Text>
                        <li>Weekly health check-ups</li>
                        <li>Lab test system an hour</li>
                        <li>Free diet consultation</li>
                        <li>Custom exercise plans</li>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <div className="flex justify-between items-center">
                    <button className="custom-border-btn">Get Started</button>
                    <small className="text-muted text-xl">$49</small>
                    </div>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-4xl">Premium Plan</Card.Title>
                        <Card.Text>
                        <li>Weekly health check-ups</li>
                        <li>Lab test system an hour</li>
                        <li>Free diet consultation</li>
                        <li>Custom exercise plans</li>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <div className="flex justify-between items-center">
                    <button className="custom-border-btn">Get Started</button>
                    <small className="text-muted text-xl">$59</small>
                    </div>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default Pricing;