import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = (props) => {
    const { img, title, des, date, id } = props.blog
    return (
        <>
            <Col md={4}>
                <div className="m-3 rounded shadow custom-blog-cart">
                    <div>
                        <img src={img} className="w-100 custom-service-img rounded" alt="" />
                    </div>
                    <div className="d-flex justify-content-start m-2 fw-bolder">
                        <span className="date-style">{date}</span>
                    </div>
                    <div className="p-2 custom-blog-title">
                        <h5 className="my-2 services-title p-2">{title.slice(0, 50)}</h5>
                        <p className="p-2">{des.slice(0, 80)}</p>
                        <div className="d-flex justify-content-end">
                            <Link style={{ textDecoration: 'none', }}

                                to={`/detailBlog/${id}`}>
                                <p className="custom-service-link">Read More</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default Blog;