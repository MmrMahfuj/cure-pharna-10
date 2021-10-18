import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfoundImg from '../../images/3747371.jpg';

const NotFound = () => {
    return (
        <div>
            <Container className="d-flex justify-content-center">
                <div className="w-50">
                    <img src={notfoundImg} className="img-fluid" alt="" />
                    <h1>Page Not Found!</h1>
                    <Link to="/home">
                        <Button className="regular-custom-btn">Go Back Home</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;