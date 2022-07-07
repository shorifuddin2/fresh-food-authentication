
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container, Image } from 'react-bootstrap';

const ProductDetails = () => {
    const [meal, setMeal] = useState({})
    const { id } = useParams();
    const { strMeal, strMealThumb, strInstructions } = meal;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [id])

    return (
        <Container>
            <Row>
                <Col>
                    <Image src={strMealThumb} />
                </Col>
                <Col>
                    <h2>{strMeal}</h2>
                    <p>{strInstructions}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;