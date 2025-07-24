import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: AnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    triggerOnce = true,
    delay = 0 
  } = options;
  
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView && !hasAnimated) {
      if (delay > 0) {
        timeoutRef.current = window.setTimeout(() => {
          setHasAnimated(true);
        }, delay);
      } else {
        setHasAnimated(true);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inView, delay, hasAnimated]);

  return { ref, inView: hasAnimated };
};