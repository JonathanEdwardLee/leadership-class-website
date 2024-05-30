import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PlaceholderPage = ({ link, linkText }) => {
  return (
    <Container className="content">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Page Coming Soon</h2>
          <p>For now, visit this link:</p>
          <Button className="btn-custom" href={link} target="_blank" rel="noopener noreferrer" >
            {linkText}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PlaceholderPage;
