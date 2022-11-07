
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
                <Navbar.Brand><Link to='/'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I-51LGfxKAAqiwAFPGOpPgbEhm04kYzQRwjHirmijw&s" alt="" /></Link></Navbar.Brand>
                <Navbar.Brand> <h4 className='text-white'>Mr Tutor</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto pe-5"
                        style={{ maxHeight: '80px' }}
                        navbarScroll
                    >
                        <Link to={'/'}>Home</Link>
                        <Link to={'/courses'}>Courses</Link>

                        <Link to={'faq'}> FAQ </Link>
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