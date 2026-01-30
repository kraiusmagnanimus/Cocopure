import React from 'react';

interface CarouselSlideProps {
  backgroundImage: string;
  overlay?: 'light' | 'dark' | 'none';
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  backgroundImage,
  overlay = 'dark',
}) => {

  const getOverlayClasses = () => {
    switch (overlay) {
      case 'light':
        return 'bg-white bg-opacity-70';
      case 'dark':
        return 'bg-black bg-opacity-50';
      default:
        return '';
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat transform scale-105 transition-transform duration-[7000ms] ease-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${getOverlayClasses()}`} />
      )}
      
    </div>
  );
};

export default CarouselSlide;