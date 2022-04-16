import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className=' text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)

    }

    const navigateRegister = event => {
        navigate('/signup')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Check your Email');
        } else {
            toast('Enter Your email');
        }
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto py-5 mb-5">
                    <h2 className='my-4'> Please Login </h2>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                    </Form>

                    <div className=''>
                        {errorElement}
                        <p className='m-0 mt-4'> Forget Password? <button onClick={resetPassword} className=' border-0 rounded text-primary text-decoration-none'> Reset Password </button>  </p>
                        <p className='m-0 mt-1'> Are you new in Smart Cleaner? <Link onClick={navigateRegister} to='/signup' className=' text-primary text-decoration-none'> Please SignUp </Link>  </p>
                    </div>.

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;