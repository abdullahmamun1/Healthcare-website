import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const {user, signInUsingGoogle, handleLogin,error, handleEmailChange, handlePasswordChange} = useAuth();
    return (
        <div className="pt-20">
        <h1 className="font-bold text-4xl text-center mt-4 mb-3">Please Login</h1>
        <Form className="mb-2" onSubmit={handleLogin}>
            <Container>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
  </Form.Group>
  <div>{error}</div>
  
  {user.email ? <Redirect to={{
              pathname: "/home"
            }}
          ></Redirect> : <Button className="custom-btn" type="submit" >
    Login
  </Button>}
  </Container>
  </Form>
  
  <Container className="py-10">
      <p>Create an Account? <Link to="/register" className="custom-color"><u>Register</u></Link></p>
      <br></br>
      <h1>Or.....</h1>
  <Button onClick={signInUsingGoogle} className="custom-border-btn mt-4">Google Sign In</Button>
  </Container>
  
  
  </div>
    );
};

export default Login;