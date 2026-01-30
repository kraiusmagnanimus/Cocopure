import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '../ui';
import { useTheme } from '../../hooks/useTheme';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/About-us' },
  { name: 'Contact', path: '/contact' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { theme, currentTheme } = useTheme();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        data-mobile-menu
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          shadow-2xl md:hidden
        `}
        style={{ backgroundColor: theme.colors.background }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: theme.colors.border }}>
          <Typography variant="h5" weight="bold">Menu</Typography>
          <button
            onClick={onClose}
            className={`
              p-2 rounded-full transition-colors duration-200
              ${currentTheme === 'vibrant' 
                ? 'hover:bg-brand-light-gray' 
                : 'hover:bg-minimal-light-gray'
              }
            `}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-6">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={`
                block px-6 py-4 transition-all duration-200
                border-l-4 border-transparent
                ${isActivePath(item.path)
                  ? currentTheme === 'vibrant'
                    ? 'border-l-brand-forest bg-brand-light-gray'
                    : 'border-l-minimal-charcoal bg-minimal-light-gray'
                  : `hover:${currentTheme === 'vibrant' ? 'bg-brand-light-gray' : 'bg-minimal-light-gray'}`
                }
              `}
            >
              <Typography 
                variant="body-large" 
                weight="medium"
                color={isActivePath(item.path) ? 'primary' : 'text'}
                className="font-poppins"
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </div>

      </div>
    </>
  );
};

export default MobileMenu;