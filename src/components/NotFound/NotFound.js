import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../img/notFoun-404.gif';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound-page container-fluid'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 mx-auto py-md-5 text-center">
                        <h2 className='m-0 p-0 mt-5'>Ooops..! - <Link className=' text-info' to="/" > Back Home</Link> </h2>
                        <img className='w-100 mb-5' src={notFoundImg} alt=""  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;