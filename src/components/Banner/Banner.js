import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner_section'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-10 mx-auto  text-center banner_text_section">
                        <h1 className=' text-uppercase fw-bolder'> Smart Cleaner </h1>
                        <p className='mb-4 pb-2 fs-4 fw-light text-white'>
                            A clean environment helps to make a fresh mind and able to gift a healthy life.
                        </p>
                        <Button variant='info' className=' text-white' size="lg" > Call Me For Cleaning </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;