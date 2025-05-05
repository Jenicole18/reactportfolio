import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Business Analyst, AUX, and Testing',
      company: 'CRADVAZ Group',
      location: 'Remote',
      duration: '2023 - Present',
      description: [
        'Conducted comprehensive business analysis to identify system requirements and process improvements.',
        'Served as an auxiliary resource across multiple project teams, providing support where needed.',
        'Designed and executed thorough testing protocols to ensure software quality and reliability.',
        'Collaborated with development teams to resolve issues and implement enhancements based on test results.',
        'Created detailed documentation for business processes and system functionalities.'
      ],
      icon: <FaBriefcase className="experience-icon" />
    }
  ];

  return (
    <section className="about-section fixed-section" id="experience">
      <Container fluid>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Row className="section-header">
            <Col>
              <h2 className="section-title">My Experience</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">Professional journey and qualifications</p>
            </Col>
          </Row>
          
          <Row className="align-items-center about-content">
            <Col xs={12} className="mb-4 mb-lg-0">
              <div className="experience-wrapper">
                <div className="experience-timeline">
                  {experiences.map((exp, index) => (
                    <motion.div 
                      className={`timeline-item ${exp.type}`}
                      key={exp.id}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="timeline-icon">
                        {exp.icon}
                      </div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <h3 className="timeline-title">{exp.title}</h3>
                          <span className="timeline-company">{exp.company}</span>
                        </div>
                        <div className="timeline-info">
                          <span className="timeline-location">{exp.location}</span>
                          <span className="timeline-duration">{exp.duration}</span>
                        </div>
                        <div className="timeline-description">
                          <ul>
                            {exp.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
