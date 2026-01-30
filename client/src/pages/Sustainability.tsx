import React from 'react';
import { Typography, Container, Card } from '../components/ui';
import { useTheme } from '../hooks/useTheme';

const Sustainability: React.FC = () => {
  const { currentTheme } = useTheme();
  
  return (
    <div 
      className="py-8 relative overflow-hidden"
      style={{
        background: currentTheme === 'vibrant'
          ? 'linear-gradient(135deg, #10b981 0%, #059669 25%, #119853 50%, #6ee7b7 75%, #a7f3d0 100%)'
          : 'linear-gradient(135deg, #f0fdf4 0%, #ecfccb 25%, #f7fee7 50%, #f0f9ff 75%, #e0f2fe 100%)',
      }}
    >
      {/* Nature-inspired Background Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className={`absolute top-12 left-12 w-24 h-24 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-green-200'}`} />
        <div className={`absolute top-20 right-16 w-32 h-32 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-green-300'}`} style={{ animationDelay: '1s' }} />
        <div className={`absolute bottom-16 left-1/5 w-20 h-20 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-green-200'}`} style={{ animationDelay: '2s' }} />
        <div className={`absolute bottom-24 right-1/4 w-28 h-28 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-green-300'}`} style={{ animationDelay: '2.5s' }} />
        <div className={`absolute top-1/3 left-2/3 w-16 h-16 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-green-100'}`} style={{ animationDelay: '3.5s' }} />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <Typography variant="h1" align="center" className={`mb-8 ${currentTheme === 'vibrant' ? 'text-white drop-shadow-lg' : 'text-gray-800'}`}>
            Sustainability
          </Typography>
          
          <Typography variant="body-large" align="center" className={`mb-12 ${currentTheme === 'vibrant' ? 'text-white/90 drop-shadow-md' : 'text-gray-600'}`}>
            Our commitment to the planet and communities runs as deep as our roots.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <Typography variant="h4" className="mb-4">🌱 Sustainable Farming</Typography>
              <Typography variant="body" color="textSecondary">
                We work exclusively with farmers who practice sustainable agriculture, 
                ensuring that every coconut is grown with respect for the environment 
                and without harmful chemicals.
              </Typography>
            </Card>

            <Card>
              <Typography variant="h4" className="mb-4">♻️ Eco-Friendly Packaging</Typography>
              <Typography variant="body" color="textSecondary">
                Our packaging is designed with the environment in mind, using 
                recyclable materials and minimizing waste throughout our supply chain.
              </Typography>
            </Card>

            <Card>
              <Typography variant="h4" className="mb-4">🤝 Community Support</Typography>
              <Typography variant="body" color="textSecondary">
                We believe in fair trade and supporting local communities. Our 
                partnerships ensure that farmers receive fair compensation for 
                their quality coconuts.
              </Typography>
            </Card>

            <Card>
              <Typography variant="h4" className="mb-4">🌊 Carbon Neutral Goal</Typography>
              <Typography variant="body" color="textSecondary">
                We're working towards becoming carbon neutral by 2026, implementing 
                renewable energy solutions and optimizing our logistics for 
                minimal environmental impact.
              </Typography>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sustainability;