import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const getHeightClass = () => {
    switch (size) {
      case 'sm':
        return 'h-12';
      case 'lg':
        return 'h-20';
      default:
        return 'h-16';
    }
  };

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img 
        src="./assets/Cocopure_Logo.png" 
        alt="MyCoCoPure Logo" 
        className={`${getHeightClass()} w-auto`}
      />
    </Link>
  );
};

export default Logo;