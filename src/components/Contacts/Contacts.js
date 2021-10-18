import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Contacts.css';

const Contacts = () => {
    return (
        <>
            <div className="custom-contact-header p-4">
                <h1 className="custom-contact-title p-4 fw-bold text-white text-start">CONTACTS</h1>
            </div>
            <Container className="my-5">
                <Row>
                    <Col md={4}>
                        <div className="pt-5">
                            <h3 className="services-title m-3">Address</h3>
                            <p className="services-title">Chanduddan, Mohammadpur<br /> Dhaka-1207</p>
                            <hr className="contact" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="pt-5">
                            <h3 className="services-title m-3">Phone</h3>
                            <p className="services-title">(123) 456-78-90<br /> (123) 456-78-92</p>
                            <hr className="contact" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="pt-5">
                            <h3 className="services-title m-3">Email</h3>
                            <p className="services-title">sales@yoursite.com<br /> info@yoursite.com(123) 456-78-92</p>
                            <hr className="contact" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-5">
                <div>
                    <h1 className="contact-title-email">Have a <span id="logo">Question</span>?<br />
                        Drop a <span id="logo">Line</span>!
                    </h1>
                </div>
                <div className="mt-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <input type="text" placeholder="Name" className="p-3 w-25 m-2 rounded-pill custom-contact-border" />
                        <input type="email" name="" placeholder="Email" id="" className="p-3 w-25 m-2 rounded-pill custom-contact-border" />
                    </div>
                    <div className="mt-3">
                        <textarea name="" placeholder="Message" id="" cols="80" rows="20" className="rounded-3 p-3 custom-contact-border"></textarea>
                    </div>
                </div>
                <div className="mt-3">
                    <Button className="w-25 rounded-pill p-3 regular-custom-btn">SEND YOUR MESSAGE</Button>
                </div>
            </Container>
        </>
    );
};

export default Contacts;