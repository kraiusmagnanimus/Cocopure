import React, { useEffect, useRef } from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useTimelineAnimation } from '../../hooks/useTimelineAnimation';
import type { TimelineEvent } from '../../data/brandStory';
import { categoryColors } from '../../data/brandStory';

// Timeline component props
interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

// Timeline item component props
interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
  onRegister: (id: string, element: HTMLElement) => void;
  getAnimationClass: (itemId: string, index: number) => string;
  isVisible: boolean;
  isActive: boolean;
}

// Timeline item component
const TimelineItem: React.FC<TimelineItemProps> = ({
  event,
  index,
  isLast,
  onRegister,
  getAnimationClass,
  isVisible,
  isActive
}) => {
  const { currentTheme } = useThemeContext();
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Register item with timeline animation hook
  useEffect(() => {
    if (itemRef.current) {
      onRegister(event.id, itemRef.current);
    }
  }, [event.id, onRegister]);

  // Get theme-aware colors
  const getThemeColor = (category: string) => {
    if (currentTheme === 'minimal') {
      return '#374151'; // Charcoal for minimal theme
    }
    return categoryColors[category as keyof typeof categoryColors] || '#374151';
  };

  const isEven = index % 2 === 0;
  const dotColor = getThemeColor(event.category);

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } ${getAnimationClass(event.id, index)}`}
      data-timeline-id={event.id}
    >
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
        <div
          className={`
            ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-white'} 
            rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
            ${isActive ? 'ring-2 ring-offset-2' : ''}
            ${currentTheme === 'vibrant' ? 'ring-forest-green' : 'ring-charcoal'}
          `}
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            {/* Year Badge */}
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
              style={{ backgroundColor: dotColor }}
            >
              {event.year}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-xl font-bold ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
                {event.title}
              </h3>
              <span
                className="text-xs font-medium px-2 py-1 rounded-full"
                style={{ 
                  backgroundColor: `${dotColor}20`,
                  color: dotColor 
                }}
              >
                {event.category}
              </span>
            </div>

            <p className={`text-sm leading-relaxed mb-4 ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'} opacity-80`}>
              {event.description}
            </p>

            {/* Milestone */}
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: dotColor }}
              />
              <span className={`text-xs font-medium ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
                {event.milestone}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 md:relative md:left-auto md:transform-none">
        <div
          className={`
            w-4 h-4 rounded-full border-4 transition-all duration-300
            ${isActive ? 'scale-125 shadow-lg' : 'scale-100'}
            ${currentTheme === 'vibrant' ? 'border-white' : 'border-light-gray'}
          `}
          style={{ backgroundColor: dotColor }}
        />
        
        {/* Connecting Line */}
        {!isLast && (
          <div
            className={`
              absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 md:h-20
              ${currentTheme === 'vibrant' ? 'bg-light-gray' : 'bg-soft-gray'}
            `}
          />
        )}
      </div>

      {/* Empty Space for Opposite Side */}
      <div className="hidden md:block w-5/12" />
    </div>
  );
};

// Progress indicator component
const TimelineProgress: React.FC<{
  progressPercentage: number;
  getProgressLineStyle: () => React.CSSProperties;
}> = ({ progressPercentage, getProgressLineStyle }) => {
  const { currentTheme } = useThemeContext();

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
      <div className="flex flex-col items-center space-y-2">
        {/* Progress Bar */}
        <div className={`w-1 h-32 rounded-full ${currentTheme === 'vibrant' ? 'bg-light-gray' : 'bg-soft-gray'} relative`}>
          <div
            className={`w-full rounded-full ${currentTheme === 'vibrant' ? 'bg-forest-green' : 'bg-charcoal'} transition-all duration-500`}
            style={getProgressLineStyle()}
          />
        </div>
        
        {/* Progress Percentage */}
        <div className={`text-xs font-medium ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
          {progressPercentage}%
        </div>
      </div>
    </div>
  );
};

// Main Timeline component
const Timeline: React.FC<TimelineProps> = ({ events, className = '' }) => {
  const { currentTheme } = useThemeContext();
  const {
    containerRef,
    registerItem,
    getItemAnimationClass,
    getProgressLineStyle,
    isItemVisible,
    isItemActive,
    progressPercentage
  } = useTimelineAnimation(events.length);

  return (
    <div className={`relative ${className}`}>
      {/* Timeline Container */}
      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        {/* Central Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-light-gray opacity-30" />
        
        {/* Mobile Timeline Line */}
        <div className="md:hidden absolute left-8 top-0 w-0.5 h-full bg-light-gray opacity-30" />

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-16">
          {events.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              index={index}
              isLast={index === events.length - 1}
              onRegister={registerItem}
              getAnimationClass={getItemAnimationClass}
              isVisible={isItemVisible(event.id)}
              isActive={isItemActive(event.id)}
            />
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <TimelineProgress
        progressPercentage={progressPercentage}
        getProgressLineStyle={getProgressLineStyle}
      />
    </div>
  );
};

export default Timeline;