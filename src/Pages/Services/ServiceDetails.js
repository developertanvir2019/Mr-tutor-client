import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const singleProduct = useLoaderData()[0];
    console.log(singleProduct)

    return (
        <div className='container'>
            <h1 className='text-info mt-5'>{singleProduct.name} Details</h1>
            <div>
                <div className='d-flex justify-content-center'>
                    <Card className='my-3' style={{ width: '25rem' }}>
                        <Card.Img className='service-img' variant="top" src={singleProduct?.imgUrl} />
                        <Card.Body>
                            <Card.Title>{singleProduct?.name}</Card.Title>
                            <Card.Text>
                                {singleProduct?.description}
                            </Card.Text>
                            <Card.Title>Price = {singleProduct?.price}</Card.Title>
                            <Link to={`/services/${singleProduct._id}`} className='btn btn-info text-white fw-bold mt-4 px-4'>Details</Link>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;