import React from 'react';
import HomeProducts from '../Products/HomeProducts';
import Footer from '../Shared/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeProducts />
            <Footer />
        </div>
    );
};

export default Home;