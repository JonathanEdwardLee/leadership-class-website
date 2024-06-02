import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kxbflgi', 'template_w5jvp2s', e.target, 'dmP6hrIo8MJ-LYk4H')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <Container className="contact-page">
      <h2 className="text-center my-5">Contact Us, Book Us, Say Hi</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            value={formData.name}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={formData.email}
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            placeholder="Enter your message"
            onChange={handleChange}
            value={formData.message}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
      <div className="about-leadership-class mt-5">
        <Row>
          <Col>
            <h1>About Leadership Class</h1>
            <p>Forged in the vibrant cultural heart of Springfield, MO, <strong>Leadership Class</strong> stands at the forefront of the alternative rock revival. The band's genesis lies in Nixa High's hallowed halls, where <strong class="orange-text">Jonathan Lee</strong> and <strong class="orange-text">Jason Conley</strong> first united their musical fates. After an early taste of creation with a cassette album in 1996 and a rekindling of their shared vision in the early 2000's band Floob, life's divergent paths could not keep the music at bay. In 2021, with the world in a state of reinvention, Jonathan and Jason's paths converged anew, setting the stage for Leadership Class's emergence in October 2022, with the arrival of <strong class="orange-text">Jacob Shively</strong> on percussion and pads and <strong class="orange-text">Nate Esterline</strong> enriching the harmonies and introducing synths.</p>

          </Col>
        </Row>
        <Row>
          <Col>
            <p>The quartet's sound is a rich tapestry of original alt-rock, unconstrained by genre, emboldened by creativity, and have been likened to the eclectic essence of Butthole Surfers and Queens of the Stone Age. Yet, Leadership Class forges its own path, inviting listeners to lead and excel in their own lives. With an unyielding commitment to full-time musicianship, their dedication to craft is unwavering.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>2024 heralds a milestone with their appearance at Queen City Shout, their Live Rehearsal at the Fungeon Album and a suite of singles captivating listeners on Spotify, Apple Music, Amazon, and Bandcamp.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>The band's rehearsal space, known fondly as the <a href="https://www.instagram.com/fungeon417/?hl=en" target="_blank" rel="noopener noreferrer">Fungeon</a>, epitomizes their community spirit—hosting basement shows that celebrate the local music scene's vibrancy.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>With LeadershipClassMusic.com as the digital nexus for all things Leadership Class, the band's ethos and sound reach fans far and wide. As they embark on recording a full-length album and anticipate touring outside Springfield, their sights are set high. While they navigate the industry's waters, potential managers and collaborators are invited to reach out through their website's contact page above.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Leadership Class beckons you to be part of their story—a journey of rhythmic innovation, community, and the pursuit of artistry. Embrace the movement where music meets leadership, and let the class begin.</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ContactPage;
