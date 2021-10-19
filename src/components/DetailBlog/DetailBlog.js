import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const DetailBlog = () => {
    const { id } = useParams();

    const [blogs, setBlogs] = useState([]);
    const currentBlogs = blogs?.find(blog => blog.id === id)

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div>
            {currentBlogs && <div>
                <Container className=" d-flex justify-content-center">
                    <div className="w-50 text-center">
                        <img src={currentBlogs.img} className="w-100" alt="" />
                        <div className="d-flex justify-content-start m-2 fw-bolder">
                            <span className="date-style">{currentBlogs.date}</span>
                        </div>
                        <h4 className="my-3">{currentBlogs.title}</h4>
                        <p className="custom-about-para">{currentBlogs.des}</p>
                    </div>
                </Container>
            </div>
            }
        </div>
    );
};

export default DetailBlog;