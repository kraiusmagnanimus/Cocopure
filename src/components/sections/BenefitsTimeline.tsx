import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Typography } from '../ui';
import { useTheme } from '../../hooks/useTheme';

interface Benefit {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

interface BenefitsTimelineProps {
  benefits: Benefit[];
  title?: string;
  className?: string;
}

const BenefitsTimeline: React.FC<BenefitsTimelineProps> = ({
  benefits,
  title = 'Health Benefits',
  className = '',
}) => {
  const { currentTheme } = useTheme();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {title && (
        <Typography variant="h3" align="center" className="mb-12">
          {title}
        </Typography>
      )}

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200">
          <div
            className={`
              w-full transition-all duration-2000 ease-out
              ${currentTheme === 'vibrant' ? 'bg-brand-forest' : 'bg-minimal-dark-gray'}
              ${isVisible ? 'h-full' : 'h-0'}
            `}
            style={{ transitionDelay: '0.5s' }}
          />
        </div>

        {/* Benefits */}
        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                relative flex items-start space-x-6
                transform transition-all duration-700 ease-out
                ${isVisible 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
                }
              `}
              style={{
                transitionDelay: `${(index * 0.2) + 0.8}s`,
              }}
            >
              {/* Timeline Dot */}
              <div className={`
                relative z-10 flex items-center justify-center
                w-16 h-16 rounded-full text-2xl
                ${currentTheme === 'vibrant' 
                  ? 'bg-brand-forest' 
                  : 'bg-minimal-dark-gray'
                }
                transform transition-all duration-500 hover:scale-110
              `}>
                <span className="text-white">{benefit.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <Typography variant="h5" className="mb-2">
                  {benefit.title}
                </Typography>
                <Typography variant="body" color="textSecondary">
                  {benefit.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsTimeline;