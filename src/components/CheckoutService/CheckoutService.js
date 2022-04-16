import React from 'react';
import { useParams } from 'react-router-dom';

const CheckoutService = () => {
    const { serviceId } = useParams();
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h1> Here your Checkout Service </h1>
                    <p>{serviceId}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutService;