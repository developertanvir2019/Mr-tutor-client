import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../extra/useTitle';
import('./Services.css')

const Services = () => {
    useTitle('Services');
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <Row>
                <h1 className='text-info mt-5'>All services</h1>
                {
                    products.map(d => <Col key={d?._id} xs='12' lg='4' md='6'>
                        <Card className='my-3' style={{ width: '18rem' }}>
                            <Card.Img className='service-img' variant="top" src={d?.imgUrl} />
                            <Card.Body>
                                <Card.Title>{d?.name}</Card.Title>
                                <Card.Text>
                                    {d?.description.slice(0, 87)}...
                                </Card.Text>
                                <Link className='btn btn-info text-white fw-bold mt-4 px-4'>Details</Link>
                            </Card.Body>
                        </Card>

                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Services;