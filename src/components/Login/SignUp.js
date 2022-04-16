import React, { useState } from 'react';
import { Button, Form, FormLabel } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { auth } from './../../firebase.init';
import './Login_Signup.css';

const SignUp = () => {
    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // old user redirect to login
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto py-5 mb-5">
                    <h2 className='my-4'> Please Sign Up </h2>
                    <Form onSubmit={handleRegister}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" name="name" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name="email" placeholder="Enter Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                            <Form.Check  onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                            <FormLabel className={`ps-2 ${agree ? 'text-info' : 'text-danger'}`} htmlFor="terms">
                                Agree With Terms and Conditions
                            </FormLabel>
                        </Form.Group>

                        <Button disabled={!agree} variant="info" className=' text-white' type="submit">
                            Sign Up
                        </Button>

                    </Form>
                    <div className=''>
                        <p className='m-0 mt-4'> Forget Password? <button className=' border-0 rounded text-info text-decoration-none'> Reset Password </button>  </p>
                        <p className='m-0 mt-1'> Already Have an account? <Link  onClick={navigateLogin} to='/login' className=' text-info text-decoration-none'> Please Login </Link>  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;