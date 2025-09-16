import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages';
import TermsOfService from './components/legal/TermsOfService';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import { useSmoothScrolling } from './hooks/useSmoothScrolling';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  // Initialize smooth scrolling
  useSmoothScrolling();

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;