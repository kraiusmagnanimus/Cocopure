import React from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-large' | 'small' | 'caption';
  color?: 'primary' | 'secondary' | 'accent' | 'text' | 'textSecondary' | 'inherit';
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  className?: string;
  gradient?: boolean;
  style?: CSSProperties; // Add style prop
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  color = 'text',
  align = 'left',
  weight,
  className = '',
  gradient = false,
  style, // Accept style prop
}) => {
  const { theme } = useTheme();

  const getVariantClasses = () => {
    switch (variant) {
      case 'h1':
        return 'text-hero font-bold font-poppins';
      case 'h2':
        return 'text-section font-semibold font-poppins';
      case 'h3':
        return 'text-subsection font-semibold font-poppins';
      case 'h4':
        return 'text-card-title font-medium font-poppins';
      case 'h5':
        return 'text-small-header font-medium font-poppins';
      case 'h6':
        return 'text-lg font-medium font-poppins';
      case 'body-large':
        return 'text-body-large font-inter';
      case 'body':
        return 'text-base font-inter';
      case 'small':
        return 'text-sm font-inter';
      case 'caption':
        return 'text-xs font-inter';
      default:
        return 'text-base font-inter';
    }
  };

  const getColorValue = () => {
    if (color === 'inherit') return 'inherit';
    return theme.colors[color as keyof typeof theme.colors] || theme.colors.text;
  };

  const getWeightClass = () => {
    if (!weight) return '';
    switch (weight) {
      case 'light':
        return 'font-light';
      case 'normal':
        return 'font-normal';
      case 'medium':
        return 'font-medium';
      case 'semibold':
        return 'font-semibold';
      case 'bold':
        return 'font-bold';
      case 'extrabold':
        return 'font-extrabold';
      default:
        return '';
    }
  };

  const getAlignClass = () => {
    switch (align) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      case 'justify':
        return 'text-justify';
      default:
        return 'text-left';
    }
  };

  const gradientClass = gradient ? 'text-gradient' : '';
  const weightClass = getWeightClass();

  const commonProps = {
    className: `
      ${getVariantClasses()}
      ${getAlignClass()}
      ${weightClass}
      ${gradientClass}
      ${className}
    `,
    style: {
      color: gradient ? undefined : getColorValue(),
      ...style, // Merge with passed style
    },
  };

  // Use React.createElement to dynamically render the correct HTML element
  const elementType = variant.startsWith('h') ? variant : 'p';
  
  return React.createElement(
    elementType,
    commonProps,
    children
  );
};

export default Typography;