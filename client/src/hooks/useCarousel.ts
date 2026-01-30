import { useState, useCallback } from 'react';

interface UseCarouselOptions {
  totalSlides: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
}

export const useCarousel = ({ 
  totalSlides, 
  autoplay = true, 
  autoplayDelay = 5000,
  loop = true 
}: UseCarouselOptions) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    
    const next = currentSlide === totalSlides - 1 
      ? (loop ? 0 : currentSlide)
      : currentSlide + 1;
    
    goToSlide(next);
  }, [currentSlide, totalSlides, loop, goToSlide, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    
    const prev = currentSlide === 0 
      ? (loop ? totalSlides - 1 : currentSlide)
      : currentSlide - 1;
    
    goToSlide(prev);
  }, [currentSlide, totalSlides, loop, goToSlide, isAnimating]);

  const pauseAutoplay = useCallback(() => setIsPaused(true), []);
  const resumeAutoplay = useCallback(() => setIsPaused(false), []);

  return {
    currentSlide,
    isAnimating,
    isPaused,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoplay,
    resumeAutoplay,
  };
};