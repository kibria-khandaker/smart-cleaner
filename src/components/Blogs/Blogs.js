import React from 'react';
import { Table } from 'react-bootstrap';
import fireBaseServicesImg from '../../img/firebaseService.jpg'

const Blogs = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-7 mx-auto">
                    {/* -----------------  */}
                    <h4 className='pt-5 pb-3'> <span className='text-info'> Question 1:</span> <span className='fw-normal '>Difference between <code>authorization</code> and <code>authentication</code> </span> ?</h4>
                    <h5 className=' text-success'>Answer:</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='text-center'>
                                <th className=' text-secondary'> Authorization </th>
                                <th className=' text-secondary'> Authentication </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Normally comes after authentication.</td>
                                <td> Normally it is the first step of a security access control,  </td>
                            </tr>
                            <tr>
                                <td>Grants or denies permission to the user do something. </td>
                                <td> Normally Verifies the user's identity.</td>
                            </tr>

                            <tr>
                                <td>Permissions are granted and monitored by the organization.</td>
                                <td>Common methods include username, password, answer to a security question, and code sent via SMS or email.</td>
                            </tr>
                            <tr>
                                <td> A common method include: role_based get control and attribute-based get control</td>
                                <td> Uses biometric information like a fingerprint, face recognition, and retinal scan.</td>
                            </tr>
                            <tr>
                                <td>It's not visible by the user self.</td>
                                <td> It's visible to the user. </td>
                            </tr>
                            <tr>
                                <td>Cannot be changed by the user.</td>
                                <td> It's changeable by the user. </td>
                            </tr>
                            <tr>
                                <td>Giving someone access to download a particular file from a server or providing an individual user with administrative entree to an application are well examples for the authorization.</td>
                                <td>a standard example is entering a username and password once you log in to a website. getting into the proper login info lets the website recognize 1) </td>
                            </tr>
                        </tbody>
                    </Table>

                    <br /> <hr />
                    {/* ---------------------------  */}
                    <h4 className='pt-5 pb-3'> <span className='text-info'> Question 2:</span> <span className='fw-normal '> Why are you using <code>firebase?</code> What other options do you have to <code>implement authentication?</code></span> </h4>
                    <h5 className=' text-success'>Answer:</h5>
                    <p>Firebase is able to manage databases in real-time or instantly. Easy to exchange or easily with data migration using firebase, easy process to Authentication or Authorization. it's developer-friendly by google. and Firebase Storage is basically a powerful and simple object storage, in which you can store your files easily.</p>
                    <p> <b className=' text-secondary'>Here Some Name of Providers for  implement authentication: </b>  <br />
                        STYTCH ,
                        Ory ,
                        Supabase,
                        Okta,
                        PingIdentity,
                        Keycloak,
                        Frontegg,
                        Authress,
                        Auth0,
                        Amazon Cognito,
                        OneLogin,
                    </p>

                    <br /> <hr />
                    {/* --------------------------------  */}
                    <h4 className='pt-5 pb-3'> <span className='text-info'> Question 3:</span> <span className='fw-normal '> What other services does <code>firebase</code> provide other than <code>authentication?</code></span> </h4>
                    <h5 className=' text-success'>Answer:</h5>
                    <p><b className=' text-secondary'>There are  Firebase Services List other than Authentication:</b></p>

                    <p>
                        Cloud Firestore, +
                        Machine Learning, +
                        Cloud Functions,   +
                        Hosting,+
                        Cloud Storage,+
                        Realtime Database,+
                        Crashlytics,+
                        Performance Monitoring,+
                        Test Lab,+
                        App Distribution,+
                        Google Analytics,+
                        In-App Messaging,+
                        A/B Testing,+
                        Cloud Messaging,+
                        Remote Config,+
                        Dynamic Links,
                    </p>
                    <img className='w-100' src={fireBaseServicesImg} alt="FirebaseServices" />
                    <br /><br /><br /><br />

                </div>
            </div>
        </div>
    );
};

export default Blogs;