import React from 'react';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  padding?: boolean;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  size = 'lg', 
  className = '',
  padding = true 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'max-w-2xl';
      case 'md':
        return 'max-w-4xl';
      case 'lg':
        return 'max-w-6xl';
      case 'xl':
        return 'max-w-7xl';
      case 'full':
        return 'max-w-full';
      default:
        return 'max-w-6xl';
    }
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div className={`${getSizeClasses()} mx-auto ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Container;