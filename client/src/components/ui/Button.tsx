import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  loading = false,
  disabled,
  ...props
}) => {
  const { currentTheme } = useTheme();

  const getVariantClasses = () => {
    if (currentTheme === 'vibrant') {
      switch (variant) {
        case 'primary':
          return 'bg-brand-forest text-white hover:bg-green-700 focus:ring-brand-forest';
        case 'secondary':
          return 'bg-brand-yellow text-brand-brown hover:bg-yellow-400 focus:ring-brand-yellow';
        case 'accent':
          return 'bg-brand-red text-white hover:bg-red-700 focus:ring-brand-red';
        default:
          return 'bg-brand-forest text-white hover:bg-green-700 focus:ring-brand-forest';
      }
    } else {
      switch (variant) {
        case 'primary':
          return 'bg-minimal-dark-gray text-white hover:bg-minimal-charcoal focus:ring-minimal-dark-gray';
        case 'secondary':
          return 'bg-minimal-medium-gray text-white hover:bg-gray-600 focus:ring-minimal-medium-gray';
        case 'accent':
          return 'bg-minimal-charcoal text-white hover:bg-gray-600 focus:ring-minimal-charcoal';
        default:
          return 'bg-minimal-dark-gray text-white hover:bg-minimal-charcoal focus:ring-minimal-dark-gray';
      }
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const baseClasses = `
    font-semibold font-poppins
    rounded-button
    transition-all duration-300 ease-out
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${loading ? 'cursor-wait' : ''}
  `;

  return (
    <button
      className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;