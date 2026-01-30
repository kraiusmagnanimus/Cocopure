import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { ThemeContextType, ThemeType, Theme } from '../types/theme';
import { vibrantTheme, minimalTheme } from '../styles/themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('vibrant');

  // Get theme object based on current theme
  const theme: Theme = currentTheme === 'vibrant' ? vibrantTheme : minimalTheme;

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('mycocopure-theme') as ThemeType;
    if (savedTheme && (savedTheme === 'vibrant' || savedTheme === 'minimal')) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('mycocopure-theme', currentTheme);
    
    // Apply theme to document root for CSS custom properties
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [currentTheme, theme]);

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'vibrant' ? 'minimal' : 'vibrant');
  };

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
  };

  const contextValue: ThemeContextType = {
    currentTheme,
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

// Add this alias export to support existing components that import useTheme
export const useTheme = useThemeContext;