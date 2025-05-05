import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaReact } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: "HTML", level: 55, icon: <FaHtml5 className="skill-icon html-icon" />, color: "#E34F26" },
    { name: "CSS", level: 50, icon: <FaCss3Alt className="skill-icon css-icon" />, color: "#1572B6" },
    { name: "JavaScript", level: 45, icon: <FaJs className="skill-icon js-icon" />, color: "#F7DF1E" },
    { name: "PHP", level: 50, icon: <FaPhp className="skill-icon php-icon" />, color: "#777BB4" },
    { name: "MySQL", level: 55, icon: <FaDatabase className="skill-icon mysql-icon" />, color: "#4479A1" },
    { name: "React", level: 50, icon: <FaReact className="skill-icon react-icon" />, color: "#61DAFB" }
  ];

  return (
    <section className="about-section fixed-section" id="about">
      <Container fluid>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Row className="section-header">
            <Col>
              <h2 className="section-title">About Me</h2>
              <div className="section-divider"></div>
            </Col>
          </Row>
          
          <Row className="align-items-center flex-column-reverse flex-lg-row about-content">
            <Col xs={12} lg={5} className="mb-4 mb-lg-0 about-image-col">
              <div className="about-image-container">
                <div className="about-image-bg"></div>
                <img src="../cerbas.jpeg" alt="About Me" className="about-image" />
                <div className="experience-badge">
                  <span className="years">1+</span>
                  <span className="text">Year of<br />Experience</span>
                </div>
              </div>
            </Col>
            
            <Col xs={12} lg={7} className="about-text-col">
              <h3 className="hello-text">Hello, I'm <span className="highlight">Jennifer Nicole Cerbas</span></h3>
              <h4 className="profession">Frontend Developer & UI/UX Enthusiast</h4>
              
              <p className="about-description">
                I'm a passionate frontend developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. I have 1+ year of experience building responsive and intuitive web applications using modern JavaScript frameworks.
              </p>
              
              <p className="about-description">
              I'm into Photoshop or Canva editing. I love watching some movies or series specially if it's international release and reading some random novels.
              </p>
              
              <div className="skills-container">
                <h4 className="skills-title">My Tech Stack</h4>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <div className="skill-info">
                        <div className="skill-name-with-icon">
                          {skill.icon}
                          <p className="skill-name">{skill.name}</p>
                        </div>
                        <p className="skill-percentage">{skill.level}%</p>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.2,
                            ease: "easeOut" 
                          }}
                          viewport={{ once: true }}
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color} 0%, rgba(255,255,255,0.5) 100%)` 
                          }}
                        ></motion.div>
                      </div>
                    </div>
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

export default About;
