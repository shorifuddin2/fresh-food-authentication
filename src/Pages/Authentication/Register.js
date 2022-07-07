import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { handleCreateUser } = useFirebase();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        handleCreateUser(data.name, data.email, data.password);
        reset();
    };

    return (
        <div>
            <Container>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
                    <div className="p-3 border rounded " style={{ width: '20rem', backgroundColor: 'rgb(175, 255, 220)' }}>
                        <h2>Please Register</h2>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-1" >
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Full name"
                                    {...register("name", { required: true })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                />
                            </Form.Group>
                            <span>Registered? <Link to='/login'>signin</Link> </span>
                            <br />
                            <Button variant="primary" type="submit">
                                Register
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

export default Register;