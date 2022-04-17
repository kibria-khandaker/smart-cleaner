import React from 'react';
import { ImStarFull } from "react-icons/im";
import Rating from 'react-rating';

const SingleCustomerReviews = ({ customerReview }) => {
    const { img, name, rate, desc } = customerReview;

    return (
        <div className="col">
            <div className=" d-flex align-items-start ">
                <div className="col-md-2">
                    <img src={img} className="img-fluid rounded-circle mt-1" alt="CustomerReviews" />
                </div>
                <div className="col-md-10">
                    <div className="px-3">
                        <h5 className="fw-normal">{name}</h5>
                        <p>
                            <Rating
                                initialRating={rate}
                                emptySymbol={<ImStarFull />}
                                fullSymbol={<ImStarFull style={{ color: 'goldenrod' }} />}
                                readonly
                            ></Rating>
                        </p>
                        <p className="card-text fw-light"> {(desc).slice(0, 100)} </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleCustomerReviews;