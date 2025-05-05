import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
