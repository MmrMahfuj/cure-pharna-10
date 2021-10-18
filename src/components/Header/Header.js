import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand className="custom-title fw-bold fs-2" as={Link} href="/home">CURE <span id="logo">PHARMA</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="custom-style-link  fs-5" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/medicine">Medicine</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/blogs">Blog</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/about">About Us</Nav.Link>

                        </Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;