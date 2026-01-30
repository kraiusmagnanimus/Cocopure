import React from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'lg',
  shadow = 'md',
  rounded = 'lg',
  onClick,
}) => {
  const { theme } = useTheme();

  const getPaddingClasses = () => {
    switch (padding) {
      case 'none':
        return '';
      case 'sm':
        return 'p-3';
      case 'md':
        return 'p-4';
      case 'lg':
        return 'p-6';
      case 'xl':
        return 'p-8';
      default:
        return 'p-6';
    }
  };

  const getShadowClasses = () => {
    switch (shadow) {
      case 'none':
        return '';
      case 'sm':
        return 'shadow-sm';
      case 'md':
        return 'shadow-card';
      case 'lg':
        return 'shadow-lg';
      case 'xl':
        return 'shadow-xl';
      default:
        return 'shadow-card';
    }
  };

  const getRoundedClasses = () => {
    switch (rounded) {
      case 'none':
        return '';
      case 'sm':
        return 'rounded-sm';
      case 'md':
        return 'rounded-md';
      case 'lg':
        return 'rounded-card';
      case 'xl':
        return 'rounded-xl';
      default:
        return 'rounded-card';
    }
  };

  const hoverClasses = hover
    ? 'transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-card-hover'
    : '';

  const cursorClass = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`
        ${getPaddingClasses()}
        ${getShadowClasses()}
        ${getRoundedClasses()}
        ${hoverClasses}
        ${cursorClass}
        ${className}
      `}
      style={{ backgroundColor: theme.colors.card }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;