
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import('./Header.css')

const Header = () => {
    // const [toggle, setToggle] = useState(true);
    // const { user, logOut, setUser } = useContext(AuthContext);
    // console.log(user)
    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => {
    //             setUser('')
    //         })
    //         .catch(err => console.log(err));
    // }
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
                        <Link to={"blog"}> Blog </Link>

                        {/* {
                            user ?
                                <>
                                    <Link > Logout </Link>
                                   
                                </>
                                :
                                <>
                                    <Button variant="outline-primary"><Link to={'/login'}>Login</Link></Button>
                                </>
                        } */}
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    );
};

export default Header;