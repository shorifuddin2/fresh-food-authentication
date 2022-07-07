import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';
import useFirebase from './../../hooks/useFirebase';

const Login = () => {
    const { handleUserLogin } = useFirebase();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        handleUserLogin(data.email, data.password);
        reset();
    };

    return (
        <div>
            <Container>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
                    <div className="p-3 border rounded " style={{ width: '20rem', backgroundColor: 'rgb(175, 255, 220)' }}>
                        <h2>Please login</h2>

                        <Form onSubmit={handleSubmit(onSubmit)}>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    {...register("email", { required: true })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                />
                            </Form.Group>
                            <span>Create an account <Link to='/register'>signup</Link> </span>
                            <br />
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <hr />
                        <SocialLogin />
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Login;