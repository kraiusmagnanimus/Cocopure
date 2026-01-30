import React, { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helpText,
  resize = 'vertical',
  className = '',
  disabled,
  rows = 4,
  ...props
}, ref) => {
  const { theme, currentTheme } = useTheme();

  const getResizeClass = () => {
    switch (resize) {
      case 'none':
        return 'resize-none';
      case 'horizontal':
        return 'resize-x';
      case 'both':
        return 'resize';
      default:
        return 'resize-y';
    }
  };

  const getBorderColor = () => {
    if (error) return 'border-red-500 focus:border-red-500';
    return currentTheme === 'vibrant' 
      ? 'border-gray-300 focus:border-brand-forest' 
      : 'border-gray-300 focus:border-minimal-charcoal';
  };

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
      
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-2.5 text-base
          bg-white border-2 rounded-lg
          transition-all duration-200
          focus:outline-none focus:ring-0
          ${getBorderColor()}
          ${getResizeClass()}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
        style={{ color: theme.colors.text }}
        disabled={disabled}
        {...props}
      />
      
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

Textarea.displayName = 'Textarea';

export default Textarea;