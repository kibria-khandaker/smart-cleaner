import React from 'react';
import { Accordion } from 'react-bootstrap';
import BlogAnswer1 from './BlogAnswer1';
import BlogAnswer2 from './BlogAnswer2';
import BlogAnswer3 from './BlogAnswer3';


const Blogs = () => {
    return (
        <div className='container'>
            <div className="row pb-5">
                <div className="col-lg-7 mx-auto py-5 mb-5">
                    <h4 className='my-5 fw-normal'> There are 3 questions click on the <span className=' text-info'>arrow</span> for every answer </h4>

                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h6> <span className='text-info'> Question 1:</span> <span className='fw-normal '>  Difference between <code> authorization </code>  and <code> authentication</code>? </span> </h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <BlogAnswer1></BlogAnswer1>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h6> <span className='text-info'> Question 2:</span> <span className='fw-normal '> Why are you using <code> firebase</code>? What other options do you have to <code> implement authentication</code>?</span> </h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <BlogAnswer2></BlogAnswer2>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <h6> <span className='text-info'> Question 3:</span> <span className='fw-normal '> What other services does <code>firebase</code> provide other than <code>authentication?</code></span> </h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <BlogAnswer3></BlogAnswer3>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
            </div>
        </div>
    );
};

export default Blogs;