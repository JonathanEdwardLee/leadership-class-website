import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/NewsSection.css'; 

const newsItems = [
  {
    title: "Upcoming Show at The Fungeon",
    date: "June 22, 2024",
    description: "Show announcement soon! Follow @fungeon417 on Instagram to stay up to date!",
    link: "https://www.instagram.com/fungeon417/?hl=en"
  },
  {
    title: "Recording Progress",
    date: "May 29, 2024",
    description: "We are currently working on our album and sharing our progress as we go on Bandcamp. Support, listen, even download demos!",
    link: "https://www.leadershipclass.bandcamp.com/"
  },
  {
    title: "New Singles Released",
    date: "March 10, 2024",
    description: "Check out our latest singles on Spotify, Apple Music, Amazon, and Bandcamp.",
    link: "https://www.leadershipclassmusic.com/music"
  }
];

const NewsSection = () => {
  return (
    <Container className="news-section">
      <Row className="my-5">
        <Col>
          <h2 className="text-center">News and Updates</h2>
        </Col>
      </Row>
      <Row>
        {newsItems.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="news-card">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <Button className="btn-custom" href={item.link} target="_blank" rel="noopener noreferrer">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsSection;
