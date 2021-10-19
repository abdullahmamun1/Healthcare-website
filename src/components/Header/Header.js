import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="light" fixed="sticky" collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><span className="custom-color font-bold">Smart</span> <br></br>MediCare</Navbar.Brand>
                    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home"  className="text-dark link">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about" className="text-dark">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services" className="text-dark">Services</Nav.Link>
                            <Nav.Link as={Link} to="/pricing" className="text-dark">Pricing</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="text-dark">Contact Us</Nav.Link>
                        <Navbar.Text>
                        Signed in as: <b>{user?.displayName}</b>
                        </Navbar.Text>
                        {user.email ? <Button onClick={logOut} className="custom-btn ml-4" variant="light">Logout</Button> : <Nav.Link as={Link} to="/login" className="custom-btn ml-4">Login</Nav.Link>}
                        
                        {!user.email && <Nav.Link as={Link} to="/register" className="custom-border-btn ml-2">Register</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;