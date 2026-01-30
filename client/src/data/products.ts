export interface Product {
  id: string;
  name: string;
  category: 'water' | 'bites';
  price: number;
  image: string;
  images360?: string[];
  description: string;
  longDescription: string;
  benefits: string[];
  features: string[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sugar: number;
    sodium: number;
    potassium: number;
  };
  variants?: {
    size?: string[];
    flavor?: string[];
  };
}

export const products: Product[] = [
  {
    id: 'cocow-blue-lemonade',
    name: 'Coco Water Blue Lemonade',
    category: 'water',
    price: 3.99,
    image: './assets/CocoW Blue.png',
    description: 'Refreshing coconut water blended with blue lemonade flavor.',
    longDescription: 'Thirsty for something excitingly delicious? Our refreshing coconut water is now blended with good old-fashioned Blue Lemonade to give you a uniquely new experience in quenching your thirst. Containing essential electrolytes such as potassium, sodium, magnesium and calcium, enjoy the perfect marriage of flavors of Cocopure – more than your average coconut water.',
    benefits: [
      'As much potassium as 1 banana',
      'Not from concentrate',
      'Fat free',
      'Contains electrolytes such as potassium, sodium, magnesium and calcium'
    ],
    features: [
      'Blue lemonade flavoring',
      'Natural electrolytes',
      'Premium coconut water',
      'Unique flavor experience'
    ],
    nutritionalInfo: {
      calories: 50,
      protein: 1,
      carbs: 12,
      fat: 0,
      fiber: 0,
      sugar: 10,
      sodium: 35,
      potassium: 480,
    }
  },
  {
    id: 'cocow-apple-green-tea',
    name: 'Coco Water Apple Green Tea',
    category: 'water',
    price: 3.99,
    image: './assets/CocoW Apple.png',
    description: 'Coconut water with apple and green tea blend plus Vitamin C.',
    longDescription: 'How do you like them Apples? Now imagine it blended with the flavorful goodness of Green Tea. Now mix all this with our refreshing coconut water and out comes a uniquely new experience in quenching your thirst. Containing essential electrolytes such as Potassium, Sodium, Magnesium and Calcium PLUS Vitamin C - enjoy the perfect marriage of flavors of COCOPURE - more than your average coconut water.',
    benefits: [
      'Contains Vitamin C',
      'Not from concentrate',
      'Fat free',
      'Contains electrolytes such as potassium, sodium, magnesium and calcium'
    ],
    features: [
      'Apple flavoring',
      'Green tea blend',
      'Vitamin C enriched',
      'Natural electrolytes'
    ],
    nutritionalInfo: {
      calories: 45,
      protein: 1,
      carbs: 11,
      fat: 0,
      fiber: 0,
      sugar: 9,
      sodium: 30,
      potassium: 470,
    }
  },
  {
    id: 'cocow-mango',
    name: 'Coco Water Mango',
    category: 'water',
    price: 3.99,
    image: './assets/CocoW Mango.png',
    description: 'Refreshing coconut water with burst of mangoes fortified with Vitamin C.',
    longDescription: 'Imagine the refreshing goodness of Coconut Water. Imagine it now with a burst of flavorful Mangoes. Quench your thirst with this unique blend containing essential electrolytes such as Potassium, Sodium, Magnesium and Calcium, plus more than enough Vitamin C to last you for the day. Enjoy the perfect marriage of flavors of COCOPURE - more than your average Coconut Water.',
    benefits: [
      '152mg of Vitamin C',
      'As much potassium as 1 banana',
      'Fat free',
      'Contains electrolytes such as potassium, sodium, magnesium and calcium'
    ],
    features: [
      'Natural mango flavoring',
      'High Vitamin C',
      'Essential electrolytes',
      'Tropical fruit blend'
    ],
    nutritionalInfo: {
      calories: 55,
      protein: 1,
      carbs: 13,
      fat: 0,
      fiber: 0,
      sugar: 12,
      sodium: 25,
      potassium: 490,
    }
  },
  {
    id: 'cocow-pineapple',
    name: 'Coco Water Pineapple',
    category: 'water',
    price: 3.99,
    image: './assets/CocoW Pine.png',
    description: 'Coconut water with delicious Pineapple fortified with Vitamin C.',
    longDescription: 'We know that an ice cold glass of pineapple juice instantly quenches your thirst on a blazing hot day. Now imagine it blended with refreshing coconut water and out comes a uniquely flavorful combination to make your mouth pucker and your spirits soar. Containing essential electrolytes such as Potassium equivalent to 2 bananas, Sodium, Magnesium and Calcium PLUS lots of Vitamin C! Enjoy the perfect marriage of flavors of Cocopure - more than your average coconut water.',
    benefits: [
      '364mg of Vitamin C',
      'As much potassium as 2 bananas',
      'Fat free',
      'Contains electrolytes such as potassium, sodium, magnesium and calcium'
    ],
    features: [
      'Natural pineapple flavoring',
      'High potassium content',
      'Lots of Vitamin C',
      'Tropical refreshment'
    ],
    nutritionalInfo: {
      calories: 60,
      protein: 1,
      carbs: 14,
      fat: 0,
      fiber: 0,
      sugar: 13,
      sodium: 35,
      potassium: 520,
    }
  },
  {
    id: 'cocob-bbq',
    name: 'Barbecue',
    category: 'bites',
    price: 5.99,
    image: './assets/CocoB BBQ.png',
    description: 'Bold barbecue flavored coconut chips with smoky, savory taste.',
    longDescription: 'Step up your snack game with a bold twist! Our Barbecue Flavored Coconut Chips are infused with the smoky, savory taste of barbecue, perfectly complementing the natural sweetness of real coconuts. Packed with medium-chain triglycerides (MCTs) and rich in fiber, these light and crispy chips offer guilt-free indulgence with no cholesterol. Whether you\'re looking to add a zesty crunch to your salads or enjoying a snack with a kick, experience the smoky, crispy revolution today!',
    benefits: [
      'High Dietary Fiber',
      'Loaded with Good Fats (MCTs)',
      '100% Real Coconut',
      'Dried Not Fried',
      'No Cholesterol',
      'Gluten Free'
    ],
    features: [
      'Real coconut base',
      'Smoky barbecue flavor',
      'Natural sweetness',
      'Zesty crunch'
    ],
    nutritionalInfo: {
      calories: 150,
      protein: 3,
      carbs: 10,
      fat: 12,
      fiber: 6,
      sugar: 4,
      sodium: 120,
      potassium: 180,
    }
  },
  {
    id: 'cocob-cheese',
    name: 'Cheese',
    category: 'bites',
    price: 6.49,
    image: './assets/CocoB Cheese.png',
    description: 'Extraordinary cheese flavored coconut chips with irresistible flavor.',
    longDescription: 'Ditch the ordinary. Grab the extraordinary! Our Cheese Flavored Coconut Chips are packed with medium-chain triglycerides (MCTs) from real coconuts. Every bite bursts with irresistible cheese flavor, creating a delightful dance with the natural sweetness of coconut. Light and crispy, with loads of fiber and no cholesterol - this will be all you need to satisfy your cravings. Whether you are elevating your snack game or enhancing your dishes, experience the cheesy, crispy revolution today!',
    benefits: [
      'High Dietary Fiber',
      'Loaded with Good Fats (MCTs)',
      '100% Real Coconut',
      'Dried Not Fried',
      'No Cholesterol',
      'Gluten Free'
    ],
    features: [
      'Real coconut base',
      'Irresistible cheese flavor',
      'Natural coconut sweetness',
      'Crispy texture'
    ],
    nutritionalInfo: {
      calories: 145,
      protein: 3,
      carbs: 9,
      fat: 12,
      fiber: 5,
      sugar: 3,
      sodium: 140,
      potassium: 170,
    }
  },
  {
    id: 'cocob-chocolate',
    name: 'Chocolate',
    category: 'bites',
    price: 6.99,
    image: './assets/CocoB Choco.png',
    description: 'Decadent chocolate flavored coconut chips for guilt-free indulgence.',
    longDescription: 'Indulge your sweet tooth with a decadent twist! Our Chocolate Flavored Coconut Chips are infused with the rich, velvety taste of chocolate, perfectly complementing the natural sweetness of real coconuts. Packed with medium-chain triglycerides (MCTs) and rich in fiber, these light and crispy chips offer a guilt-free treat with zero cholesterol. Whether you\'re looking to satisfy your chocolate fix or adding a sweet crunch to your desserts, experience the chocolatey, crispy revolution today!',
    benefits: [
      'High Dietary Fiber',
      'Loaded with Good Fats (MCTs)',
      '100% Real Coconut',
      'Dried Not Fried',
      'No Cholesterol',
      'Gluten Free'
    ],
    features: [
      'Rich, velvety chocolate taste',
      'Real coconut base',
      'Natural sweetness',
      'Sweet crunch texture'
    ],
    nutritionalInfo: {
      calories: 160,
      protein: 4,
      carbs: 12,
      fat: 13,
      fiber: 6,
      sugar: 8,
      sodium: 15,
      potassium: 180,
    }
  },
  {
    id: 'cocob-sour-cream-onion',
    name: 'Sour Cream & Onion',
    category: 'bites',
    price: 6.49,
    image: './assets/CocoB Sour.png',
    description: 'Remarkable sour cream & onion flavored coconut chips.',
    longDescription: 'Break the Routine. Savor the Remarkable! Elevate your snack game with our Sour Cream & Onion Flavored Coconut Chips. Savor the irresistible blend of tangy sour cream & onion and the natural sweetness of coconut in every crunchy bite. Packed with medium-chain triglycerides (MCTs) from real coconuts, these chips offer a guilt-free treat with loads of fiber and no cholesterol. Whether you\'re adding a crunchy twist to your salads or craving a satisfying snack, experience the creamy, crispy revolution today!',
    benefits: [
      'High Dietary Fiber',
      'Loaded with Good Fats (MCTs)',
      '100% Real Coconut',
      'Dried Not Fried',
      'No Cholesterol',
      'Gluten Free'
    ],
    features: [
      'Tangy sour cream & onion flavor',
      'Real coconut base',
      'Natural coconut sweetness',
      'Satisfying crunch'
    ],
    nutritionalInfo: {
      calories: 155,
      protein: 3,
      carbs: 11,
      fat: 12,
      fiber: 5,
      sugar: 4,
      sodium: 130,
      potassium: 175,
    }
  }
];

export const getProductsByCategory = (category: 'water' | 'bites') => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};