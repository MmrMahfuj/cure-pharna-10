import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
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
                                <p className="text-white">Weclome to Cure Pharma</p>
                                <h1 className="text-white custom-banner-title">A better way <br /> for medicine</h1>
                                <h5 className="text-white fw-bold mt-3">Erat fringilla donec ligula magnis nulla<br /> consectetuer justo dolor</h5>
                                <Button className="custom-banner-btn me-2">services</Button>
                                <Button className="custom-banner-btn" id="btn-banner">Medicine</Button>
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
        </div>
    );
};

export default Home;