import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { useAutoplay } from '../../hooks/useAutoplay';
import CarouselSlide from './CarouselSlide';
import CarouselControls from './CarouselControls';

const HeroCarousel: React.FC = () => {
  const slides = [
    {
      id: 1,
      backgroundImage: './assets/Hero_Carousel_1.jpg',
      overlay: 'none' as const,
    },
    {
      id: 2,
      backgroundImage: './assets/Hero_Carousel_2.png',
      overlay: 'none' as const,
    },
  ];

  const {
    currentSlide,
    isAnimating,
    isPaused,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoplay,
    resumeAutoplay,
  } = useCarousel({
    totalSlides: slides.length,
    autoplay: true,
    autoplayDelay: 6000,
    loop: true,
  });

  useAutoplay({
    isActive: true,
    isPaused,
    delay: 6000,
    onNext: nextSlide,
  });

  return (
    <section 
      className="relative w-full aspect-video overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-all duration-700 ease-in-out
              ${index === currentSlide 
                ? 'opacity-100 translate-x-0 z-10' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full z-0'
                  : 'opacity-0 translate-x-full z-0'
              }
            `}
          >
            <CarouselSlide 
              backgroundImage={slide.backgroundImage}
              overlay={slide.overlay}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <CarouselControls
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onSlideChange={goToSlide}
        onPrevious={prevSlide}
        onNext={nextSlide}
      />

      {/* Loading Indicator */}
      {isAnimating && (
        <div className="absolute inset-0 bg-black bg-opacity-20 z-30 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
};

export default HeroCarousel;