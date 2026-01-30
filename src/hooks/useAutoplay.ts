import { useEffect, useRef } from 'react';

interface UseAutoplayOptions {
  isActive: boolean;
  isPaused: boolean;
  delay: number;
  onNext: () => void;
}

export const useAutoplay = ({ isActive, isPaused, delay, onNext }: UseAutoplayOptions) => {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = window.setInterval(() => {
      onNext();
    }, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isActive, isPaused, delay, onNext]);

  return intervalRef;
};