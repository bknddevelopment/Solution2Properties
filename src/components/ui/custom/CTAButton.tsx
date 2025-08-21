'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Sparkles, TrendingUp, Zap, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'phone' | 'premium' | 'glass' | 'gradient';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  icon?: 'arrow' | 'phone' | 'sparkle' | 'trending' | 'zap' | 'chevron';
  animate?: boolean;
  glowEffect?: boolean;
}

export function CTAButton({ 
  variant = 'primary', 
  size = 'default',
  href,
  onClick,
  children, 
  className,
  showIcon = true,
  icon = 'arrow',
  animate = true,
  glowEffect = false
}: CTAButtonProps) {
  const baseStyles = {
    primary: "bg-gradient-to-r from-navy to-navy-light text-white shadow-premium hover:shadow-premium-lg hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-white hover:bg-gray-50 text-navy border-2 border-navy shadow-sm hover:shadow-premium hover:scale-[1.02] active:scale-[0.98]",
    phone: "bg-gradient-to-r from-emerald to-emerald-dark text-white shadow-premium hover:shadow-emerald hover:scale-[1.02] active:scale-[0.98]",
    premium: "bg-gradient-to-r from-gold to-gold-dark text-navy-dark shadow-gold hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] font-bold",
    glass: "glass-premium text-white hover:shadow-premium hover:scale-[1.02] active:scale-[0.98] border border-white/20",
    gradient: "bg-gradient-to-r from-gold via-gold-light to-gold text-navy-dark shadow-gold hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] font-bold relative overflow-hidden"
  };

  const icons = {
    arrow: ArrowRight,
    phone: Phone,
    sparkle: Sparkles,
    trending: TrendingUp,
    zap: Zap,
    chevron: ChevronRight
  };

  const IconComponent = icons[icon];

  const buttonContent = (
    <motion.span
      className="relative z-10 inline-flex items-center justify-center gap-2"
      whileHover={animate ? { x: showIcon ? -2 : 0 } : {}}
    >
      {children}
      {showIcon && (
        <motion.span
          whileHover={animate ? { x: 4 } : {}}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <IconComponent className="h-5 w-5" />
        </motion.span>
      )}
    </motion.span>
  );

  const buttonClass = cn(
    baseStyles[variant],
    "relative overflow-hidden transition-all duration-300 rounded-lg font-semibold",
    {
      'hover-glow': glowEffect,
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700': variant === 'gradient'
    },
    className
  );

  if (href) {
    return (
      <Button asChild variant="ghost" size={size} className={buttonClass}>
        <Link href={href}>
          {buttonContent}
        </Link>
      </Button>
    );
  }

  return (
    <Button 
      onClick={onClick} 
      variant="ghost"
      size={size} 
      className={buttonClass}
    >
      {buttonContent}
    </Button>
  );
}