import React from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from './../../img/pages-bg.jpg'

const Services = () => {
    let navigate = useNavigate();
    const handleCheckout =()=>{
        navigate(`/checkout/sssssss`);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <h2> Services </h2>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={myImage} className="card-img-top" alt="myImage" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button onClick={handleCheckout} className="card-footer border-0">
                            <small className="text-info fw-bold text-uppercase"> Checkout Service </small>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={myImage} className="card-img-top" alt="myImage" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <button onClick={handleCheckout}  className="card-footer border-0">
                            <small className="text-info fw-bold text-uppercase"> Checkout Service </small>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={myImage} className="card-img-top" alt="myImage" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <button onClick={handleCheckout}  className="card-footer border-0">
                            <small className="text-info fw-bold text-uppercase"> Checkout Service </small>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;