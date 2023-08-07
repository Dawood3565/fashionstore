import React from 'react';
import Navbar from './navbar';
import { Carousel, Col, Row } from 'antd';
import './home.css';
import { Link } from 'react-router-dom';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Home = () => {
    const isAuthenticated = true;
    return (
        <>
            <Navbar />
            <Carousel autoplay>
                <div>
                    <img src='/banner1.webp' alt="Banner 1" />
                </div>
                <div>
                    <img src='/banner2.webp' alt="Banner 2" />
                </div>
            </Carousel>
            <div className='container'>
                <Row gutter={[12]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        {isAuthenticated ? (
                            <Link to="/products">
                                <img src='/New_arrivals.webp' alt="New Arrivals" width={'100%'} />
                            </Link>
                        ) : (
                            <Link to="/userlogin">
                                <img src='/New_arrivals.webp' alt="New Arrivals" width={'100%'} />
                            </Link>
                        )}
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        {isAuthenticated ? (
                            <Link to="/products">
                                <img src='/men.webp' alt="Men" width={'100%'} />
                            </Link>
                        ) : (
                            <Link to="/userlogin">
                                <img src='/men.webp' alt="Men" width={'100%'} />
                            </Link>
                        )}
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default Home;
