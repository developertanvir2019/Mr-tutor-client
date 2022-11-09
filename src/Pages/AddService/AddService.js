import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useTitle from '../../extra/useTitle';

const AddService = () => {
    useTitle('AddService')

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const service = {
            name: form.name.value,
            price: form.price.value,
            imgUrl: form.imgUrl.value,
            description: form.description.value
        }
        console.log(service)

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(data.message)
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
        <div>
            <h2 className='text-info my-5'>Please add service from hare..</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5 '>
                <Form.Label>Name of service</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required name="name" type="text" placeholder="Enter name of service" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>price</Form.Label>
                    <Form.Control required name="price" type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control name="imgUrl" type="text" placeholder="Image url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product description</Form.Label>
                    <Form.Control name='description' as="textarea" rows={3} />
                </Form.Group>

                <Button className='px-5' variant="primary" type="submit">
                    Add service
                </Button>
            </Form>
        </div>
    );
};

export default AddService;