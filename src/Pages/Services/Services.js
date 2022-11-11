import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../extra/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import('./Services.css')

const Services = () => {
    useTitle('Services');
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://server11-bice.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setProducts(data)
            }
            )
    }, [])



    return (
        <div className='container'>
            <h1 className='text-info mt-5 mb-4'>All services</h1>
            <Spinner className={loading ? 'd-blog' : 'd-none'} animation="border" variant="danger" />
            <Row>
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
        </div>
    );
};

export default Services;