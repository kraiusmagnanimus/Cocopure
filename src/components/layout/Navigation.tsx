import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '../ui';
import { useTheme } from '../../hooks/useTheme';

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/About-us' },
  { name: 'Contact', path: '/contact' },
];

const Navigation: React.FC<NavigationProps> = ({ className = '', onLinkClick }) => {
  const location = useLocation();
  const { theme, currentTheme } = useTheme();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const getActiveClasses = (path: string) => {
    if (isActivePath(path)) {
      return currentTheme === 'vibrant' 
        ? 'text-brand-forest border-b-2 border-brand-forest' 
        : 'text-minimal-charcoal border-b-2 border-minimal-charcoal';
    }
    return 'hover:opacity-75';
  };

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onLinkClick}
            className={`
              relative py-2 transition-all duration-200
              ${getActiveClasses(item.path)}
            `}
          >
            <Typography 
              variant="body" 
              weight="medium"
              color={isActivePath(item.path) ? 'primary' : 'text'}
              className="font-poppins"
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </div>

    </nav>
  );
};

export default Navigation;