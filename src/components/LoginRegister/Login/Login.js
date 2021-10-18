import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImg from '../../../images/login.png';
import './Login.css';

const Login = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="container-lg m-5 mx-auto">
                            <div className="login mx-auto p-3">
                                <h3>Please Login</h3>
                                <input className="m-2 p-2 w-75" type="email" name="" id="" placeholder="Your Email" required /><br />
                                <input className="m-2 p-2 w-75" type="password" name="" id="" placeholder="Your Password" required /><br />
                                <div className="d-flex justify-content-around mt-2">
                                    <span>
                                        <input type="checkbox" name="" id="" className="m-1 text-start" />
                                        <label htmlFor="vehicle2"> Remember Me</label>
                                    </span>
                                    {/* <Link>Forget Password</Link> */}
                                </div>
                                <br />

                                <Button className="w-75 mt-3 btn-regular">Login</Button><br />

                                <p className="mt-2">Don't have an account? <Link to="/register">Create an account</Link></p>
                            </div>

                        </div>
                        <div>----------------------------or--------------------------</div>
                        <div className="login-another mx-auto mb-4">
                            <Button className="w-50 rounded-pill" >Google Sign In</Button><br />
                            <Button className="w-50 rounded-pill mt-2" >Facebook Sign In</Button>
                        </div>
                    </Col>
                    <Col md={6} className="align-self-center">
                        <img src={loginImg} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;