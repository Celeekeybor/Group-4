import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home'; // Create a Home page component
import JoinGDG from './pages/JoinGDG';  
import Support from './pages/Support';
import About from './pages/About';
import ContactUs from './pages/Contact_Us';  
import FeedbackButton from './components/feedback';  // Keep Feedback Button

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/join-gdg" element={<JoinGDG />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      {/* Feedback Button (if it should be visible on all pages) */}
      <FeedbackButton />

      {/* Footer (if it should be visible on all pages) */}
      <footer>
        <p>© 2025 Your Company</p>
      </footer>
    </Router>
  );
}

export default App;