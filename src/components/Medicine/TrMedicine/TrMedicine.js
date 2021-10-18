import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './TrMedicine.css';

const TrMedicine = (props) => {
    const { img, title, price, id } = props.trMedicine
    return (
        <>
            <Col md={3}>
                <div className="m-3 border p-2 shadow">
                    <div>
                        <img src={img} className="w-100 custom-service-img" alt="" />
                    </div>
                    <div>
                        <h6 className="my-2 services-title">{title.slice(0, 25)}</h6>
                        <p className="services-title">${price}</p>
                    </div>
                    <Button className="regular-custom-btn">Add To Cart</Button>
                </div>
            </Col>
        </>
    );
};

export default TrMedicine;