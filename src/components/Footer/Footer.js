import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-info py-4'>
            <p className='m-0'> <small>Copyright @ {year} </small>-Smart Cleaner </p>
            <Link className=' text-decoration-none' to={'/privacypolicy'}> Our Privacy policy </Link>
        </footer>
    );
};

export default Footer;