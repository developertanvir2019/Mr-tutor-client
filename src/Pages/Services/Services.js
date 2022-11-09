import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useTitle from '../../extra/useTitle';

const Services = () => {
    useTitle('Services');
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Row>
            {
                products.map(d => <Col key={d?._id} xs='12' lg='4' md='6'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={d?.imgUrl} />
                        <Card.Body>
                            <Card.Title>{d?.name}</Card.Title>
                            <Card.Text>
                                {d?.description.slice(0, 87)}...
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>

                </Col>)
            }
        </Row>
    );
};

export default Services;