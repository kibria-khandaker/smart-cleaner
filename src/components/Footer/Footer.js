import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-info py-4'>
            <p className='m-0'> <small>Copyright @ {year} </small>-Smart Cleaner </p>
        </footer>
    );
};

export default Footer;