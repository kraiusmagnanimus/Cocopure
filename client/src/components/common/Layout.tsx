import React from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  const { theme } = useTheme();

  return (
    <div 
      className={`min-h-screen flex flex-col transition-colors duration-300 ${className}`}
      style={{ 
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.secondary 
      }}
    >
      {children}
    </div>
  );
};

export default Layout;