import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Games.css';

const games = [
  {
    title: "Guestbook",
    description: "Sign and view messages from other fans.",
    link: "https://JonathanEdwardLee.pythonanywhere.com"
  },
  {
    title: "Music Theory Trivia",
    description: "Test your knowledge of music theory with this trivia game.",
    link: "/trivia"
  }
];

const Games = () => {
  return (
    <Container className="games-page">
      <Row className="my-5">
        <Col>
          <h2 className="text-center">Games</h2>
        </Col>
      </Row>
      <Row>
        {games.map((game, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="game-card">
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
                <Button variant="primary" href={game.link} target="_blank" rel="noopener noreferrer">Play</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Games;
