import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  unit?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  animated?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  unit = '%',
  color = 'primary',
  size = 'md',
  showValue = true,
  animated = true,
  className = '',
}) => {
  const { currentTheme } = useTheme();
  const percentage = Math.min((value / max) * 100, 100);

  const getColorClasses = () => {
    if (currentTheme === 'vibrant') {
      switch (color) {
        case 'primary':
          return 'bg-brand-forest';
        case 'secondary':
          return 'bg-brand-yellow';
        case 'accent':
          return 'bg-brand-red';
        case 'success':
          return 'bg-green-500';
        case 'warning':
          return 'bg-yellow-500';
        default:
          return 'bg-brand-forest';
      }
    } else {
      switch (color) {
        case 'primary':
          return 'bg-minimal-dark-gray';
        case 'secondary':
          return 'bg-minimal-medium-gray';
        case 'accent':
          return 'bg-minimal-charcoal';
        case 'success':
          return 'bg-green-500';
        case 'warning':
          return 'bg-yellow-500';
        default:
          return 'bg-minimal-dark-gray';
      }
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-2';
      case 'lg':
        return 'h-6';
      default:
        return 'h-4';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">{label}</span>
          {showValue && (
            <span className="text-sm text-gray-600">
              {value}{unit}
            </span>
          )}
        </div>
      )}
      
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${getSizeClasses()}`}>
        <div
          className={`
            ${getSizeClasses()} 
            ${getColorClasses()}
            ${animated ? 'transition-all duration-1000 ease-out' : ''}
            rounded-full
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;