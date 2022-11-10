import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../extra/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const singleProduct = useLoaderData()[0];

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const reviews = {
            review: form.review.value,
            name: user?.displayName ? user.displayName : 'Default user',
            imgUrl: user?.photoURL,
            email: user?.email,
            singleProduct: singleProduct,
        }
        console.log(reviews)

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(data.message)
                    form.reset();
                }
                else {
                    alert(data.error)
                }
            })
            .catch(err => {
                alert(err.message)
            })


    };

    return (
        <div className='container'>
            <h1 className='text-info mt-5'>{singleProduct.name} Details</h1>
            <div className='d-flex justify-content-center'>
                <Card className='my-3' style={{ width: '25rem' }}>

                    <PhotoProvider>
                        <PhotoView src={singleProduct?.imgUrl}>


                            <Card.Img className='service-img' variant="top" src={singleProduct?.imgUrl} />
                        </PhotoView>
                    </PhotoProvider>
                    <Card.Body>
                        <Card.Title>{singleProduct?.name}</Card.Title>
                        <Card.Text>
                            {singleProduct?.description}
                        </Card.Text>
                        <Card.Title>Price = {singleProduct?.price}</Card.Title>
                        <Link className='btn btn-info text-white fw-bold mt-4 px-4'>Buy Now</Link>
                    </Card.Body>
                </Card>

            </div>

            {/*  review section  */}

            <div className='bg-light py-5'>
                <Form onSubmit={handleSubmit}>
                    <h2 className="text-info">Add review from here</h2>
                    <Form.Control required className='w-75 mx-auto mb-3' name='review' as="textarea" rows={3} />
                    {
                        user ?
                            <Button className='px-5' variant="info" type="submit">
                                Add Review
                            </Button>
                            :
                            <Link className='btn btn-info' to='/login'>Login For review</Link>
                    }
                </Form>
            </div>


        </div>
    );
};

export default ServiceDetails;