import React, { useState, useRef } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { useAutoplay } from '../../hooks/useAutoplay';
import { useTheme } from '../../hooks/useTheme';
import { Typography } from '../ui';
import type { Product } from '../../data/products';

interface Product360ViewProps {
  products: Product[];
  className?: string;
}

const Product360View: React.FC<Product360ViewProps> = ({
  products,
  className = '',
}) => {
  const { currentTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoplay,
    resumeAutoplay,
    isPaused,
  } = useCarousel({
    totalSlides: products.length,
    autoplay: true,
    autoplayDelay: 4000,
    loop: true,
  });

  useAutoplay({
    isActive: true,
    isPaused,
    delay: 4000,
    onNext: nextSlide,
  });

  const currentProduct = products[currentSlide];

  if (!currentProduct) return null;

  // Extract flavor name from product name (remove "Coco Water " prefix)
  const getFlavorName = (productName: string) => {
    return productName.replace(/^Coco Water\s+/, '');
  };

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Main Carousel View */}
      <div
        ref={containerRef}
        className={`
          relative w-full aspect-square rounded-lg overflow-hidden
          ${currentTheme === 'vibrant' ? 'bg-brand-light-gray' : 'bg-minimal-light-gray'}
        `}
      >
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-full h-full object-cover transition-all duration-500"
          draggable={false}
        />
        
        {/* Product Label */}
        <div className="absolute top-4 left-4">
          <div className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${currentTheme === 'vibrant' 
              ? 'bg-brand-forest text-white' 
              : 'bg-minimal-dark-gray text-white'
            }
          `}>
            {getFlavorName(currentProduct.name)}
          </div>
        </div>


        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`
            absolute left-4 top-1/2 transform -translate-y-1/2
            w-10 h-10 rounded-full flex items-center justify-center
            transition-all duration-200 hover:scale-110 opacity-80 hover:opacity-100
            ${currentTheme === 'vibrant' 
              ? 'bg-brand-forest hover:bg-green-700' 
              : 'bg-minimal-dark-gray hover:bg-minimal-charcoal'
            }
          `}
          aria-label="Previous product"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className={`
            absolute right-4 top-1/2 transform -translate-y-1/2
            w-10 h-10 rounded-full flex items-center justify-center
            transition-all duration-200 hover:scale-110 opacity-80 hover:opacity-100
            ${currentTheme === 'vibrant' 
              ? 'bg-brand-forest hover:bg-green-700' 
              : 'bg-minimal-dark-gray hover:bg-minimal-charcoal'
            }
          `}
          aria-label="Next product"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Product Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => goToSlide(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-200
              ${index === currentSlide
                ? currentTheme === 'vibrant'
                  ? 'bg-brand-forest scale-125'
                  : 'bg-minimal-dark-gray scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
              }
            `}
            aria-label={`View ${product.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Product360View;