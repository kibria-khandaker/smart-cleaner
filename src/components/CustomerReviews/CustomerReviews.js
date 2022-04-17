import React from 'react';
import useReviews from './../../hooks/useCustomerReviews';
import './CustomerReviews.css';
import SingleCustomerReviews from './SingleCustomerReviews';

const CustomerReviews = () => {
    const [customerReviews, setCustomerReviews] = useReviews();

    return (
        <div className='container-fluid bg-light mt-5 py-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 pt-4 ">
                        <h2 className='text-center text-uppercase my-4 text-info'>
                            Customer Reviews
                        </h2>

                    </div>
                    <hr className='w-25 mx-auto' />
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5 mt-3">
                    {
                        customerReviews.map(customerReview => <SingleCustomerReviews
                            key={customerReview.id}
                            customerReview={customerReview}
                        ></SingleCustomerReviews>).slice(11, 14)
                    }
                </div>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <p className=' text-center'> A useful review includes enough detail to give others a feel for what happened. Potential customers want to know more than that someone else was happy. They want to know what exactly they liked so that they can gauge whether it aligns with their own preferences.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerReviews;