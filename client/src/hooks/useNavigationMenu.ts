import { useState, useEffect } from 'react';

export const useNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('[data-mobile-menu]') && !target.closest('[data-mobile-menu-button]')) {
        closeMenu();
      }
    };

    let timeoutId: NodeJS.Timeout | null = null;

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Add a small delay to prevent immediate closing when the menu opens
      timeoutId = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  };
};