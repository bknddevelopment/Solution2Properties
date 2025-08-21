'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MobileOptimizedProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileOptimized({ children, className }: MobileOptimizedProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={cn(
      'w-full',
      isMobile && 'mobile-optimized',
      className
    )}>
      {children}
    </div>
  );
}

// Mobile-specific utility classes
export const mobileClasses = {
  padding: 'px-4 sm:px-6 lg:px-8',
  maxWidth: 'max-w-7xl mx-auto',
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  stack: 'flex flex-col sm:flex-row',
  text: {
    hero: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
    title: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    subtitle: 'text-xl sm:text-2xl md:text-3xl',
    body: 'text-base sm:text-lg md:text-xl',
  },
  spacing: {
    section: 'py-16 sm:py-20 md:py-24',
    element: 'mb-8 sm:mb-12 md:mb-16',
  },
};

// Touch-friendly button sizes
export const touchSizes = {
  button: 'min-h-[44px] px-6 py-3',
  input: 'min-h-[44px] px-4 py-3',
  link: 'p-2 -m-2', // Increases touch target without affecting layout
};