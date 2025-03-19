
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const FadeIn = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 700,
  threshold = 0.1,
  once = true,
}: FadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('opacity-100');
              
              if (direction === 'up') {
                element.classList.remove('translate-y-8');
              } else if (direction === 'down') {
                element.classList.remove('-translate-y-8');
              } else if (direction === 'left') {
                element.classList.remove('translate-x-8');
              } else if (direction === 'right') {
                element.classList.remove('-translate-x-8');
              } else {
                element.classList.remove('scale-95');
              }
            }, delay);
            
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            element.classList.remove('opacity-100');
            
            if (direction === 'up') {
              element.classList.add('translate-y-8');
            } else if (direction === 'down') {
              element.classList.add('-translate-y-8');
            } else if (direction === 'left') {
              element.classList.add('translate-x-8');
            } else if (direction === 'right') {
              element.classList.add('-translate-x-8');
            } else {
              element.classList.add('scale-95');
            }
          }
        });
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, direction, once, threshold]);
  
  const getInitialClasses = () => {
    let classes = 'opacity-0 transition-all';
    
    if (direction === 'up') {
      classes += ' translate-y-8';
    } else if (direction === 'down') {
      classes += ' -translate-y-8';
    } else if (direction === 'left') {
      classes += ' translate-x-8';
    } else if (direction === 'right') {
      classes += ' -translate-x-8';
    } else {
      classes += ' scale-95';
    }
    
    return classes;
  };
  
  return (
    <div
      ref={elementRef}
      className={cn(
        getInitialClasses(),
        `duration-${duration}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeIn;
