export type ThemeType = 'vibrant' | 'minimal';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  backgroundSecondary: string;
  text: string;
  textSecondary: string;
  border: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonAccent: string;
  card: string;
}

export interface Theme {
  name: ThemeType;
  colors: ThemeColors;
  fonts: {
    primary: string;
    secondary: string;
  };
  animations: {
    fast: string;
    standard: string;
    slow: string;
  };
}

export interface ThemeContextType {
  currentTheme: ThemeType;
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}