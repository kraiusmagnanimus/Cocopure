import React from 'react';
import { Container, Typography, Button } from '../ui';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useTheme } from '../../hooks/useTheme';
import { getProductsByCategory } from '../../data/products';
import { waterBenefits } from '../../data/nutritionalData';
import { openFacebookPage } from '../../utils';
import Product360View from './Product360View';
import BenefitsTimeline from './BenefitsTimeline';
import NutritionalPanel from './NutritionalPanel';

const CoCoWaterSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const waterProducts = getProductsByCategory('water');

  if (!waterProducts.length) return null;

  const benefits = [
    {
      title: 'Hydration and Electrolyte Support',
      description: 'Coconut water is a great way to stay hydrated, thanks to its high water content and naturally occurring electrolytes like potassium, sodium and magnesium. These minerals help regulate the body\'s fluid levels, making coconut water ideal for replenishing fluids after exercise or in hot weather.',
      icon: '💧',
    },
    {
      title: 'Boosts Exercise Performance and Recovery',
      description: 'Consuming coconut water before or after a workout can improve endurance and recovery, due to its rich supply of electrolytes. It delivers quick energy and helps restore fluids and minerals lost during physical exertion.',
      icon: '🏃‍♂️',
    },
    {
      title: 'Supports Healthy Weight Management',
      description: 'With its low calorie and low sugar content, coconut water serves as a better alternative to sweetened beverages, making it a helpful choice for those aiming to reduce or maintain their weight.',
      icon: '⚖️',
    },
  ];

  return (
    <section
      ref={ref}
      className="pt-6 pb-20 relative overflow-hidden"
      style={{
        background: currentTheme === 'vibrant'
          ? 'linear-gradient(180deg, #119853 0%, #10b981 25%, #6ee7b7 75%, #a7f3d0 100%)'
          : 'linear-gradient(180deg, #e5e7eb 0%, #f1f5f9 25%, #f0fdf4 75%, #ecfccb 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white animate-pulse" style={{ animationDelay: '2s' }} />
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
              <Typography
                variant="h1"
                align="center"
                className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight ${currentTheme === 'vibrant' ? 'text-white' : ''}`}
              >
                
                Coconut Water is a naturally healthier choice compared to soft drinks, iced teas and sports drinks.
              </Typography>
            </div>
          </div>
          <Typography
            variant="body-large"
            align="center"
            className={`max-w-3xl mx-auto px-4 text-sm xs:text-base sm:text-lg leading-relaxed ${currentTheme === 'vibrant' ? 'text-blue-100' : 'text-gray-600'}`}
          >
            It's made with real coconut water. With exciting flavors like Mango, Blue Lemonade, Apple Green Tea and Pineapple, it delivers refreshing hydration powered by natural electrolytes and minimal sugar — perfect for recharging after a long day or simply quenching your thirst in a better way.
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
              products={waterProducts}
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
                  Coco Water Collection
                </Typography>
                <Typography
                  variant="body-large"
                  align="center"
                  className={`lg:text-left ${currentTheme === 'vibrant' ? 'text-blue-100' : 'text-gray-600'}`}
                >
                  Experience nature's perfect hydration with our Coco Water collection. Each flavor combines coconut water with exciting flavors, delivering essential electrolytes and unique taste experiences. Truly more than your average coconut water.
                </Typography>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {[
                  { icon: '🥥', text: 'Made with Real Coconut Water' },
                  { icon: '🍌', text: 'As much Potassium as 1 banana*' },
                  { icon: '⚡', text: 'Has Natural Electrolytes' },
                  { icon: '🍯', text: 'Low Sugar' },
                  { icon: '💧', text: 'Fat Free' },
                  { icon: '🍊', text: 'With Vitamin C*' },
                  { icon: '🌟', text: 'Healthier Choice than Soft Drinks, Iced Teas & Sports Drinks' }
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
              
              {/* Disclaimer */}
              <div className="mt-4 flex items-start space-x-3">
                <span className="text-lg flex-shrink-0 opacity-0">
                  🥥
                </span>
                <Typography
                  variant="caption"
                  className={`italic ${currentTheme === 'vibrant' ? 'text-blue-100' : 'text-gray-500'}`}
                >
                  *Not all variants
                </Typography>
              </div>

            </div>
          </div>
        </div>

        {/* Benefits Timeline */}
        <div
          className={`
            mb-20
            transform transition-all duration-1000 ease-out
            ${isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
            }
          `}
          style={{ transitionDelay: '0.7s' }}
        >
          <BenefitsTimeline
            title="Why Choose Coconut Water?"
            benefits={benefits}
          />
        </div>

      </Container>
    </section>
  );
};

export default CoCoWaterSection;