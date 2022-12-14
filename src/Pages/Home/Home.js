import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../extra/useTitle';
import ExtraSection from './ExtraSection';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Slider from './Slider';
import('./Home.css')

const Home = () => {
    useTitle('Home')
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://server11-bice.vercel.app/limit")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Slider></Slider>
            <div className='container pb-5'>
                <h1 className='text-info mt-5 mb-3'>Top 3 services</h1>
                <Row className='background-card py-5 px-3'>
                    {
                        products.map(d => <Col key={d?._id} xs='12' lg='4' md='6'>
                            <Card className='my-3' style={{ width: '18rem' }}>
                                <PhotoProvider>
                                    <PhotoView src={d?.imgUrl}>

                                        <Card.Img className='service-img' variant="top" src={d?.imgUrl} />
                                    </PhotoView>
                                </PhotoProvider>
                                <Card.Body>
                                    <Card.Title>{d?.name}</Card.Title>
                                    <Card.Text>
                                        {d?.description.slice(0, 87)}...
                                    </Card.Text>
                                    <Card.Title>Price = {d?.price}</Card.Title>
                                    <Link to={`/services/${d._id}`} className='btn btn-info text-white fw-bold mt-4 px-4'>Details</Link>
                                </Card.Body>
                            </Card>

                        </Col>)
                    }
                </Row>
                <Link to='/services' className='btn btn-info text-white fw-bold mt-4 px-4'>See All</Link>
            </div>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;