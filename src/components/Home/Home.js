import React from 'react';
import Banner from './../Banner/Banner';
import Services from './../Services/Services';
import CustomerReviews from './../CustomerReviews/CustomerReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;