import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner_section'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-10 mx-auto  text-center banner_text_section">
                        <h1 className=' text-uppercase fw-bolder'> Smart Cleaner </h1>
                        <p className='mb-5 pb-2 fs-4 fw-light text-white'>
                            A clean environment helps to make a fresh mind and able to gift a healthy life.
                        </p>
                        {/* Customer Reviews id is #reviews  */}                        
                        <a  className='text-white bg-info text-decoration-none py-3 px-4 rounded-3'  as={Link} href="#reviews"> Check Customer Reviews  </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;