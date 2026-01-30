import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppRouter } from './router';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;