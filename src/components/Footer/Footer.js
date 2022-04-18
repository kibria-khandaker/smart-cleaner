import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-info py-4'>
            <Link className=' text-decoration-none' to={'/privacypolicy'}> Our Privacy policy </Link>
            <p className='m-0 text-white '> <small>Copyright @ {year} </small>-Smart Cleaner </p>
        </footer>
    );
};

export default Footer;