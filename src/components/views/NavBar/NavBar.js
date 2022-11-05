import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">        
            <Container>
                <Navbar.Brand>Tables.app</Navbar.Brand>
                <Nav className="d-flex">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>      
    )
}

export default NavBar;