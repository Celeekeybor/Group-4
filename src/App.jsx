import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router components
import Button from './components/Button';  // Import the Button component
import JoinGDG from './pages/JoinGDG';  // Import page components
import Support from './pages/Support';
import About from './pages/About';
import ContactUs from './pages/Contact_Us';  // Adjust the import name to match your file name
import FeedbackButton from './components/feedback';  // Import the FeedbackButton component


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrapping everything with Router */}
      <div>
          {/* Insert the Buttons component here */}
          <Button />
        {/* Define Routes */}
        {/* Define   routes for each page */}
        <Routes>
          <Route path="/join-gdg" element={<JoinGDG />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        
        {/* Insert the FeedbackButton component here */}
        <FeedbackButton />
        {/* Footer
        <footer>
          <p>© 2025 Your Company</p>
        </footer> */}
      </div>
      </Router>
  );
}
export default App;
