import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="hero fixed-hero" id="home">
      <Container fluid="lg">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6} className="d-flex justify-content-center justify-content-md-start">
            <div className="hero-content">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>Hi, I'm Jennifer Nicole Cerbas</h1>
              <h2 className="txt-rotate">
                <span className="wrap">Frontend Developer</span>
              </h2>
              <p>I create engaging and responsive web experiences with modern technologies. Passionate about building intuitive user interfaces and bringing ideas to life through clean, efficient code.</p>
              <button 
                className="connect-btn" 
                onClick={() => navigate('/contact')}
              >
                Let's Connect
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={6} className="portfolio-image-column">
            <div className="hero-img">
              <img src="../cerbas.jpeg" alt="Profile" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
