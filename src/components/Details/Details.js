import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    const currentServices = services?.find(service => service.id === serviceId)

    return (
        <div>
            {currentServices && <div>
                <Container className=" d-flex justify-content-center">
                    <div className="w-50 text-center">
                        <img src={currentServices.img} className="w-100" alt="" />
                        <h4 className="my-3">{currentServices.title}</h4>
                        <p className="custom-about-para">{currentServices.des}</p>
                    </div>
                </Container>
            </div>
            }
        </div>
    );
};

export default Details;