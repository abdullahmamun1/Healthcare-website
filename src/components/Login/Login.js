import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <>
        <h1 className="font-bold text-4xl text-center mt-4 mb-3">Please Login</h1>
        <Form>
            <Container>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button className="custom-btn" type="submit">
    Submit
  </Button>
  </Container>
  </Form>
  <Container>
      <br></br>
      <h1>Or.....</h1>
  <button onClick={signInUsingGoogle} className="custom-border-btn mt-4">Google Sign In</button>
  </Container>
  
  </>
    );
};

export default Login;