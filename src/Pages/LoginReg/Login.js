
import Button from 'react-bootstrap/Button';
import { FaGoogle } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../extra/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import('./Login.css')

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signIn, googleSign } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err)
            })
    }
    const provider = new GoogleAuthProvider()
    const handleGoogle = () => {
        googleSign(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 className='text-primary py-3'>Please Log in from here</h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5 '>
                <Form.Label>Email address</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name="password" type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-center'>You are new in <span className='text-primary'>Mr-Tutor</span> ? <Link to='/register'>create new account</Link></p>
                <Button className='px-5' variant="primary" type="submit">
                    Login
                </Button>
                <p className='py-3'>or signup with:</p>
            </Form>

            <div>
                <Link onClick={handleGoogle} className='icon-style' >Google Login<FaGoogle ></FaGoogle></Link> <br />
            </div>
        </div>
    );
};

export default Login;




