import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import githubImg from '../../img/github.png';
import googleImg from '../../img/google.svg';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (loading || loadingGithub) {
        return <Loading></Loading>
    }

    if (error || errorGithub) {
        errorElement = <p className=' text-danger'>Error: {error?.message} </p>
    }

    if (user || userGithub) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className=' d-flex align-items-center' >
                <div className=' bg-primary w-50 ' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>or</p>
                <div className=' bg-primary w-50 ' style={{ height: '1px' }}></div>
            </div>
            <p className=' text-info'>
                <small>
                    Do not use the same email for a new account, avoid same email if used in your social account.
                </small>
            </p>
            {errorElement}

            <div className='w-100 p-0 mb-5 pb-4'>
                <button onClick={() => signInWithGoogle()} className='btn btn-info my-2 w-50 mx-auto d-block'>
                    <img style={{ width: '32px' }} src={googleImg} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info my-2 w-50 mx-auto d-block'>
                    <img style={{ width: '32px' }} src={githubImg} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;