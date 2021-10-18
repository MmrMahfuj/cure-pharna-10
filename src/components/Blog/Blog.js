import React from 'react';
import { Col } from 'react-bootstrap';
import './Blog.css';

const Blog = (props) => {
    const { img, title, des, id } = props.blog
    return (
        <>
            <Col md={4}>
                <div className="m-3 rounded shadow custom-blog-cart">
                    <div>
                        <img src={img} className="w-100 custom-service-img rounded" alt="" />
                    </div>
                    <div className="p-2 custom-blog-title">
                        <h5 className="my-2 services-title p-2">{title.slice(0, 50)}</h5>
                        <p className="p-2">{des.slice(0, 80)}</p>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default Blog;