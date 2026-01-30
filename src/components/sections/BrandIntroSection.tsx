import React from 'react';
import { Typography, Container } from '../ui';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useTheme } from '../../hooks/useTheme';

const BrandIntroSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="pt-20 pb-6 relative overflow-hidden"
      style={{
        background: currentTheme === 'vibrant'
          ? 'linear-gradient(180deg, #fbbf24 0%, #f59e0b 25%, #43b8f4 75%, #119853 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 75%, #e5e7eb 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <Container>
        <div className="text-center max-w-5xl mx-auto relative z-10">
          {/* Main Heading */}
          <div
            className={`
              mb-8
              transform transition-all duration-1000 ease-out
              ${isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
              }
            `}
          >
            <div className="flex justify-center mb-2">
              <img 
                src="./assets/Cocopure_Logo.png" 
                alt="COCOPURE Logo" 
                className="h-32 w-auto"
              />
            </div>
            <Typography
              variant="h3"
              align="center"
              weight="medium"
              className={`${currentTheme === 'vibrant' ? 'text-yellow-100' : 'text-brand-yellow'}`}
            >
              Naturally Better, Deliciously Different
            </Typography>
          </div>
          
          {/* Description */}
          <div
            className={`
              transform transition-all duration-1000 ease-out
              ${isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
              }
            `}
            style={{ transitionDelay: '0.3s' }}
          >
            <Typography
              variant="body-large"
              align="center"
              className={`max-w-4xl mx-auto leading-relaxed ${
                currentTheme === 'vibrant' 
                  ? 'text-green-50' 
                  : 'text-brand-charcoal'
              }`}
            >
              Discover COCOPURE, a proudly Filipino brand offering the first locally made 
              flavored coconut water and flavored coconut chips — smart, healthy alternatives 
              for today's wellness-focused lifestyle
            </Typography>
          </div>

          {/* Decorative Elements */}
          <div
            className={`
              mt-12 flex justify-center items-center space-x-8
              transform transition-all duration-1000 ease-out
              ${isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
              }
            `}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className={`w-16 h-0.5 ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-brand-forest'} opacity-60`} />
            <div className={`text-2xl ${currentTheme === 'vibrant' ? 'text-yellow-200' : 'text-brand-yellow'}`}>
              🥥
            </div>
            <div className={`w-16 h-0.5 ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-brand-forest'} opacity-60`} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandIntroSection;