import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import './Projects.css'; // Make sure to create this CSS file

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Pokemon App",
      description: "An interactive Pokemon application built with React and Vite that fetches data from the PokeAPI to display Pokemon information and details.",
      longDescription: "This Pokemon application was developed using React and Vite to create a fast, responsive user experience. The app integrates with the PokeAPI to fetch comprehensive Pokemon data including types, abilities, stats, and evolution chains. Users can search for Pokemon by name or ID, filter by type, and view detailed information about each Pokemon. The interface features a card-based design with smooth animations for transitions between views. State management is handled with React hooks, and the application implements lazy loading for improved performance when browsing through large numbers of Pokemon. This project demonstrates my ability to work with external APIs, implement search and filtering functionality, and create an engaging user interface.",
      image: "/react (1).jpeg",
      technologies: ["React", "Vite", "JavaScript", "PokeAPI", "CSS3"],
      github: "https://github.com/Jenicole18/pokemon-app",
      demo: "https://pokededx.netlify.app/",
      category: "Frontend"
    },
    {
      id: 2,
      title: "To-Do List App",
      description: "A feature-rich task management application built with React and Vite that allows users to create, organize, and track their daily tasks.",
      longDescription: "This To-Do List application was built to help users organize their tasks efficiently. Developed with React and Vite for optimal performance, the app features a clean, intuitive interface that makes task management straightforward. Users can add, edit, and delete tasks, mark tasks as complete, set priority levels, and categorize tasks with custom tags. The application includes filtering options to view tasks by status, priority, or category, as well as sorting capabilities to arrange tasks by due date or priority. Local storage integration ensures that user data persists between sessions. The responsive design ensures the application works seamlessly across desktop and mobile devices. This project showcases my frontend development skills, particularly in creating practical applications with a focus on user experience and functionality.",
      image: "/react (2).jpeg",
      technologies: ["React", "Vite", "JavaScript", "LocalStorage", "CSS3"],
      github: "https://github.com/Jenicole18/todo-list-app",
      demo: "https://manage-to-do-webapp.netlify.app/",
      category: "Frontend"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Card variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="projects-section fixed-section" id="projects">
      <Container fluid className="p-0">
        <div className="projects-wrapper">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Row className="section-header">
              <Col>
                <h2 className="section-title">My Projects</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">Showcasing my recent work and creations</p>
              </Col>
            </Row>

            <Row className="projects-grid">
              {projects.map((project, i) => (
                <Col xs={12} md={6} key={project.id} className="mb-4">
                  <motion.div 
                    className="project-card"
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -15, 
                      boxShadow: '0 15px 30px rgba(97, 218, 251, 0.2)'
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <span className="view-project">View Project</span>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="tech-tag">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </div>
      </Container>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div 
              className="project-modal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={handleCloseModal}>
                <FaTimes />
              </button>
              
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-content">
                <h2 className="modal-title">{selectedProject.title}</h2>
                
                <div className="modal-category">
                  <Badge bg="primary" className="category-badge">{selectedProject.category}</Badge>
                </div>
                
                <p className="modal-description">{selectedProject.longDescription}</p>
                
                <div className="modal-tech-stack">
                  <h4>Technologies Used</h4>
                  <div className="modal-tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link github-link">
                    <FaGithub /> View Code
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="modal-link demo-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
