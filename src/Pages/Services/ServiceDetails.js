import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Form, Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../extra/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import('./ServiceDetails.css')

const ServiceDetails = () => {
    const [refresh, setrefresh] = useState(true)
    const { user } = useContext(AuthContext)
    const singleProduct = useLoaderData()[0];
    console.log(singleProduct)

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const reviews = {
            review: form.review.value,
            name: user?.displayName ? user.displayName : 'Default user',
            imgUrl: user?.photoURL,
            productName: singleProduct.name,
            email: user?.email,
            singleProduct: singleProduct,
        }
        console.log(reviews)

        fetch('https://server11-bice.vercel.app/review', {
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


    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`https://server11-bice.vercel.app/productReview?productName=${singleProduct.name}`)
            .then(res => res.json())
            .then(data => {
                setrefresh(!refresh)
                setReview(data)
            })
    }, [refresh])



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


            {/* review show section */}
            <div>

                <Table className='my-5' striped>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th> Name</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(re =>
                                <tr key={re._id}>
                                    <td><img className='photoImg' src={user?.photoURL ? user?.photoURL : 'https://www.computerhope.com/jargon/g/guest-user.png'} alt="" /></td>
                                    <td>{re.name}</td>
                                    <td>{re.review}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>



            {/*  review section  add section */}

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