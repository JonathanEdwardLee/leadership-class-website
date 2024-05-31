import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center">
          <Col>
            <p>Follow us on</p>
            <div className="social-links">
              <a href="https://www.youtube.com/channel/UCaiKg65I5qu6djN1r6Z0tpg" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.instagram.com/leadershipclassmusic/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/leadershipclassmusic" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
            <a href="/" className="home-link">Return to Home Page</a>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p className="small-text">&copy; 2024 Leadership Class. All rights reserved.</p>
            <p className="small-text">Built and maintained by <a href="https://github.com/JonathanEdwardLee" target="_blank" rel="noopener noreferrer">Jonathan Edward Lee</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
