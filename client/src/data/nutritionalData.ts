export interface NutritionalBenefit {
  name: string;
  value: number;
  unit: string;
  dailyValue: number;
  description: string;
  icon: string;
}

export const waterBenefits: NutritionalBenefit[] = [
  {
    name: 'Potassium',
    value: 470,
    unit: 'mg',
    dailyValue: 10,
    description: 'Essential for heart health and muscle function',
    icon: '💖'
  },
  {
    name: 'Natural Electrolytes',
    value: 100,
    unit: '%',
    dailyValue: 100,
    description: 'Perfect balance for optimal hydration',
    icon: '⚡'
  },
  {
    name: 'Calories',
    value: 45,
    unit: 'cal',
    dailyValue: 2,
    description: 'Low-calorie natural hydration',
    icon: '🔥'
  },
  {
    name: 'Sugar',
    value: 6,
    unit: 'g',
    dailyValue: 7,
    description: 'Natural coconut sugars only',
    icon: '🍯'
  }
];

export const bitesBenefits: NutritionalBenefit[] = [
  {
    name: 'Healthy Fats',
    value: 12,
    unit: 'g',
    dailyValue: 18,
    description: 'MCTs for quick energy and brain health',
    icon: '🧠'
  },
  {
    name: 'Fiber',
    value: 4,
    unit: 'g',
    dailyValue: 16,
    description: 'Supports digestive health',
    icon: '🌿'
  },
  {
    name: 'Protein',
    value: 3,
    unit: 'g',
    dailyValue: 6,
    description: 'Plant-based protein for muscle support',
    icon: '💪'
  },
  {
    name: 'Energy',
    value: 140,
    unit: 'cal',
    dailyValue: 7,
    description: 'Sustained energy from natural sources',
    icon: '⚡'
  }
];