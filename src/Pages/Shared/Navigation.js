import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Navigation = () => {
    const { user, handleLogout } = useFirebase();


    return (
        <Navbar collapseOnSelect expand="lg" variant='dark' style={{ backgroundColor: 'rgb(175 255 220)' }} >
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: 'black' }} className="fw-bolder ">Fresh Foods</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" style={{ color: 'black' }} className="fw-bolder ">Home </Nav.Link>

                        <Nav.Link as={Link} to="/products" style={{ color: 'black' }} className="fw-bolder ">All Products </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link style={{ color: 'blue' }} className="fw-bolder ">{user?.displayName}</Nav.Link>
                        {
                            user.email
                                ?
                                <Nav.Link onClick={handleLogout} style={{ color: 'black' }} className="fw-bolder ">Logout </Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login" style={{ color: 'black' }} className="fw-bolder ">Login </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;