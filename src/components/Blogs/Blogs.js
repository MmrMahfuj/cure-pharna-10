import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <Container className="mt-5">
                <h2 className="services-title">Our Spacial <span id="logo">Blogs</span></h2>
                <Row>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Blogs;