import React from 'react';

const SingleServiceComponent = ({ service, handleCheckout }) => {
    const { id, name, price, category, shortText, description1, description2, img1, img2, img3 } = service;
    
    return (
        <div className="col">
            <div className="card h-100 ">
                <img src={img1} className="card-img-top" alt="myImage" />
                <div className="card-body text-center">
                    <h5 className="card-title text-uppercase text-info my-4">{name}</h5>
                    <p className="card-text"> {shortText} </p>
                    <hr className='w-25 mx-auto' />
                    <p className="">Service Price <b>${price}</b>/day</p>
                </div>
                <button onClick={()=>handleCheckout(id)} className="card-footer  bg-info border-0">
                    <small className=" text-white text-uppercase"> Checkout Service </small>
                </button>
            </div>
        </div>
    );
};

export default SingleServiceComponent;