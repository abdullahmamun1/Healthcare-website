import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {user, error, signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegister, handleNameChange} = useAuth();
    return (
        <div className="pt-20">
        <h1 className="font-bold text-4xl text-center mt-4 mb-3">Please Register</h1>
        <Form className="mb-2" onSubmit={handleRegister}>
            <Container>
            <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Label>Your Name</Form.Label>
    <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Your Name" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
  </Form.Group>
  <div>{error}</div>
  {user.email ? <Redirect to={{
              pathname: "/home"
            }}
          ></Redirect> : <Button className="custom-btn" type="submit" >
    Register
  </Button>}
  </Container>
  </Form>
  <Container className="py-10">
      <p>Already have an Account? <Link to="/login" className="custom-color"><u>Login</u></Link></p>
      <br></br>
      <h1>Or.....</h1>
  <button onClick={signInUsingGoogle} className="custom-border-btn mt-4">Google Sign In</button>
  </Container>
  
  </div>
    );
};

export default Register;