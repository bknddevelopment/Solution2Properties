'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Award, CheckCircle, Phone, TrendingUp } from 'lucide-react';
import { TRUST_INDICATORS } from '@/lib/constants';
import { useInView } from 'react-intersection-observer';

const iconMap = {
  'A+ BBB Rating': { icon: Award, color: 'from-gold to-gold-dark', bgColor: 'bg-gold/10' },
  'Licensed & Bonded': { icon: Shield, color: 'from-emerald to-emerald-dark', bgColor: 'bg-emerald/10' },
  '500+ Homes Purchased': { icon: TrendingUp, color: 'from-navy to-navy-light', bgColor: 'bg-navy/10' },
  '24-Hour Response': { icon: Clock, color: 'from-gold to-gold-dark', bgColor: 'bg-gold/10' },
  'No Hidden Fees': { icon: CheckCircle, color: 'from-emerald to-emerald-dark', bgColor: 'bg-emerald/10' },
  'Fast Offers': { icon: Phone, color: 'from-navy to-navy-light', bgColor: 'bg-navy/10' },
} as const;

export function TrustBadges() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-12"
    >
      {TRUST_INDICATORS.map((indicator, index) => {
        const badgeInfo = iconMap[indicator as keyof typeof iconMap];
        const Icon = badgeInfo.icon;
        
        return (
          <motion.div
            key={indicator}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-premium border border-gray-100 hover:border-gold/30 transition-all duration-300 overflow-hidden">
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${badgeInfo.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon Container */}
              <div className={`relative ${badgeInfo.bgColor} p-4 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`h-8 w-8 bg-gradient-to-br ${badgeInfo.color} bg-clip-text text-transparent`} />
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badgeInfo.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
              </div>
              
              {/* Text */}
              <span className="relative text-sm font-semibold text-navy leading-tight group-hover:text-gold transition-colors duration-300">
                {indicator}
              </span>
              
              {/* Premium Badge Number */}
              {index === 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-gold to-gold-dark text-navy-dark text-xs font-bold px-2 py-1 rounded-full shadow-gold"
                >
                  A+
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// Compact version for smaller spaces
export function TrustBadgesCompact() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {TRUST_INDICATORS.slice(0, 3).map((indicator) => {
        const badgeInfo = iconMap[indicator as keyof typeof iconMap];
        const Icon = badgeInfo.icon;
        
        return (
          <motion.div
            key={indicator}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-100"
          >
            <Icon className="h-5 w-5 text-gold" />
            <span className="text-sm font-semibold text-navy">{indicator}</span>
          </motion.div>
        );
      })}
    </div>
  );
}