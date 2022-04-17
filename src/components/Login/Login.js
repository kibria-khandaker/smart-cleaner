import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from './SocialLogin';

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
            toast.success(` 👌 Check your Email ${email}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.warn('Enter only your email in the Email Filed 🦄', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto pt-5 ">
                    <h2 className='my-4'> Please Login </h2>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="info text-white px-5" type="submit">
                            Login
                        </Button>

                    </Form>

                    <div className=''>
                        {errorElement}
                        <p className='m-0 mt-4'> Forget Password? <button onClick={resetPassword} className=' border-0 rounded text-primary text-decoration-none'> Reset Password </button>  </p>
                        <p className='m-0 mt-1'> Are you new in Smart Cleaner? <Link onClick={navigateRegister} to='/signup' className=' text-primary text-decoration-none'> Please SignUp </Link>  </p>
                    </div>
                    <ToastContainer />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto pb-4">
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;