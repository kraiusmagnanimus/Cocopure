import { useEffect, useRef, useState, useCallback } from 'react';

// Interface for timeline animation state
interface TimelineAnimationState {
  visibleItems: Set<string>;
  activeItem: string | null;
  progressPercentage: number;
}

// Interface for timeline item intersection data
interface TimelineItemData {
  id: string;
  element: HTMLElement;
  isVisible: boolean;
  intersectionRatio: number;
}

// Custom hook for timeline animations
export const useTimelineAnimation = (itemCount: number) => {
  // State for animation control
  const [animationState, setAnimationState] = useState<TimelineAnimationState>({
    visibleItems: new Set(),
    activeItem: null,
    progressPercentage: 0
  });

  // Refs for intersection observer
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);

  // Create intersection observer
  const createObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const itemData: TimelineItemData[] = [];
        
        entries.forEach((entry) => {
          const itemId = entry.target.getAttribute('data-timeline-id');
          if (itemId) {
            itemData.push({
              id: itemId,
              element: entry.target as HTMLElement,
              isVisible: entry.isIntersecting,
              intersectionRatio: entry.intersectionRatio
            });
          }
        });

        // Update animation state based on intersection data
        setAnimationState(prev => {
          const newVisibleItems = new Set(prev.visibleItems);
          let newActiveItem = prev.activeItem;
          let maxRatio = 0;

          itemData.forEach(({ id, isVisible, intersectionRatio }) => {
            if (isVisible) {
              newVisibleItems.add(id);
              if (intersectionRatio > maxRatio) {
                maxRatio = intersectionRatio;
                newActiveItem = id;
              }
            }
          });

          // Calculate progress percentage based on visible items
          const progressPercentage = Math.round((newVisibleItems.size / itemCount) * 100);

          return {
            visibleItems: newVisibleItems,
            activeItem: newActiveItem,
            progressPercentage
          };
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9]
      }
    );
  }, [itemCount]);

  // Register timeline item for observation
  const registerItem = useCallback((id: string, element: HTMLElement) => {
    itemRefs.current.set(id, element);
    element.setAttribute('data-timeline-id', id);
    
    if (observerRef.current) {
      observerRef.current.observe(element);
    }
  }, []);

  // Unregister timeline item
  const unregisterItem = useCallback((id: string) => {
    const element = itemRefs.current.get(id);
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
      itemRefs.current.delete(id);
    }
  }, []);

  // Get animation class for timeline item
  const getItemAnimationClass = useCallback((itemId: string, index: number) => {
    const isVisible = animationState.visibleItems.has(itemId);
    const isActive = animationState.activeItem === itemId;
    
    const baseClasses = [
      'transition-all duration-700 ease-out',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ];

    if (isActive) {
      baseClasses.push('scale-105');
    }

    // Add stagger delay based on index
    const staggerDelay = index * 100;
    baseClasses.push(`delay-[${staggerDelay}ms]`);

    return baseClasses.join(' ');
  }, [animationState]);

  // Get progress line style
  const getProgressLineStyle = useCallback(() => {
    const progress = animationState.progressPercentage;
    return {
      height: `${progress}%`,
      transition: 'height 0.5s ease-out'
    };
  }, [animationState.progressPercentage]);

  // Scroll to timeline item
  const scrollToItem = useCallback((itemId: string) => {
    const element = itemRefs.current.get(itemId);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }, []);

  // Check if item is visible
  const isItemVisible = useCallback((itemId: string) => {
    return animationState.visibleItems.has(itemId);
  }, [animationState.visibleItems]);

  // Check if item is active
  const isItemActive = useCallback((itemId: string) => {
    return animationState.activeItem === itemId;
  }, [animationState.activeItem]);

  // Initialize intersection observer
  useEffect(() => {
    createObserver();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [createObserver]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      itemRefs.current.clear();
    };
  }, []);

  return {
    // State
    visibleItems: animationState.visibleItems,
    activeItem: animationState.activeItem,
    progressPercentage: animationState.progressPercentage,
    
    // Refs
    containerRef,
    
    // Functions
    registerItem,
    unregisterItem,
    getItemAnimationClass,
    getProgressLineStyle,
    scrollToItem,
    isItemVisible,
    isItemActive,
    
    // Statistics
    totalItems: itemCount,
    visibleItemsCount: animationState.visibleItems.size
  };
};