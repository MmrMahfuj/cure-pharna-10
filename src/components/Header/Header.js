import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand as={Link} className="custom-title fw-bold fs-2" as={Link} to="/home">CURE <span id="logo">PHARMA</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="custom-style-link  fs-5" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/medicine">Medicine</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/blogs">Blog</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/contacts">Contact Us</Nav.Link>
                            <Nav.Link className="custom-style-link fs-5" as={Link} to="/about">About Us</Nav.Link>

                        </Nav>
                        <small className="mx-3 custom-name">{user?.displayName}</small>
                        {user?.email ? <Button className="regular-custom-btn" onClick={logOut}>LogOut</Button> :
                            <Link to="/login"><Button className="regular-custom-btn">Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;