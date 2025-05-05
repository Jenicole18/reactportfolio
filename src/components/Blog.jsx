import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaArrowLeft, FaClock, FaShare, FaBookmark } from 'react-icons/fa';
import './Blog.css'; // Make sure to create this CSS file

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [animateCards, setAnimateCards] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setAnimateCards(true);
    }, []);

    const blogPosts = [
        {
            id: 1,
            title: "On-the-Job Training Experience",
            readTime: "5 min read",
            category: "OJT",
            summary: "My journey through on-the-job training and the valuable skills I acquired.",
            content: "My on-the-job training experience was truly transformative. Over the course of several months, I had the opportunity to work with experienced professionals who guided me through real-world projects. I was assigned to the development team where I contributed to building web applications using modern frameworks. The mentorship I received was invaluable - senior developers took time to review my code and provide constructive feedback that helped me grow. I learned not just technical skills, but also how to work effectively in a team environment, communicate with stakeholders, and manage project timelines. This experience bridged the gap between academic knowledge and industry practices, preparing me for the challenges of professional software development. The connections I made during this period continue to be valuable resources in my career journey.",
            images: ["/OJT/ojt (1).jpeg", "/OJT/ojt (2).jpeg", "/OJT/ojt (3).jpeg"]
        },
        {
            id: 2,
            title: "Software Engineering Principles in Practice",
            readTime: "7 min read",
            category: "Software Engineering",
            summary: "Applying software engineering methodologies and best practices in real-world projects.",
            content: "Software engineering goes far beyond just writing code. Throughout my academic and professional journey, I've come to appreciate the structured approach that software engineering principles bring to development. From requirements gathering to deployment and maintenance, each phase requires careful planning and execution. I've implemented agile methodologies in team projects, experiencing firsthand how iterative development and continuous feedback improve product quality. Version control systems like Git have become second nature, allowing for collaborative development and code management. Design patterns have helped me create more maintainable and scalable solutions. Testing strategies, including unit testing and integration testing, have saved countless hours by catching bugs early. Documentation, often overlooked, has proven essential for knowledge transfer and maintenance. These principles have transformed how I approach software development, making me a more effective and efficient developer.",
            images: ["/SE/se (1).jpeg", "/SE/se (2).jpeg", "/SE/se (3).jpeg", "/SE/se (4).jpeg", "/SE/se (5).jpeg", "/SE/se (6).jpeg", "/SE/se (7).jpeg", "/SE/se (8).jpeg"]
        },
        {
            id: 3,
            title: "Capstone Project: From Concept to Completion",
            readTime: "8 min read",
            category: "Capstone",
            summary: "The journey of developing my capstone project and the challenges overcome along the way.",
            content: "My capstone project represented the culmination of my academic journey in computer science. Our team chose to develop a comprehensive healthcare management system aimed at improving patient care coordination. The project began with extensive research and requirements gathering, interviewing potential users to understand their needs. We designed a scalable architecture using microservices to handle different aspects of the system. The development phase was challenging but rewarding - we implemented the frontend using React, created a robust API with Node.js, and utilized MongoDB for data storage. Testing was rigorous, with automated tests covering critical functionality. The most valuable lessons came from overcoming obstacles: resolving merge conflicts, debugging complex issues, and pivoting when certain approaches didn't work. Presenting the final product to faculty and industry professionals was nerve-wracking but ultimately validating. This project taught me not just technical skills but also project management, teamwork, and the importance of user-centered design. The experience has been invaluable in preparing me for professional software development.",
            images: ["/CAPSTONE/caps (1).jpeg", "/CAPSTONE/caps (2).jpeg", "/CAPSTONE/caps (3).jpeg", "/CAPSTONE/caps (4).jpeg"]
        },
        {
            id: 4,
            title: "Adapting to Online Learning During the Pandemic",
            readTime: "6 min read",
            category: "Online Learning",
            summary: "Navigating the challenges and opportunities of remote education during unprecedented times.",
            content: "When the pandemic forced education to move online, it presented both challenges and unexpected opportunities. Initially, the transition was jarring - adjusting to video lectures, virtual group projects, and the absence of face-to-face interaction with professors and peers. Technical issues were common, from unstable internet connections to software compatibility problems. However, as time progressed, I developed strategies to thrive in this new environment. Creating a dedicated study space, establishing a consistent routine, and utilizing digital tools for organization became essential. Collaborative platforms like GitHub became even more important for group projects, and I learned to communicate more effectively in writing. The flexibility of online learning allowed me to develop better time management skills and self-discipline. I also took advantage of the wealth of additional online resources available, from tutorial videos to coding communities. While I missed the campus experience, the skills I developed during this period - adaptability, digital literacy, and independent learning - have proven valuable beyond the classroom. The pandemic changed not just how we learn, but also prepared us for an increasingly remote and digital professional landscape.",
            images: ["/online/online (1).jpeg", "/online/online (2).jpeg", "/online/online (3).jpeg", "/online/online (4).jpeg", "/online/online (5).jpeg", "/online/online (6).jpeg", "/online/online (7).jpeg", "/online/online (8).jpeg"]
        },
        {
            id: 5,
            title: "Pandemic Classes in Zamboanga City During COVID-19",
            readTime: "6 min read",
            category: "Pandemic Education",
            summary: "Experiences and challenges of attending classes in Zamboanga City during the COVID-19 pandemic.",
            content: "The COVID-19 pandemic drastically transformed education in Zamboanga City, as it did worldwide. When lockdown measures were implemented, our university quickly pivoted to remote learning, though the transition wasn't without significant challenges. In a city where internet connectivity can be inconsistent, many students, including myself, struggled with accessing online classes reliably. The digital divide became glaringly apparent as some classmates couldn't afford the necessary devices or stable internet connections. Our professors showed remarkable adaptability, modifying teaching methods and assessment strategies to accommodate these new realities. They recorded lectures for asynchronous learning, extended deadlines when connectivity issues arose, and created alternative assignments that required less bandwidth. Despite the physical distance, our class developed a strong sense of community through group chats and virtual study sessions, supporting each other through technical difficulties and academic challenges. The local government and university administration eventually established internet hubs in strategic locations around the city, providing free WiFi access to students who needed it. This period taught me invaluable lessons in resilience, adaptability, and self-directed learning. While I missed the vibrant campus atmosphere and face-to-face interactions, I gained new digital skills and a deeper appreciation for the privilege of education. As vaccination rates increased and restrictions gradually eased, we experienced a careful return to limited in-person classes with strict health protocols. This hybrid approach offered the best of both worlds and prepared us for a future where digital literacy and flexibility are essential professional skills. The pandemic may have disrupted our traditional educational experience, but it also equipped us with unique competencies that will serve us well in an increasingly digital world.",
            images: ["/pandemic/pandemic (1).jpeg", "/pandemic/pandemic (2).jpeg", "/pandemic/pandemic (3).jpeg", "/pandemic/pandemic (4).jpeg"]
        },
        {
            id: 6,
            title: "Palaro: Celebrating Athletic Excellence",
            readTime: "6 min read",
            category: "Sports",
            summary: "My experiences participating in and organizing our university's annual sports festival.",
            content: "Palaro, our university's annual sports festival, has always been one of the highlights of my academic year. This year's event was particularly memorable as I had the opportunity to both participate as an athlete and serve on the organizing committee. The preparation began months in advance, with teams forming and training schedules becoming increasingly intense as the event approached. As part of the organizing committee, I witnessed firsthand the logistical challenges of coordinating multiple sporting events across different venues. From securing equipment and venues to scheduling matches and ensuring safety protocols, every detail required careful attention. The opening ceremony was a spectacular display of school spirit, with each department showcasing their unique identities through colorful uniforms and enthusiastic cheers. I competed in basketball and track events, pushing my physical limits while building stronger bonds with teammates. The friendly yet fierce competition fostered a sense of camaraderie that extended beyond departmental boundaries. Beyond the physical aspects, Palaro taught valuable lessons in teamwork, leadership, and resilience. Winning was celebrated, but the greater victory was in the community spirit that permeated the entire event. The closing ceremony, with its recognition of outstanding athletes and teams, perfectly captured the essence of sportsmanship that defines Palaro. These memories and experiences will remain with me long after graduation, reminding me of the importance of balance between academic pursuits and physical well-being.",
            images: ["/palaro/palaro (1).jpeg", "/palaro/palaro (2).jpeg", "/palaro/palaro (3).jpeg", "/palaro/palaro (4).jpeg", "/palaro/palaro (5).jpeg", "/palaro/palaro (6).jpeg"]
        },
        {
            id: 7,
            title: "College Festival: A Celebration of Creativity and Culture",
            readTime: "7 min read",
            category: "Campus Life",
            summary: "Reflecting on the vibrant experiences and memories from our annual college festival.",
            content: "Our annual college festival transformed the campus into a vibrant hub of creativity, culture, and celebration. As a final-year student, this year's festival held special significance, representing my last opportunity to fully immerse myself in this cherished tradition. The festival spanned three exhilarating days, each packed with diverse events ranging from technical competitions to cultural performances. The technical events showcased innovative projects and hackathons where students demonstrated their problem-solving abilities and technical expertise. I participated in the web development competition, where our team created a solution for local businesses affected by the pandemic. The cultural segment of the festival was a kaleidoscope of artistic expression. Music performances ranged from classical renditions to contemporary bands that had everyone on their feet. Dance competitions featured everything from traditional folk dances to modern choreography, highlighting the rich diversity within our student body. The art exhibition displayed stunning works from talented students, transforming ordinary spaces into galleries of expression. Food stalls offering cuisines from different regions created a mini food festival within the larger celebration. The evening concerts featuring professional artists were undoubtedly the highlight, drawing crowds from neighboring colleges and creating an atmosphere of collective joy. What made the festival truly special was the sense of unity it fostered. Students from different departments, years, and backgrounds came together, breaking the usual academic silos. The organizing committee, of which I was a part, worked tirelessly behind the scenes, solving problems on the fly and ensuring everything ran smoothly. This experience taught me invaluable lessons in event management, crisis handling, and effective teamwork. As the festival concluded with a spectacular fireworks display, I couldn't help but feel a bittersweet nostalgia, knowing this chapter of college life was coming to a close. However, the memories, friendships, and skills gained during these festivals will remain an integral part of my college experience, shaping both my personal and professional journey ahead.",
            images: ["/college/college (1).jpeg", "/college/college (2).jpeg", "/college/college (3).jpeg", "/college/college (4).jpeg", "/college/college (5).jpeg", "/college/college (6).jpeg"]
        }
    ];

    // Find related posts based on category
    const getRelatedPosts = (currentPost) => {
        return blogPosts
            .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
            .slice(0, 3);
    };

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
        window.scrollTo(0, 0);
    };

    const handleBackClick = () => {
        setSelectedBlog(null);
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

    // Full post variants for animation
    const fullPostVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section className="blog-section fixed-section" id="blog">
            <Container fluid className="p-0">
                <div className="blog-wrapper">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Row className="section-header">
                            <Col>
                                <h2 className="section-title">My Blog</h2>
                                <div className="section-divider"></div>
                                <p className="section-subtitle">Documenting my journey and sharing knowledge</p>
                            </Col>
                        </Row>

                        <AnimatePresence mode="wait">
                            {selectedBlog ? (
                                <motion.div
                                    key="fullPost"
                                    variants={fullPostVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <Row className="justify-content-center">
                                        <Col xs={12} lg={10}>
                                            <div className="blog-post-full">
                                                <button className="blog-back-btn" onClick={handleBackClick}>
                                                    <FaArrowLeft /> Back to all posts
                                                </button>

                                                <div className="blog-post-header">
                                                    <div className="blog-post-meta">
                                                        <Badge bg="primary" className="blog-category">{selectedBlog.category}</Badge>
                                                        <span className="blog-post-date"><FaCalendarAlt /> {selectedBlog.date}</span>
                                                        <span className="blog-post-read-time"><FaClock /> {selectedBlog.readTime}</span>
                                                    </div>
                                                    <h2 className="blog-post-title">{selectedBlog.title}</h2>
                                                </div>

                                                <div className="blog-post-images">
                                                    {selectedBlog.images.map((image, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="blog-image-container"
                                                            whileHover={{ scale: 1.02 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={`Blog post ${selectedBlog.id} image ${index + 1}`}
                                                                className="blog-post-image"
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                <div className="blog-post-content">
                                                    <p>{selectedBlog.content}</p>
                                                </div>

                                                <div className="blog-post-footer">
                                                    <div className="blog-post-tags">
                                                        <Badge bg="light" text="dark" className="blog-tag">Education</Badge>
                                                        <Badge bg="light" text="dark" className="blog-tag">Experience</Badge>
                                                        <Badge bg="light" text="dark" className="blog-tag">{selectedBlog.category}</Badge>
                                                    </div>
                                                    <div className="blog-post-actions">
                                                        <button className="blog-action-btn">
                                                            <FaShare /> Share
                                                        </button>
                                                        <button className="blog-action-btn">
                                                            <FaBookmark /> Save
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Related Posts Section */}
                                                {getRelatedPosts(selectedBlog).length > 0 && (
                                                    <div className="related-posts">
                                                        <h3 className="related-posts-title">Related Posts</h3>
                                                        <Row>
                                                            {getRelatedPosts(selectedBlog).map((post, i) => (
                                                                <Col xs={12} md={4} key={post.id} className="mb-4">
                                                                    <motion.div
                                                                        className="blog-card"
                                                                        whileHover={{
                                                                            y: -10,
                                                                            boxShadow: '0 15px 30px rgba(97, 218, 251, 0.2)'
                                                                        }}
                                                                        onClick={() => handleBlogClick(post)}
                                                                    >
                                                                        <div className="blog-card-img">
                                                                            <Badge bg="primary" className="blog-card-category">{post.category}</Badge>
                                                                            <img src={post.images[0]} alt={post.title} />
                                                                        </div>
                                                                        <div className="blog-card-content">
                                                                            <h3 className="blog-card-title">{post.title}</h3>
                                                                            <p className="blog-card-summary">{post.summary}</p>
                                                                        </div>
                                                                    </motion.div>
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    </div>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="blogGrid"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <Row className="blog-grid">
                                        {blogPosts.map((blog, i) => (
                                            <Col xs={12} md={6} lg={4} key={blog.id} className="mb-4">
                                                <motion.div
                                                    className="blog-card"
                                                    custom={i}
                                                    variants={cardVariants}
                                                    initial="hidden"
                                                    animate={animateCards ? "visible" : "hidden"}
                                                    whileHover={{
                                                        y: -10,
                                                        boxShadow: '0 15px 30px rgba(97, 218, 251, 0.2)'
                                                    }}
                                                    onClick={() => handleBlogClick(blog)}
                                                >
                                                    <div className="blog-card-img">
                                                        <Badge bg="primary" className="blog-card-category">{blog.category}</Badge>
                                                        <img src={blog.images[0]} alt={blog.title} />
                                                    </div>
                                                    <div className="blog-card-content">
                                                        <div className="blog-card-meta">
                                                            <span className="blog-card-date"><FaCalendarAlt /> {blog.date}</span>
                                                            <span className="blog-card-read-time"><FaClock /> {blog.readTime}</span>
                                                        </div>
                                                        <h3 className="blog-card-title">{blog.title}</h3>
                                                        <p className="blog-card-summary">{blog.summary}</p>
                                                        <button className="blog-read-more">Read More</button>
                                                    </div>
                                                </motion.div>
                                            </Col>
                                        ))}
                                    </Row>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Blog;
