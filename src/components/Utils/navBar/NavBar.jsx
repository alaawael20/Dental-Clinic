import React from "react";
import './NavBar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="customLogo">
          DentaCloud
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-toggle="collapse" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-lg-start text-center">
            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/faq" className="mx-2">
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="mx-2">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span className="mx-2">Sign Up</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
