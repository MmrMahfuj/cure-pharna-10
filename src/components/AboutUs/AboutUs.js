import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import founder from '../../images/founder.jpg';
import teamImg1 from '../../images/about-1.jpg';
import teamImg2 from '../../images/about-2.jpg';
import teamImg3 from '../../images/about-3.jpg';
import aboutBanner from '../../images/about-banner.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
            <div className="custom-contact-header p-4">
                <h1 className="custom-contact-title p-4 fw-bold text-white text-start">WHO WE ARE</h1>
            </div>
            <Container className="my-5">
                <img src={aboutBanner} className="img-fluid" alt="" />
            </Container>
            <Container className="mt-5 bg-light p-2">
                <Row>
                    <Col md={6}>
                        <div>
                            <img src={founder} className="img-fluid" alt="" />
                        </div>
                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        <div className="">
                            <h3 className="services-title">About of Founder</h3>
                            <p className="services-title custom-about-para">Welcome to Cure Pharma, your number one source for all things Medicine. We're dedicated to providing you the very best of medicine, with an emphasis on Dr Korim Shordar, Mr Rohman, Dr Lili Rahman.


                                Founded in 18-OCT-2021 by DR. Mahfujur Rahman, Cure Pharma has come a long way from its beginnings in Mohammadpur, Dhaka. When DR. Mahfujur Rahman first started out, his passion for Cure Pharma medicine drove them to start their own business.


                                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.


                                Sincerely,

                                DR. Mahfujur Rahman</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 pt-5">
                <h2 className="contact-title-email text-start mb-3">Our Lead <span id="logo">Team</span></h2>
                <Row>
                    <Col md={4}>
                        <div className="mt-3">
                            <div>
                                <img src={teamImg1} className="img-fluid" alt="" />
                            </div>
                            <div className="custom-about-img-title p-2">
                                <h4 className="text-white">Linda Graves</h4>
                                <p className="text-white">Pharmacist</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="mt-3">
                            <div>
                                <img src={teamImg2} className="img-fluid" alt="" />
                            </div>
                            <div className="custom-about-img-title p-2">
                                <h4 className="text-white">Edward Woods</h4>
                                <p className="text-white">Pharmacist</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="mt-3">
                            <div>
                                <img src={teamImg3} className="img-fluid" alt="" />
                            </div>
                            <div className="custom-about-img-title p-2">
                                <h4 className="text-white">Rita Thompson</h4>
                                <p className="text-white">Pharmacist</p>
                            </div>
                        </div>
                    </Col >
                </Row >
            </Container >
        </>
    );
};

export default AboutUs;