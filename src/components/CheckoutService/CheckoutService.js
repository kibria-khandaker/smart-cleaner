import React, { useEffect, useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { auth } from './../../firebase.init';
import useServices from './../../hooks/useServices';

const CheckoutService = () => {
    const [services, setServices] = useServices();
    const [singleItems, setSingleItems] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        let product = services?.find(p => p?.id == serviceId)
        setSingleItems(product);
    }, [services, serviceId])

    let errorElement;
    //-----------------------
    const [user, setUser] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState('');

    //-2--------------------
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    //-------
    if (error) {
        errorElement = <p className=' text-danger'>Error: {error?.message} </p>
    }
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone }
        console.log(shipping);
    }

    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/')
    }


    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-12">
                    <h3 className='text-center pt-5'> Welcome to Checkout Option </h3>
                </div>
                <div className="row">
                    <div className='col-lg-6'>
                        <h5 className='text-center pt-5'> Input Your Shipping information </h5>
                        <div className="p-5">
                            {errorElement}
                            <Form onSubmit={handleCreateUser}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control onBlur={handleNameBlur} type="text" name="name" placeholder="Enter Name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control value={user?.email} readOnly type="email" name="email" placeholder="Enter Email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control onBlur={handleAddressBlur} type="text" name="address" placeholder='Type your Address' required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control onBlur={handlePhoneBlur} type="number" name="phone" placeholder='Type your Phone Number' required />
                                </Form.Group>

                                <Button variant="info" className=' w-100 text-white' type="submit">
                                    Submit
                                </Button>

                            </Form>
                            <p style={{ color: 'red' }}> {error} </p>

                            <div className=''>
                                <p className='m-0 mt-1'> I want to <Link onClick={navigateLogin} to='/' className=' text-info text-decoration-none'> Back Home </Link>  </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <h5 className='text-center pt-5'> Your Selected Service information </h5>
                        <div className='p-5'>

                            <div className='text-start text-lg-end'>
                                <p> ( <b>{serviceId}</b> ) : no of Selected Service</p>
                                <p> <b>{singleItems?.name}</b> : is the name of Selected Service </p>
                                <p> $<b>{singleItems?.price}</b>/day : Price of Selected Service </p>
                            </div>
                            <img className='w-50  float-lg-end' src={singleItems?.img1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <h4 className='text-black'>
                                        Read Details about
                                        <span className='text-info'> {singleItems?.name} </span>
                                        service
                                    </h4>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p> {singleItems?.shortText} </p>
                                    <img className='w-100 p-4' src={singleItems?.img2} alt="" />
                                    <p> {singleItems?.description1} </p>
                                    <img className='w-100 p-4' src={singleItems?.img3} alt="" />
                                    <p> {singleItems?.description2} </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutService;