import React from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Timeline from '../ui/Timeline';
import Container from '../ui/Container';
import Typography from '../ui/Typography';
import Card from '../ui/Card';
import { 
  timelineEvents, 
  founderInfo, 
  companyValues, 
  missionStatement 
} from '../../data/brandStory';

// Company values grid component
const ValuesGrid: React.FC = () => {
  const { currentTheme } = useThemeContext();
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {companyValues.map((value, index) => (
        <div
          key={value.title}
          className={`
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <Card className="text-center h-full">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-4xl mb-2">{value.icon}</div>
              <Typography variant="h5" className={`font-semibold ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
                {value.title}
              </Typography>
              <Typography variant="body" className={`text-center ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'} opacity-80`}>
                {value.description}
              </Typography>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Founder spotlight component
const FounderSpotlight: React.FC = () => {
  const { currentTheme } = useThemeContext();
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div ref={elementRef} className={`
      transition-all duration-700 ease-out
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `}>
      <Card className="lg:flex lg:items-center lg:space-x-8">
        {/* Founder Image */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <div className="relative">
            <img
              src={founderInfo.imageUrl}
              alt={founderInfo.name}
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Founder Content */}
        <div className="lg:w-2/3">
          <div className="mb-4">
            <Typography variant="h3" className={`font-bold mb-2 ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
              {founderInfo.name}
            </Typography>
            <Typography variant="h5" className={`font-medium ${currentTheme === 'vibrant' ? 'text-forest-green' : 'text-charcoal'} opacity-80`}>
              {founderInfo.role}
            </Typography>
          </div>

          <Typography variant="body" className={`leading-relaxed mb-6 ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'} opacity-90`}>
            {founderInfo.bio}
          </Typography>

          {/* Quote */}
          <blockquote className={`
            border-l-4 pl-6 italic text-lg leading-relaxed
            ${currentTheme === 'vibrant' ? 'border-forest-green text-rich-brown' : 'border-charcoal text-charcoal'}
          `}>
            "{founderInfo.quote}"
          </blockquote>
        </div>
      </Card>
    </div>
  );
};

// Mission statement component
const MissionSection: React.FC = () => {
  const { currentTheme } = useThemeContext();
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div ref={elementRef} className={`
      text-center transition-all duration-700 ease-out
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `}>
      <Typography variant="h2" className={`font-bold mb-6 ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
        {missionStatement.title}
      </Typography>
      
      <Typography variant="h5" className={`
        leading-relaxed mb-8 max-w-4xl mx-auto
        ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'} opacity-90
      `}>
        {missionStatement.content}
      </Typography>

      {/* Highlight Banner */}
      <div className={`
        inline-block px-8 py-4 rounded-full text-white font-semibold text-lg
        ${currentTheme === 'vibrant' ? 'bg-forest-green' : 'bg-charcoal'}
        transform hover:scale-105 transition-transform duration-300
      `}>
        {missionStatement.highlight}
      </div>
    </div>
  );
};

// Section divider component
const SectionDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { currentTheme } = useThemeContext();
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`h-px flex-1 ${currentTheme === 'vibrant' ? 'bg-light-gray' : 'bg-soft-gray'}`} />
      <div className={`w-3 h-3 rounded-full mx-4 ${currentTheme === 'vibrant' ? 'bg-forest-green' : 'bg-charcoal'}`} />
      <div className={`h-px flex-1 ${currentTheme === 'vibrant' ? 'bg-light-gray' : 'bg-soft-gray'}`} />
    </div>
  );
};

// Main Brand Story component
const BrandStory: React.FC = () => {
  const { currentTheme } = useThemeContext();
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section className={`py-16 lg:py-24 ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-white'}`}>
      <Container>
        {/* Section Header */}
        <div ref={headerRef} className={`
          text-center mb-16 lg:mb-24 transition-all duration-700 ease-out
          ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          <Typography variant="h1" className={`font-bold mb-6 ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
            Our Story
          </Typography>
          <Typography variant="h4" className={`
            max-w-3xl mx-auto leading-relaxed
            ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'} opacity-80
          `}>
            From a simple idea to a global mission - discover how MyCoCoPure became your trusted source for pure, natural energy.
          </Typography>
        </div>

        {/* Mission Statement */}
        <MissionSection />

        <SectionDivider className="my-16 lg:my-24" />

        {/* Interactive Timeline */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-12">
            <Typography variant="h2" className={`font-bold mb-4 ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
              Our Journey
            </Typography>
            <Typography variant="h5" className={`
              max-w-2xl mx-auto leading-relaxed
              ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'} opacity-80
            `}>
              Follow our timeline from humble beginnings to becoming a leader in sustainable nutrition.
            </Typography>
          </div>
          
          <Timeline events={timelineEvents} />
        </div>

        <SectionDivider className="my-16 lg:my-24" />

        {/* Founder Spotlight */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-12">
            <Typography variant="h2" className={`font-bold mb-4 ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
              Meet Our Founder
            </Typography>
            <Typography variant="h5" className={`
              max-w-2xl mx-auto leading-relaxed
              ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'} opacity-80
            `}>
              The passionate visionary behind MyCoCoPure's commitment to pure, natural energy.
            </Typography>
          </div>
          
          <FounderSpotlight />
        </div>

        <SectionDivider className="my-16 lg:my-24" />

        {/* Company Values */}
        <div>
          <div className="text-center mb-12">
            <Typography variant="h2" className={`font-bold mb-4 ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'}`}>
              Our Values
            </Typography>
            <Typography variant="h5" className={`
              max-w-2xl mx-auto leading-relaxed
              ${currentTheme === 'vibrant' ? 'text-rich-brown' : 'text-charcoal'} opacity-80
            `}>
              The core principles that guide every decision we make and every product we create.
            </Typography>
          </div>
          
          <ValuesGrid />
        </div>
      </Container>
    </section>
  );
};

export default BrandStory;