// Timeline event interface
export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  milestone: string;
  category: 'origin' | 'growth' | 'innovation' | 'sustainability' | 'future';
}

// Brand story timeline events
export const timelineEvents: TimelineEvent[] = [
  {
    id: 'founding',
    year: '2019',
    title: 'The Beginning',
    description: 'Founded with a simple mission: bring the pure energy of coconuts directly from tropical farms to health-conscious consumers worldwide. Our journey started with a passion for natural, unprocessed nutrition.',
    imageUrl: 'https://placehold.co/400x300/119853/ffffff?text=Founding+Story',
    milestone: 'Company Founded',
    category: 'origin'
  },
  {
    id: 'first-product',
    year: '2020',
    title: 'Pure CoCo Water Launch',
    description: 'After months of sourcing and testing, we launched our flagship CoCo Water. Zero additives, no artificial flavors - just pure coconut water straight from young, green coconuts in Southeast Asia.',
    imageUrl: 'https://placehold.co/400x300/43b8f4/ffffff?text=CoCo+Water+Launch',
    milestone: 'First Product',
    category: 'growth'
  },
  {
    id: 'sustainable-sourcing',
    year: '2021',
    title: 'Sustainable Partnerships',
    description: 'We established direct partnerships with coconut farmers, ensuring fair trade practices and sustainable farming methods. Every purchase supports local communities and environmental conservation.',
    imageUrl: 'https://placehold.co/400x300/119853/ffffff?text=Sustainable+Farming',
    milestone: 'Fair Trade Certified',
    category: 'sustainability'
  },
  {
    id: 'coco-bites',
    year: '2022',
    title: 'CoCo Bites Innovation',
    description: 'Expanding beyond beverages, we created CoCo Bites - energy-packed snacks made from coconut meat, natural fruits, and superfoods. Three delicious flavors born from customer feedback.',
    imageUrl: 'https://placehold.co/400x300/f8be2e/ffffff?text=CoCo+Bites',
    milestone: 'Product Expansion',
    category: 'innovation'
  },
  {
    id: 'community-impact',
    year: '2023',
    title: 'Community Impact Program',
    description: 'Launched our "Trees for Tomorrow" initiative, planting one coconut tree for every 100 products sold. We\'ve planted over 10,000 trees and supported 50+ farming families.',
    imageUrl: 'https://placehold.co/400x300/119853/ffffff?text=Community+Impact',
    milestone: '10,000 Trees Planted',
    category: 'sustainability'
  },
  {
    id: 'quality-certification',
    year: '2024',
    title: 'Premium Quality Standards',
    description: 'Achieved organic certification and implemented rigorous quality control processes. Every batch is tested for purity, nutritional content, and taste consistency.',
    imageUrl: 'https://placehold.co/400x300/cc2026/ffffff?text=Quality+Standards',
    milestone: 'Organic Certified',
    category: 'innovation'
  },
  {
    id: 'future-vision',
    year: '2025+',
    title: 'Global Expansion',
    description: 'Our vision extends beyond products - we\'re building a movement toward sustainable nutrition. Expanding internationally while maintaining our commitment to quality and environmental responsibility.',
    imageUrl: 'https://placehold.co/400x300/374151/ffffff?text=Future+Vision',
    milestone: 'Global Reach',
    category: 'future'
  }
];

// Category colors for timeline visualization
export const categoryColors = {
  origin: '#119853',      // Forest Green
  growth: '#43b8f4',      // Sky Blue
  innovation: '#f8be2e',  // Sunny Yellow
  sustainability: '#119853', // Forest Green
  future: '#cc2026'       // Vibrant Red
} as const;

// Founder information
export const founderInfo = {
  name: 'Maria Santos',
  role: 'Founder & CEO',
  bio: 'A nutrition enthusiast and former wellness coach, Maria discovered the power of coconut water during her travels through Southeast Asia. Her mission is to make pure, natural energy accessible to everyone while supporting the communities that grow these incredible coconuts.',
  imageUrl: 'https://placehold.co/300x300/119853/ffffff?text=Maria+Santos',
  quote: 'Every coconut tells a story of sunshine, rain, and pure natural energy. We\'re just the messengers bringing that story to you.'
};

// Company values
export const companyValues = [
  {
    icon: '🌱',
    title: 'Pure & Natural',
    description: 'No artificial additives, preservatives, or processed ingredients. Just nature\'s best.'
  },
  {
    icon: '🤝',
    title: 'Fair Trade',
    description: 'Direct partnerships with farmers ensuring fair wages and sustainable practices.'
  },
  {
    icon: '🌍',
    title: 'Environmental Care',
    description: 'Carbon-neutral shipping, biodegradable packaging, and tree planting initiatives.'
  },
  {
    icon: '⚡',
    title: 'Pure Energy',
    description: 'Delivering natural electrolytes and energy that fuel your active lifestyle.'
  }
];

// Mission statement
export const missionStatement = {
  title: 'Our Mission',
  content: 'To deliver the pure, natural energy of coconuts while building sustainable partnerships that benefit farmers, communities, and our planet. We believe that the best nutrition comes straight from nature - no processing required.',
  highlight: 'From Tree to You, Naturally Pure'
};