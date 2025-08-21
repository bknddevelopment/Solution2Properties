'use client';

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, TrendingUp, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const { name, location, rating, text, saleDate, saleAmount } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="relative h-full bg-white hover:shadow-premium-lg transition-all duration-300 border border-gray-100 hover:border-gold/20 overflow-hidden group">
        {/* Premium Gradient Border on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-gold/10 transition-all duration-300" />
        
        <CardContent className="relative p-8">
          {/* Quote Icon Background */}
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote className="h-20 w-20 text-gold" />
          </div>
          
          {/* Rating Stars */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" as const, stiffness: 200 }}
                >
                  <Star
                    className={`h-5 w-5 ${
                      i < rating ? 'text-gold fill-current' : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
            <Badge className="bg-emerald/10 text-emerald border-emerald/20 hover:bg-emerald/20">
              <CheckCircle className="h-3 w-3 mr-1" />
              Verified Sale
            </Badge>
          </div>
          
          {/* Testimonial Text */}
          <blockquote className="relative text-gray-700 mb-6 leading-relaxed text-lg">
            "{text}"
          </blockquote>
          
          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-navy text-lg">{name}</p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Home className="h-3 w-3" />
                {location}
              </p>
            </div>
            
            {/* Sale Info */}
            {saleAmount && (
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-gold" />
                  <span className="font-bold text-lg text-navy">
                    ${saleAmount.toLocaleString()}
                  </span>
                </div>
                {saleDate && (
                  <p className="text-xs text-gray-500">Sold {saleDate}</p>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}