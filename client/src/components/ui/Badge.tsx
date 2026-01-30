import React from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = true,
  className = '',
}) => {
  const { currentTheme } = useTheme();

  const getVariantClasses = () => {
    if (currentTheme === 'vibrant') {
      switch (variant) {
        case 'primary':
          return 'bg-brand-forest text-white';
        case 'secondary':
          return 'bg-brand-yellow text-brand-brown';
        case 'accent':
          return 'bg-brand-red text-white';
        case 'success':
          return 'bg-green-500 text-white';
        case 'warning':
          return 'bg-yellow-500 text-yellow-900';
        case 'error':
          return 'bg-red-500 text-white';
        case 'info':
          return 'bg-brand-blue text-white';
        default:
          return 'bg-brand-forest text-white';
      }
    } else {
      switch (variant) {
        case 'primary':
          return 'bg-minimal-dark-gray text-white';
        case 'secondary':
          return 'bg-minimal-medium-gray text-white';
        case 'accent':
          return 'bg-minimal-charcoal text-white';
        case 'success':
          return 'bg-green-500 text-white';
        case 'warning':
          return 'bg-yellow-500 text-yellow-900';
        case 'error':
          return 'bg-red-500 text-white';
        case 'info':
          return 'bg-blue-500 text-white';
        default:
          return 'bg-minimal-dark-gray text-white';
      }
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'lg':
        return 'px-4 py-2 text-base';
      default:
        return 'px-3 py-1 text-sm';
    }
  };

  const roundedClass = rounded ? 'rounded-full' : 'rounded';

  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-medium font-inter
        transition-all duration-200
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${roundedClass}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;