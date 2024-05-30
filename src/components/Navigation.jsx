import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/">Leadership Class</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/music">
              <Nav.Link>Music</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/merch">
              <Nav.Link>Merch</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/videos">
              <Nav.Link>Videos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tour">
              <Nav.Link>Tour</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/guestbook">
              <Nav.Link>Guestbook</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;