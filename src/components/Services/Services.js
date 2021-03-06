import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <>
            <Container className="mt-5">
                <h2 className="services-title text-start">Our Spacial <span id="">Services</span></h2>
                <Row>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Services;