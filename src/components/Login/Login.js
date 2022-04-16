import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto py-5 mb-5">
                    <h2 className='my-4'> Please Login </h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <div className=''>
                        <p className='m-0 mt-4'> Forget Password? <button className=' border-0 rounded text-primary text-decoration-none'> Reset Password </button>  </p>
                        <p className='m-0 mt-1'> Are you new in Smart Cleaner? <Link to='/signup' className=' text-primary text-decoration-none'> Please SignUp </Link>  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;