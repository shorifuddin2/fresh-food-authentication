import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
import { Row, Container } from 'react-bootstrap';
import { useEffect } from 'react';

const AllProducts = ({ limit }) => {
    const [products, setProducts] = useState([]);

    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, []);

    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    limit ?
                        products.slice(0, limit).map(product => <SingleProduct key={product.idCategory} product={product} />)
                        :
                        products.map(product => <SingleProduct key={product.idCategory} product={product} />)
                }
            </Row>
        </Container>
    );
};

export default AllProducts;