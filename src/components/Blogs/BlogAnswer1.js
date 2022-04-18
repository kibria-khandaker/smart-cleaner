import React from 'react';
import { Table } from 'react-bootstrap';

const BlogAnswer1 = () => {
    return (
        <div>
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
        </div>
    );
};

export default BlogAnswer1;