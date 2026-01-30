import React from 'react';
import { Container } from '../ui';
import { useTheme } from '../../hooks/useTheme';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useNavigationMenu } from '../../hooks/useNavigationMenu';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const { scrollDirection, isAtTop } = useScrollDirection();
  const { isOpen: isMobileMenuOpen, toggleMenu, closeMenu } = useNavigationMenu();

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-30
          transition-all duration-300 ease-out shadow-md
          ${scrollDirection === 'down' && !isAtTop ? '-translate-y-full' : 'translate-y-0'}
          ${!isAtTop ? 'shadow-lg backdrop-blur-sm bg-opacity-95' : ''}
        `}
        style={{ 
          backgroundColor: isAtTop ? theme.colors.background : `${theme.colors.background}F0` 
        }}
      >
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <Navigation className="flex-1 justify-end" />

            {/* Mobile Menu Button */}
            <button
              data-mobile-menu-button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>

          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMenu} />

      {/* Header Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Header;