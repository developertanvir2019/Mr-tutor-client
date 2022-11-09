
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../extra/AuthProvider';
import('./Header.css')

const Header = () => {
    const { user, logOut, setUser } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser('')
            })
            .catch(err => console.log(err));
    }
    return (
        <Navbar className='my-nav' expand="lg">
            <Container fluid>
                <Navbar.Brand><Link to='/'><img src="https://c8.alamy.com/comp/2E2PMN6/vector-logo-of-a-tutor-educational-courses-2E2PMN6.jpg" alt="" /></Link></Navbar.Brand>
                <Navbar.Brand> <h4 className='text-white'>Mr-Tutor</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto pe-5"
                        style={{ maxHeight: '80px' }}
                        navbarScroll
                    >
                        <Link to={'/'}>Home</Link>
                        <Link to={'/services'}>Services</Link>
                        <Link to={"/blog"}> Blog </Link>

                        {
                            user ?
                                <>

                                    <Link to={'/addService'}>Add service</Link>
                                    <Link to={'/myReviews'}>My reviews</Link>
                                    <Link onClick={handleLogOut} > Logout </Link>

                                </>
                                :
                                <>
                                    <Link to={'/login'}>Login</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    );
};

export default Header;