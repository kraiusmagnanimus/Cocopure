import type { Theme } from '../../types/theme';

export const minimalTheme: Theme = {
  name: 'minimal',
  colors: {
    primary: '#374151',        // Charcoal
    secondary: '#9ca3af',      // Medium Gray
    accent: '#1f2937',         // Dark Gray
    background: '#ffffff',     // Pure White
    backgroundSecondary: '#f8fafc', // Light Gray
    text: '#111827',          // Near Black
    textSecondary: '#374151',  // Charcoal
    border: '#e5e7eb',        // Soft Gray
    buttonPrimary: '#1f2937',  // Dark Gray
    buttonSecondary: '#9ca3af', // Medium Gray
    buttonAccent: '#374151',   // Charcoal
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