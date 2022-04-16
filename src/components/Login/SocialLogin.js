import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import githubImg from '../../img/github.png';
import googleImg from '../../img/google.svg';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorElement;
    if (loading || loadingGithub) {
        return <Loading></Loading>
    }
    if (error || errorGithub) {
        errorElement = <p className=' text-danger'>Error: {error?.message}  {errorGithub?.message}</p>
    }

    if (user || userGithub) {
        navigate('/home')
    }

    return (
        <div>
            <div className=' d-flex align-items-center' >
                <div className=' bg-primary w-50 ' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>or</p>
                <div className=' bg-primary w-50 ' style={{ height: '1px' }}></div>
            </div>
            {errorElement}
            <dir className='w-100 p-0'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary my-2 w-50 mx-auto d-block'>
                    <img style={{ width: '32px' }} src={googleImg} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary my-2 w-50 mx-auto d-block'>
                    <img style={{ width: '32px' }} src={githubImg} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </dir>
        </div>
    );
};

export default SocialLogin;