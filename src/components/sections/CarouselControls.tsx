import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface CarouselControlsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  totalSlides,
  currentSlide,
  onSlideChange,
  onPrevious,
  onNext,
}) => {
  const { currentTheme } = useTheme();

  const getButtonClasses = (isActive = false) => {
    const baseClasses = `
      w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
      hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
    `;
    
    if (isActive) {
      return `${baseClasses} ${currentTheme === 'vibrant' ? 'bg-brand-forest' : 'bg-white'} opacity-100`;
    }
    
    return `${baseClasses} bg-white opacity-50 hover:opacity-75`;
  };

  const getArrowClasses = () => {
    return `
      w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-300
      flex items-center justify-center cursor-pointer
      hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white
      ${currentTheme === 'vibrant' 
        ? 'bg-brand-forest bg-opacity-80 hover:bg-opacity-100' 
        : 'bg-black bg-opacity-50 hover:bg-opacity-70'
      }
    `;
  };

  return (
    <>
      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={getButtonClasses(index === currentSlide)}
              onClick={() => onSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <div className="absolute inset-y-0 left-4 flex items-center z-20">
        <button
          className={getArrowClasses()}
          onClick={onPrevious}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center z-20">
        <button
          className={getArrowClasses()}
          onClick={onNext}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>


      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-30 z-20">
        <div
          className={`h-full transition-all duration-300 ${
            currentTheme === 'vibrant' ? 'bg-brand-forest' : 'bg-white'
          }`}
          style={{
            width: `${((currentSlide + 1) / totalSlides) * 100}%`,
          }}
        />
      </div>
    </>
  );
};

export default CarouselControls;