import React from 'react';
import { Typography, Container, Card } from '../components/ui';
import { useTheme } from '../hooks/useTheme';

const OurStory: React.FC = () => {
  const { currentTheme } = useTheme();
  
  return (
    <div 
      className="py-8 relative overflow-hidden"
      style={{
        background: currentTheme === 'vibrant'
          ? 'linear-gradient(135deg, #119853 0%, #43b8f4 50%, #fbbf24 100%)'
          : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #f8fafc 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className={`absolute top-16 right-16 w-28 h-28 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-300'}`} />
        <div className={`absolute top-1/2 left-16 w-20 h-20 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-400'}`} style={{ animationDelay: '1.5s' }} />
        <div className={`absolute bottom-24 right-1/4 w-24 h-24 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-300'}`} style={{ animationDelay: '2.5s' }} />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <Typography variant="h1" align="center" className={`mb-8 ${currentTheme === 'vibrant' ? 'text-white drop-shadow-lg' : 'text-gray-800'}`}>
            Our Story
          </Typography>
          
          <div className="space-y-12">
            <Card>
              <Typography variant="h3" className="mb-6">Real Life. Real Cravings. Real Change.</Typography>
              <Typography variant="body" color="textSecondary" className="mb-4">
                We're a married couple who live for movement—and movies. Whether it's a morning badminton game or an evening gym session, we're always on the go. And when we're not? You'll find us on the couch, deep into a Netflix binge.
              </Typography>
              <Typography variant="body" color="textSecondary" className="mb-4">
                Like most active people, we used to rely on sugary sports drinks to fuel our workouts and mindlessly munch on potato chips, popcorn and corn chips during movie nights. It was fun—until it wasn't.
              </Typography>
              <Typography variant="body" color="textSecondary" className="mb-4">
                One night, after polishing off another bag of greasy snacks, we both looked at each other and said, "There has to be something better."
              </Typography>
              <Typography variant="body" color="textSecondary" className="mb-4">
                We searched every supermarket and health store we could find, hoping for snacks and drinks that actually felt good to consume—refreshing, clean, satisfying. But nothing quite hit the mark.
              </Typography>
              <Typography variant="body" color="textSecondary" className="mb-4">
                So we took matters into our own hands.
              </Typography>
              <Typography variant="body" color="textSecondary" className="mb-4">
                We created our own line of products—made to fuel active days and guilt-free nights. Everything we make is something we proudly consume ourselves, and now, we're sharing it with you.
              </Typography>
              <Typography variant="body" color="textSecondary">
                Because you shouldn't have to choose between healthy and happy.
              </Typography>
            </Card>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurStory;