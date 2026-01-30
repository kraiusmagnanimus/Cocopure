export * from './constants';
export * from './animations';

export const openFacebookPage = () => {
  window.open('https://www.facebook.com/hellococopure', '_blank');
};

export const openInstagramPage = () => {
  window.open('https://www.instagram.com/hellococopure/#', '_blank');
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const generatePlaceholderImage = (width: number, height: number, text?: string): string => {
  const baseUrl = 'https://placehold.co';
  const dimensions = `${width}x${height}`;
  return text ? `${baseUrl}/${dimensions}?text=${encodeURIComponent(text)}` : `${baseUrl}/${dimensions}`;
};