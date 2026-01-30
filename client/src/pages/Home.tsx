import React from 'react';
import { Typography, Container, Button, Card } from '../components/ui';
import { HeroCarousel, ProductShowcase, BrandIntroSection } from '../components/sections';
import { openFacebookPage } from '../utils';

const Home: React.FC = () => {
  return (
    <div>
      {/* Full-Height Hero Carousel */}
      <HeroCarousel />

      {/* Brand Introduction Section */}
      <BrandIntroSection />

      {/* Product Showcase with Animations */}
      <ProductShowcase />

      {/* Additional sections can be added here */}
    </div>
  );
};

export default Home;