import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

// Create placeholder components for routes
const Projects = () => <div className="page-section"><h1>Projects Page</h1></div>;
const Skills = () => <div className="page-section"><h1>Skills Page</h1></div>;
const Contact = () => <div className="page-section"><h1>Contact Page</h1></div>;

// Main Home component that includes Hero
const Home = () => (
  <>
    <Hero />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
