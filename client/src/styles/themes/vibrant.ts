import type { Theme } from '../../types/theme';

export const vibrantTheme: Theme = {
  name: 'vibrant',
  colors: {
    primary: '#119853',        // Forest Green
    secondary: '#f8be2e',      // Sunny Yellow
    accent: '#cc2026',         // Vibrant Red
    background: '#ffffff',     // Pure White
    backgroundSecondary: '#f8fafc', // Light Gray
    text: '#30150c',          // Rich Brown
    textSecondary: '#374151',  // Charcoal
    border: '#e5e7eb',        // Soft Gray
    buttonPrimary: '#119853',  // Forest Green
    buttonSecondary: '#f8be2e', // Sunny Yellow
    buttonAccent: '#cc2026',   // Vibrant Red
    card: '#ffffff',          // Pure White
  },
  fonts: {
    primary: 'Poppins, sans-serif',
    secondary: 'Inter, sans-serif',
  },
  animations: {
    fast: '150ms ease-out',
    standard: '300ms ease-out',
    slow: '500ms ease-out',
  },
};