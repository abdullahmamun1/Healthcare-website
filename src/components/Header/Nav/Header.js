import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="light" fixed="sticky" collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><span className="text-danger">Smart</span> <br></br>MediCare</Navbar.Brand>
                    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home"  className="text-dark links">Home</Nav.Link>
                            <Nav.Link as={HashLink} href="#features" className="text-dark">About</Nav.Link>
                            <Nav.Link as={HashLink} href="#pricing" className="text-dark">Services</Nav.Link>
                            <Nav.Link as={HashLink} href="#pricing" className="text-dark">Our Experts</Nav.Link>
                        <Navbar.Text>
                        Signed in as: <b>{user?.displayName}</b>
                        </Navbar.Text>
                        {user.email ? <Button onClick={logOut} className="custom-btn" variant="light">Logout</Button> : <Nav.Link as={Link} to="/login"><Button className="custom-btn" variant="light">Login</Button></Nav.Link>}
                        
                        <Button className="custom-border-btn " variant="light">Register</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;