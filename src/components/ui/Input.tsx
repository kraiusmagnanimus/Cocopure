import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'underlined';
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helpText,
  leftIcon,
  rightIcon,
  variant = 'default',
  inputSize = 'md',
  className = '',
  disabled,
  ...props
}, ref) => {
  const { theme, currentTheme } = useTheme();

  const getSizeClasses = () => {
    switch (inputSize) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'lg':
        return 'px-4 py-3 text-lg';
      default:
        return 'px-4 py-2.5 text-base';
    }
  };

  const getVariantClasses = () => {
    const baseClasses = 'w-full transition-all duration-200 focus:outline-none';
    
    if (currentTheme === 'vibrant') {
      switch (variant) {
        case 'filled':
          return `${baseClasses} bg-brand-light-gray border-2 border-transparent focus:border-brand-forest rounded-lg`;
        case 'underlined':
          return `${baseClasses} bg-transparent border-0 border-b-2 border-gray-300 focus:border-brand-forest rounded-none`;
        default:
          return `${baseClasses} bg-white border-2 border-gray-300 focus:border-brand-forest rounded-lg`;
      }
    } else {
      switch (variant) {
        case 'filled':
          return `${baseClasses} bg-minimal-light-gray border-2 border-transparent focus:border-minimal-charcoal rounded-lg`;
        case 'underlined':
          return `${baseClasses} bg-transparent border-0 border-b-2 border-gray-300 focus:border-minimal-charcoal rounded-none`;
        default:
          return `${baseClasses} bg-white border-2 border-gray-300 focus:border-minimal-charcoal rounded-lg`;
      }
    }
  };

  const iconClasses = 'absolute top-1/2 transform -translate-y-1/2 text-gray-400';
  const leftPadding = leftIcon ? 'pl-10' : '';
  const rightPadding = rightIcon ? 'pr-10' : '';

  return (
    <div className="w-full">
      {label && (
        <label 
          className="block text-sm font-medium mb-2"
          style={{ color: theme.colors.text }}
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className={`${iconClasses} left-3`}>
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          className={`
            ${getVariantClasses()}
            ${getSizeClasses()}
            ${leftPadding}
            ${rightPadding}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${error ? 'border-red-500 focus:border-red-500' : ''}
            ${className}
          `}
          style={{ color: theme.colors.text }}
          disabled={disabled}
          {...props}
        />
        
        {rightIcon && (
          <div className={`${iconClasses} right-3`}>
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
      
      {helpText && !error && (
        <p className="mt-1 text-sm" style={{ color: theme.colors.textSecondary }}>
          {helpText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;