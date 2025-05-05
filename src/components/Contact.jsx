import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import './Contact.css'; // Create this CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formValidated, setFormValidated] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setFormValidated(true);
      return;
    }
    
    setFormValidated(true);
    
    // Simulate form submission with a slight delay for better UX
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
    
    setTimeout(() => {
      try {
        console.log('Form submitted:', formData);
        // Here you would typically send the form data to a server
        setFormSubmitted(true);
        setFormError(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormValidated(false);
      } catch (error) {
        console.error('Error submitting form:', error);
        setFormError(true);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message';
      }
      
      // Reset form submission status after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormError(false);
      }, 5000);
    }, 1500);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="contact-section fixed-section" id="contact">
      <Container fluid className="p-0">
        <div className="contact-wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <Row className="section-header">
              <Col>
                <h2 className="section-title">Get In Touch</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">Let's connect and discuss opportunities</p>
              </Col>
            </Row>
            
            <Row className="contact-content">
              <Col lg={5} className="contact-info-col">
                <motion.div className="contact-info" variants={itemVariants}>
                  <h3 className="contact-title">Contact Information</h3>
                  <p className="contact-description">
                    Feel free to reach out to me through any of the channels below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  
                  <div className="contact-items">
                    <div className="contact-item">
                      <div className="contact-icon-wrapper">
                        <FaEnvelope className="contact-icon" />
                      </div>
                      <div className="contact-text">
                        <h4>Email</h4>
                        <a href="mailto:jennifer.cerbas@example.com">jennifer.cerbas@example.com</a>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon-wrapper">
                        <FaPhone className="contact-icon" />
                      </div>
                      <div className="contact-text">
                        <h4>Phone</h4>
                        <a href="tel:+639123456789">+63 912 345 6789</a>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon-wrapper">
                        <FaMapMarkerAlt className="contact-icon" />
                      </div>
                      <div className="contact-text">
                        <h4>Location</h4>
                        <p>Manila, Philippines</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="social-links">
                    <h4 className="social-title">Find me on</h4>
                    <div className="social-icons">
                      <motion.a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon facebook"
                        whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(59, 89, 152, 0.4)' }}
                      >
                        <FaFacebookF />
                      </motion.a>
                      <motion.a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon github"
                        whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.4)' }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon linkedin"
                        whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 119, 181, 0.4)' }}
                      >
                        <FaLinkedinIn />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </Col>
              
              <Col lg={7} className="contact-form-col">
                <motion.div className="contact-form-container" variants={itemVariants}>
                  <h3 className="form-title">Send Me a Message</h3>
                  
                  {formSubmitted && (
                    <Alert variant="success" className="form-alert">
                      <div className="alert-icon">✓</div>
                      <div className="alert-content">
                        <h4>Thank you for your message!</h4>
                        <p>I'll get back to you as soon as possible.</p>
                      </div>
                    </Alert>
                  )}
                  
                  {formError && (
                    <Alert variant="danger" className="form-alert">
                      <div className="alert-icon">!</div>
                      <div className="alert-content">
                        <h4>Oops! Something went wrong.</h4>
                        <p>Please try again later or contact me directly via email.</p>
                      </div>
                    </Alert>
                  )}
                  
                  {!formSubmitted && !formError && (
                    <Form 
                      className="contact-form" 
                      onSubmit={handleSubmit} 
                      noValidate 
                      validated={formValidated}
                    >
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-4 form-group">
                            <Form.Label>Your Name</Form.Label>
                            <div className="input-with-icon">
                              <Form.Control 
                                type="text" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name" 
                                required 
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide your name.
                              </Form.Control.Feedback>
                            </div>
                          </Form.Group>
                        </Col>
                        
                        <Col md={6}>
                          <Form.Group className="mb-4 form-group">
                            <Form.Label>Email Address</Form.Label>
                            <div className="input-with-icon">
                              <Form.Control 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email" 
                                required 
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                              </Form.Control.Feedback>
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Form.Group className="mb-4 form-group">
                        <Form.Label>Subject</Form.Label>
                        <div className="input-with-icon">
                          <Form.Control 
                            type="text" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What is this regarding?" 
                            required 
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a subject.
                          </Form.Control.Feedback>
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="mb-4 form-group">
                        <Form.Label>Message</Form.Label>
                        <div className="input-with-icon textarea">
                          <Form.Control 
                            as="textarea" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            rows={5} 
                            placeholder="Enter your message" 
                            required 
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a message.
                          </Form.Control.Feedback>
                        </div>
                      </Form.Group>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button type="submit" className="submit-btn">
                          <FaPaperPlane className="btn-icon" /> Send Message
                        </Button>
                      </motion.div>
                    </Form>
                  )}
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
