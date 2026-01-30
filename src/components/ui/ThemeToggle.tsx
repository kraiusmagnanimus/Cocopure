import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed bottom-6 right-6 z-50 
        w-14 h-14 rounded-full 
        flex items-center justify-center
        text-2xl
        transition-all duration-300 ease-out
        transform hover:scale-110 active:scale-95
        shadow-lg hover:shadow-xl
        ${currentTheme === 'vibrant' 
          ? 'bg-brand-forest text-white hover:bg-green-700' 
          : 'bg-minimal-dark-gray text-white hover:bg-minimal-charcoal'
        }
      `}
      aria-label="Toggle theme"
      title={`Switch to ${currentTheme === 'vibrant' ? 'minimal' : 'vibrant'} theme`}
    >
      {currentTheme === 'vibrant' ? '⚫' : '🎨'}
    </button>
  );
};

export default ThemeToggle;