import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { img, title, des, id } = props.service
    return (
        <>
            <Col md={4}>
                <div className="m-3 border p-2 shadow">
                    <div>
                        <img src={img} className="w-100 custom-service-img" alt="" />
                    </div>
                    <div>
                        <h5 className="my-2 services-title">{title}</h5>
                        <p>{des.slice(0, 80)}</p>

                        <div className="d-flex justify-content-center">
                            <Link style={{ textDecoration: 'none', }}

                                to={`/Details/${id}`}>
                                <p className="custom-service-link">More Details</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </Col>
        </>
    );
};

export default Service;