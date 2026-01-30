import React from 'react';
import { Typography, Container, Card, Button } from '../components/ui';
import { getProductsByCategory } from '../data/products';
import { openFacebookPage } from '../utils';
import { useTheme } from '../hooks/useTheme';

const Products: React.FC = () => {
  const { currentTheme } = useTheme();
  const waterProducts = getProductsByCategory('water');
  const bitesProducts = getProductsByCategory('bites');

  // Extract flavor name from product name
  const getFlavorName = (productName: string) => {
    return productName.replace(/^(Coco Water|Coco Bites)\s+/, '');
  };

  return (
    <div 
      className="py-8 relative overflow-hidden"
      style={{
        background: currentTheme === 'vibrant'
          ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #43b8f4 75%, #119853 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e5e7eb 50%, #f3f4f6 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-20 left-10 w-32 h-32 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-400'}`} />
        <div className={`absolute top-40 right-20 w-24 h-24 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-500'}`} style={{ animationDelay: '1s' }} />
        <div className={`absolute bottom-20 left-1/4 w-20 h-20 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-600'}`} style={{ animationDelay: '2s' }} />
        <div className={`absolute bottom-40 right-1/3 w-16 h-16 rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-400'}`} style={{ animationDelay: '3s' }} />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <Typography variant="h1" className={`mb-6 ${currentTheme === 'vibrant' ? 'text-white drop-shadow-lg' : 'text-gray-800'}`}>
            Our Products
          </Typography>
          <Typography variant="body-large" className={`max-w-3xl mx-auto ${currentTheme === 'vibrant' ? 'text-white/90 drop-shadow-md' : 'text-gray-600'}`}>
            Discover our range of coconut products, crafted with care for your healthy lifestyle.
          </Typography>
        </div>

        {/* Coco Water Section */}
        <div className="mb-16 relative z-10">
          <div className="flex items-center mb-8">
            <div className={`w-1 h-12 rounded-full mr-4 ${
              currentTheme === 'vibrant' ? 'bg-white shadow-lg' : 'bg-minimal-dark-gray'
            }`} />
            <div>
              <Typography variant="h2" className={`mb-2 ${currentTheme === 'vibrant' ? 'text-white drop-shadow-md' : 'text-gray-800'}`}>
                Our Coco Water Collection
              </Typography>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {waterProducts.map((product) => (
                <Card key={product.id} hover className="h-full flex flex-col group">
                  {/* Product Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col">
                    <Typography variant="h5" className="mb-2 line-clamp-1">{getFlavorName(product.name)}</Typography>
                    <Typography variant="body" color="textSecondary" className="mb-4 line-clamp-3 h-[72px]">
                      {product.description}
                    </Typography>

                    {/* Key Benefits */}
                    <div className="mb-4 min-h-[120px]">
                      <ul className="space-y-1">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="text-blue-500 mr-2 mt-0.5 flex-shrink-0">💧</span>
                            <Typography variant="small" color="textSecondary">
                              {benefit}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* Coco Chips Section */}
        <div className="mb-16 relative z-10">
          <div className="flex items-center mb-8">
            <div className={`w-1 h-12 rounded-full mr-4 ${
              currentTheme === 'vibrant' ? 'bg-white shadow-lg' : 'bg-minimal-dark-gray'
            }`} />
            <div>
              <Typography variant="h2" className={`mb-2 ${currentTheme === 'vibrant' ? 'text-white drop-shadow-md' : 'text-gray-800'}`}>
                Our Coco Chips Collection
              </Typography>

            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {bitesProducts.map((product) => (
                <Card key={product.id} hover className="h-full flex flex-col group">
                  {/* Product Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col">
                    <Typography variant="h5" className="mb-2 line-clamp-1">{getFlavorName(product.name)}</Typography>
                    <Typography variant="body" color="textSecondary" className="mb-4 line-clamp-3 h-[72px]">
                      {product.description}
                    </Typography>

                    {/* Key Benefits */}
                    <div className="mb-4 min-h-[120px]">
                      <ul className="space-y-1">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0">⚡</span>
                            <Typography variant="small" color="textSecondary">
                              {benefit}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Products;