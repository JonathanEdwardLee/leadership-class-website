import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navigation.css';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
        <Container className="justify-content-center">
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
              <LinkContainer to="/games">
                <Nav.Link>Games</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hamburger-menu" onClick={handleShow}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <LinkContainer to="/" onClick={handleClose}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/music" onClick={handleClose}>
              <Nav.Link>Music</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/merch" onClick={handleClose}>
              <Nav.Link>Merch</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/videos" onClick={handleClose}>
              <Nav.Link>Videos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tour" onClick={handleClose}>
              <Nav.Link>Tour</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" onClick={handleClose}>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/games" onClick={handleClose}>
              <Nav.Link>Games</Nav.Link>
            </LinkContainer>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navigation;
