import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../extra/AuthProvider';
import useTitle from '../../extra/useTitle';

const Register = () => {
    useTitle('Register')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState(null);

    const { createUser } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err.message)
            })
    }

    return (
        <div>
            <h1 className='text-primary py-3'>Please Registration from here</h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5 '>
                <Form.Label>Email address</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name="password" type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p className='text-center my-4'>Already have an account ? <Link to='/login'>Login</Link></p>
                <Button className='px-5' variant="primary" type="submit">
                    Registration
                </Button>
            </Form>


        </div>
    );
};

export default Register;