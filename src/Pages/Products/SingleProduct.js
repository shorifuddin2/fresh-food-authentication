import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';



const SingleProduct = ({ product }) => {
    const { strMeal, strMealThumb, strInstructions } = product || {};

    const navigate = useNavigate()
    const handleOrder = id => {
        navigate(`/product/${id}`)
    }

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title className='fw-bolder'>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 60)}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => handleOrder(product.idMeal || 52772)}>Order</Button>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default SingleProduct;