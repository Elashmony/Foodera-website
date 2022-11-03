import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from './../../Assests/logo.png'
import "./Navbar.css"
function NavBar()
{
    return (
        <Navbar sticky="top" className="fw-bold navsec"  expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="not founed"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#about" >About Us</Nav.Link>
                        <Nav.Link href="#foods" >Explore Foods</Nav.Link>
                        <Nav.Link href="#reviews">Reviews</Nav.Link>
                        <Nav.Link href="#faq" >FAQ</Nav.Link>
                    </Nav>
                    <Button className="btn primary-btn fw-bold ms-lg-3 rounded-0" variant="">1800 789 123</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;