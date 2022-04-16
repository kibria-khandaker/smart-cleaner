import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner_section'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-10 mx-auto  text-center">
                        <h1 className=' text-uppercase'> Smart Cleaner </h1>
                        <p className='mb-4 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quo.</p>
                        <Button variant='info' className=' text-white'  size="lg" > Call Me For Cleaning </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;