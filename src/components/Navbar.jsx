import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/react.svg'; // Update with your logo path

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set active link based on current path
    const currentPath = location.pathname;
    if (currentPath === '/') setActiveLink('home');
    else if (currentPath === '/about') setActiveLink('about');
    else if (currentPath === '/blog') setActiveLink('blog');
    else if (currentPath === '/experience') setActiveLink('experience');
    else if (currentPath === '/projects') setActiveLink('projects');
    else if (currentPath === '/contact') setActiveLink('contact');
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/about" 
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/blog" 
              className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('blog')}
            >
              Blog
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/experience" 
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <NavLink to="/contact" className="text-decoration-none">
              <button className="connect-btn">
                <span>Let's Connect</span>
              </button>
            </NavLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
