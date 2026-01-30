import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { useAutoplay } from '../../hooks/useAutoplay';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Typography, Button, Badge } from '../ui';
import { useTheme } from '../../hooks/useTheme';
import { openFacebookPage } from '../../utils';
import type { Product } from '../../data/products';

interface FlavorCarouselProps {
  products: Product[];
  className?: string;
}

const FlavorCarousel: React.FC<FlavorCarouselProps> = ({
  products,
  className = '',
}) => {
  const { currentTheme } = useTheme();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

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

  // Extract flavor name from product name (remove "Coco Bites " prefix)
  const getFlavorName = (productName: string) => {
    return productName.replace(/^Coco Bites\s+/, '');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Product Carousel */}
      <div
        className={`
          relative
          transform transition-all duration-1000 ease-out
          ${isVisible 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-8 opacity-0'
          }
        `}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
      >
        {/* Main Carousel View */}
        <div
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

      {/* Product Details */}
      <div
        className={`
          transform transition-all duration-1000 ease-out
          ${isVisible 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-8 opacity-0'
          }
        `}
        style={{ transitionDelay: '0.3s' }}
      >
        <div className="space-y-6">
          <div>
            <Typography
              variant="h3"
              className={`mb-4 ${currentTheme === 'vibrant' ? 'text-white' : ''}`}
            >
              CoCo Bites Collection
            </Typography>
            <Typography
              variant="body-large"
              className={currentTheme === 'vibrant' ? 'text-blue-100' : 'text-gray-600'}
            >
              Experience the perfect snack with our CoCo Bites collection. Each flavor combines real coconut meat with bold seasonings, delivering satisfying crunch and nutritious benefits. A better-for-you snack option.
            </Typography>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3">
            {[
              { icon: '🥥', text: 'Made from Real Coconut Meat' },
              { icon: '🌾', text: 'High Dietary Fiber' },
              { icon: '💧', text: 'No Cholesterol' },
              { icon: '🌾', text: 'Gluten Free' },
              { icon: '🚫', text: 'Never Fried' },
              { icon: '🔥', text: 'Loaded with Good Fats (MCT)' },
              { icon: '🍟', text: 'A Healthier Alternative to Chips' },
              { icon: '🌟', text: 'Guilt-Free Snacking' },
              { icon: '👶', text: 'Great Snack for Kids' }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className={`text-lg flex-shrink-0 ${currentTheme === 'vibrant' ? 'brightness-110' : ''}`}>
                  {benefit.icon}
                </span>
                <Typography
                  variant="small"
                  className={`leading-relaxed ${currentTheme === 'vibrant' ? 'text-white' : 'text-gray-700'}`}
                >
                  {benefit.text}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorCarousel;