import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const navigate = useNavigate();
    const handle = (e) => {
        e.preventDefault()
        alert('edit successfully')
        navigate('/myReviews')
    }
    return (
        <div>
            <Form onSubmit={handle}>
                <h2 className="text-info py-5">Edit review from here</h2>
                <Form.Control defaultValue={'you can edit you review from here'} required className='w-75 mx-auto mb-3' name='review' as="textarea" rows={3} />

                <Button className='px-5' variant="info" type="submit">
                    Edit Review
                </Button>
            </Form>
        </div>
    );
};

export default EditProduct;