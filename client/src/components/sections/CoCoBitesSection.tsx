import React from 'react';
import { Container, Typography } from '../ui';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useTheme } from '../../hooks/useTheme';
import { getProductsByCategory } from '../../data/products';
import { bitesBenefits } from '../../data/nutritionalData';
import Product360View from './Product360View';
import BenefitsTimeline from './BenefitsTimeline';
import NutritionalPanel from './NutritionalPanel';

const CoCoBitesSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const bitesProducts = getProductsByCategory('bites');

  const benefits = [
    {
      title: 'High in Fiber',
      description: 'Helps promote good digestion and keeps you feeling satisfied longer.',
      icon: '🌾',
    },
    {
      title: 'Natural Healthy Fats',
      description: 'Contains medium-chain triglycerides (MCTs) that support energy and may enhance metabolism.',
      icon: '🔥',
    },
    {
      title: 'Better-for-You Snack',
      description: 'A more nutritious choice than regular chips, packed with wholesome benefits.',
      icon: '🌟',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: currentTheme === 'vibrant'
          ? 'linear-gradient(180deg, #a7f3d0 0%, #6ee7b7 25%, #fbbf24 75%, #f59e0b 100%)'
          : 'linear-gradient(180deg, #ecfccb 0%, #f0fdf4 25%, #fef3c7 75%, #fde68a 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`
          absolute top-10 right-10 w-40 h-40 rounded-full opacity-10
          ${currentTheme === 'vibrant' ? 'bg-brand-yellow' : 'bg-gray-300'}
          animate-pulse
        `} />
        <div className={`
          absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-10
          ${currentTheme === 'vibrant' ? 'bg-brand-red' : 'bg-gray-400'}
          animate-pulse
        `} style={{ animationDelay: '1.5s' }} />
        <div className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-5
          ${currentTheme === 'vibrant' ? 'bg-brand-forest' : 'bg-gray-500'}
          animate-pulse
        `} style={{ animationDelay: '3s' }} />
      </div>

      <Container>
        {/* Header */}
        <div
          className={`
            text-center mb-16
            transform transition-all duration-1000 ease-out
            ${isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
            }
          `}
        >
          <div className="mb-4 sm:mb-6 text-center px-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 xs:gap-2 sm:gap-4">
              <img 
                src="/assets/Cocopure_Logo.png" 
                alt="Cocopure Logo" 
                className="h-24 xs:h-32 sm:h-36 md:h-40 lg:hidden object-contain"
              />
              <Typography variant="h1" align="center" className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                
                Coconut Chips are a better-for-you snack compared to potato chips, corn chips or popcorn.
              </Typography>
            </div>
          </div>
          <Typography variant="body-large" align="center" color="textSecondary" className="max-w-3xl mx-auto px-4 text-sm xs:text-base sm:text-lg leading-relaxed">
            COCOPURE Coconut Chips are made from real coconut meat. Available in crave-worthy flavors like Cheese, Barbecue, Sour Cream & Onion and Chocolate, they satisfy your snack cravings while delivering fiber and good fats!
          </Typography>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 sm:gap-16 items-center mb-12 xs:mb-16 sm:mb-20 px-2 xs:px-4">
          {/* 360° Product View */}
          <div
            className={`
              transform transition-all duration-1000 ease-out
              ${isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-8 opacity-0'
              }
            `}
            style={{ transitionDelay: '0.3s' }}
          >
            <Product360View
              products={bitesProducts}
            />
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
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="space-y-6">
              <div>
                <Typography
                  variant="h3"
                  align="center"
                  className={`mb-4 lg:text-left ${currentTheme === 'vibrant' ? 'text-white' : ''}`}
                >
                  Coco Chips Collection
                </Typography>
                <Typography
                  variant="body-large"
                  align="center"
                  className={`lg:text-left ${currentTheme === 'vibrant' ? 'text-orange-100' : 'text-gray-600'}`}
                >
                  Indulge in our coconut chips made from real coconut meat. Each flavor delivers a satisfying crunch with wholesome benefits, making them a better-for-you snack choice compared to traditional chips. Perfect for anytime snacking or adding crunch to your favorite dishes.
                </Typography>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {[
                  { icon: '🥥', text: 'Made from Real Coconut Meat' },
                  { icon: '🌾', text: 'High Dietary Fiber' },
                  { icon: '💚', text: 'No Cholesterol' },
                  { icon: '✨', text: 'Gluten Free' },
                  { icon: '🍃', text: 'Never Fried' },
                  { icon: '🔥', text: 'Loaded with Good Fats (MCT)' },
                  { icon: '🌟', text: 'A Healthier Alternative to Chips' },
                  { icon: '😌', text: 'Guilt-Free Snacking' },
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

        {/* Energy Benefits Timeline */}
        <div
          className={`
            mb-12
            transform transition-all duration-1000 ease-out
            ${isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
            }
          `}
          style={{ transitionDelay: '0.5s' }}
        >
          <BenefitsTimeline
            title="Why Choose Coconut Chips?"
            benefits={benefits}
          />
        </div>


      </Container>
    </section>
  );
};

export default CoCoBitesSection;