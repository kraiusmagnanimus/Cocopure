import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Typography, ProgressBar, Tabs } from '../ui';
import type { NutritionalBenefit } from '../../data/nutritionalData';

interface NutritionalPanelProps {
  benefits: NutritionalBenefit[];
  productName: string;
  className?: string;
}

const NutritionalPanel: React.FC<NutritionalPanelProps> = ({
  benefits,
  productName,
  className = '',
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const nutritionTabs = [
    {
      id: 'benefits',
      label: 'Key Benefits',
      icon: '⚡',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.name}
              className={`
                p-4 rounded-lg border border-gray-200
                transform transition-all duration-500 ease-out
                ${isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
                }
              `}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{benefit.icon}</span>
                  <Typography variant="h6" weight="medium">
                    {benefit.name}
                  </Typography>
                </div>
                <Typography variant="small" weight="bold">
                  {benefit.value}{benefit.unit}
                </Typography>
              </div>
              
              <ProgressBar
                value={benefit.dailyValue}
                max={100}
                color="primary"
                size="sm"
                animated={isVisible}
                className="mb-2"
              />
              
              <Typography variant="small" color="textSecondary">
                {benefit.description}
              </Typography>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'comparison',
      label: 'vs. Alternatives',
      icon: '📊',
      content: (
        <div className="space-y-6">
          <Typography variant="body" color="textSecondary" className="text-center">
            See how {productName} compares to other options
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
              <Typography variant="h6" weight="bold" className="text-green-700">
                {productName}
              </Typography>
              <Typography variant="small" color="textSecondary">
                100% Natural
              </Typography>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-200">
              <Typography variant="h6" weight="bold" className="text-gray-700">
                Sports Drinks
              </Typography>
              <Typography variant="small" color="textSecondary">
                Artificial additives
              </Typography>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-200">
              <Typography variant="h6" weight="bold" className="text-gray-700">
                Energy Bars
              </Typography>
              <Typography variant="small" color="textSecondary">
                Processed ingredients
              </Typography>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'facts',
      label: 'Nutrition Facts',
      icon: '📋',
      content: (
        <div className="bg-white border border-gray-300 rounded-lg p-6 max-w-md mx-auto">
          <Typography variant="h6" weight="bold" align="center" className="mb-4 border-b border-gray-300 pb-2">
            Nutrition Facts
          </Typography>
          
          <div className="space-y-2">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex justify-between items-center py-1 border-b border-gray-100">
                <Typography variant="small">{benefit.name}</Typography>
                <Typography variant="small" weight="medium">
                  {benefit.value}{benefit.unit}
                </Typography>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-2 border-t border-gray-300">
            <Typography variant="caption" color="textSecondary">
              * Percent Daily Values are based on a 2,000 calorie diet
            </Typography>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div ref={ref} className={className}>
      <Tabs
        tabs={nutritionTabs}
        variant="pills"
        defaultTab="benefits"
      />
    </div>
  );
};

export default NutritionalPanel;