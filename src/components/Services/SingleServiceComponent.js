import React from 'react';
import './Service.css'
import { HiShoppingCart } from "react-icons/hi";

const SingleServiceComponent = ({ service, handleCheckout }) => {
    const { id, name, price, category, shortText, description1, description2, img1, img2, img3 } = service;
    
    return (
        <div className="col">
            <div className="card hover_card">
                <img src={img1} className="card-img-top" alt="serviceImage" />
                <div className="hover_text card-body text-center">
                    <h5 className="card-title text-uppercase text-info my-4">{name}</h5>
                    <p className="card-text"> {shortText} </p>
                    <hr className='w-25 mx-auto' />
                    <p className="">Service Price <b>${price}</b>/day</p>
                </div>
                <button onClick={()=>handleCheckout(id)} className="hover_btn card-footer  bg-info border-0 py-3">
                    <small className=" text-white text-uppercase"> Checkout Service </small><span className='hover_sop_cart'><HiShoppingCart></HiShoppingCart></span>
                </button>
            </div>
        </div>
    );
};

export default SingleServiceComponent;