import React from 'react';
import { Homepage } from './pages';
import { useSmoothScrolling } from './hooks/useSmoothScrolling';

const App: React.FC = () => {
  // Initialize smooth scrolling
  useSmoothScrolling();

  return (
    <div>
      <Homepage />
    </div>
  );
};

export default App;