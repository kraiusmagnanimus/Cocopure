import { useState, useEffect, useRef } from 'react';

interface UseProductRotationOptions {
  totalImages: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

export const useProductRotation = ({
  totalImages,
  autoRotate = false,
  rotationSpeed = 3000
}: UseProductRotationOptions) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(autoRotate);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startRotation = () => setIsRotating(true);
  const stopRotation = () => setIsRotating(false);
  const toggleRotation = () => setIsRotating(!isRotating);

  const goToImage = (index: number) => {
    setCurrentImageIndex(Math.max(0, Math.min(index, totalImages - 1)));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleMouseDrag = (deltaX: number) => {
    const sensitivity = 5;
    const imageStep = Math.floor(Math.abs(deltaX) / sensitivity);
    
    if (imageStep > 0) {
      if (deltaX > 0) {
        setCurrentImageIndex((prev) => Math.min(prev + imageStep, totalImages - 1));
      } else {
        setCurrentImageIndex((prev) => Math.max(prev - imageStep, 0));
      }
    }
  };

  const handleScrollRotation = (scrollPercent: number) => {
    const imageIndex = Math.floor(scrollPercent * totalImages);
    setCurrentImageIndex(Math.max(0, Math.min(imageIndex, totalImages - 1)));
  };

  // Auto rotation effect
  useEffect(() => {
    if (isRotating && !isDragging) {
      intervalRef.current = window.setInterval(nextImage, rotationSpeed);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRotating, isDragging, rotationSpeed]);

  return {
    currentImageIndex,
    isRotating,
    isDragging,
    setIsDragging,
    startRotation,
    stopRotation,
    toggleRotation,
    goToImage,
    nextImage,
    prevImage,
    handleMouseDrag,
    handleScrollRotation,
  };
};