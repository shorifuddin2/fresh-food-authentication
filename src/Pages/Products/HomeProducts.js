import React from 'react';
import AllProducts from './AllProducts';

const HomeProducts = () => {
    return (
        <div>
            <h1>this is home product</h1>
            <AllProducts limit={8} />
        </div>
    );
};

export default HomeProducts;