import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import SingleServiceComponent from './SingleServiceComponent';


const Services = () => {

    const [services, setServices] = useServices()
    
    let navigate = useNavigate();

    const handleCheckout = (id) => {
        navigate(`/checkout/${id}`);
    }

    return (
        <div className='container py-5'>
            
            <div className="row pt-5">
                <div className="col-md-12 pb-4">
                    <h2 className='text-center text-uppercase my-4 text-info'> Services </h2>
                    <p className=' w-75 mx-auto text-center'> Cleaning eliminates germs along with dirt and dust, resulting in better indoor air quality, leaving a whiff of freshness in its wake. The kitchen and bathroom usually require special attention, as they are known to be one of the germiest places in any house. </p>
                </div>
            </div>
            {/* service part  */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-5">
                {
                    services.map(service => <SingleServiceComponent
                        key={service.id}
                        service={service}
                        handleCheckout={handleCheckout}
                    ></SingleServiceComponent>)
                }
            </div>
        </div>
    );
};

export default Services;