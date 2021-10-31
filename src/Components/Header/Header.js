import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="text-info fs-3">Luxurious Tour Bus Service</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="d-flex-lg justify-content-end">
                    <Nav>
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        {user.email && <Nav.Link as={HashLink} to="/manage">Manage</Nav.Link>}
                        {user.email && <button className="btn btn-primary" onClick={logout}>Logout</button>}
                        {user.email && <span className="text-light ms-2 mt-2">{user.displayName}</span>}
                        {user.email || <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;