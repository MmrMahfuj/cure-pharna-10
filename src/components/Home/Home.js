import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import questionImg from '../../images/problem.png';
import orderImg1 from '../../images/order-1.jpg';
import orderImg2 from '../../images/order-2.jpg';
import orderImg3 from '../../images/order-3.jpg';
import experienceImg from '../../images/experience.jpg';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className="banner pt-5">
                <Row>
                    <Col md={6} className="pt-md-5">
                        <Container className="d-flex align-items-center justify-content-center">
                            <div className="mt-md-5">
                                <p className="text-white">Welcome to Cure Pharma</p>
                                <h1 className="text-white custom-banner-title">A better way <br /> for medicine</h1>
                                <h5 className="text-white fw-bold mt-3">Erat fringilla donec ligula magnis nulla<br /> consectetuer just to dolor</h5>
                                <Link to="/services"><Button className="custom-banner-btn me-2">SERVICES</Button></Link>
                                <Link to="/medicine"><Button className="custom-banner-btn" id="btn-banner">MEDICINE</Button></Link>
                            </div>
                        </Container>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </div>
            <div>
                <Container className="mt-5">
                    <h2 className="services-title">Our Spacial <span id="logo">Services</span></h2>
                    <Row>
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </Row>
                </Container>
            </div>
            <div>
                <Container className="mt-5 bg-light p-4 shadow">
                    <h2 className="services-title mb-5"><img src={questionImg} className="question-img" alt="" /> How do I order with Cure Pharma?</h2>
                    <Row>
                        <Col md={4} className="d-flex justify-content-center">
                            <div className="w-50 border bg-white order-cart">
                                <div>
                                    <img src={orderImg1} className="w-100 order-img" alt="" />
                                </div>
                                <div>
                                    <h5 className="order-step">Step-1: Choose your medicine.</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center">
                            <div className="w-50 border bg-white order-cart">
                                <div>
                                    <img src={orderImg2} className="w-100 order-img" alt="" />
                                </div>
                                <div>
                                    <h5 className="order-step">Step-2: Place your order.</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center">
                            <div className="w-50 border bg-white order-cart">
                                <div>
                                    <img src={orderImg3} className="w-100 order-img" alt="" />
                                </div>
                                <div>
                                    <h5 className="order-step">Step-3: Receive your item.</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container className="mt-5 pt-5">
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={experienceImg} className="img-fluid" alt="" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h1 className="text-start p-2">We can give you the smile you've always wanted</h1>
                                <p className="text-start p-2">Cure Pharma is responsible for protecting the public health by ensuring the safety, efficacy, and security of human and veterinary drugs, biological products, and medical devices; and by ensuring the safety of our nation's food supply, cosmetics, and products that products that emit radiation</p>
                                <Row>
                                    <Col>
                                        <div className="border border-3 border-success py-4">
                                            <h3>20 Years of Experience</h3>
                                        </div>
                                        <div className="mt-3">
                                            <h5>DR. Khan Amir Chowdhury</h5>
                                            <p>(Chairman & Founder)</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <p className="text-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg> Instant Checkup & Appointment
                                        </p>
                                        <p className="text-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg> Referral Services
                                        </p>
                                        <p className="text-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg> Reporting & Analysis
                                        </p>
                                        <p className="text-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg> Technical Medical Audit
                                        </p>
                                        <div className="text-start">
                                            <Link to="/about">
                                                <Button className="regular-custom-btn">More About Us</Button>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;