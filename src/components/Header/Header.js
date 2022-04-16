import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../Smart-Cleaner.png';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="info">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <p className='m-0 '>I'm a smart cleaner. able to gift a clean life.</p>
                        </Nav>
                        <Nav>
                            <Nav.Link as={CustomLink} to="/">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blog"> Blog </Nav.Link>
                            <Nav.Link as={CustomLink} to="/login"> Login </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;