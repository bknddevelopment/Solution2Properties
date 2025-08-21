'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TestimonialCard } from '@/components/ui/custom/TestimonialCard';
import { CTAButton } from '@/components/ui/custom/CTAButton';
import { Testimonial } from '@/types';
import { Star, Award, Users, Calendar, Sparkles } from 'lucide-react';
import CountUp from 'react-countup';

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Charlotte, NC',
    rating: 5,
    text: 'Solution 2 Properties made selling my inherited home so easy. They handled everything and closed in just 3 weeks. The offer was fair and the process was completely stress-free.',
    saleDate: 'March 2024',
    saleAmount: 285000,
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    location: 'Raleigh, NC',
    rating: 5,
    text: 'I needed to sell quickly due to a job relocation. These guys came through with a cash offer in 24 hours and we closed on my timeline. Highly recommend!',
    saleDate: 'February 2024',
    saleAmount: 195000,
  },
  {
    id: '3',
    name: 'Jennifer Chen',
    location: 'Durham, NC',
    rating: 5,
    text: 'After trying to sell with a realtor for 6 months, I called Solution 2 Properties. They bought my house as-is and saved me thousands in repairs and fees.',
    saleDate: 'January 2024',
    saleAmount: 340000,
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Greensboro, NC',
    rating: 5,
    text: 'Professional, honest, and fast. They explained everything clearly and followed through on every promise. Best decision I made was calling them.',
    saleDate: 'December 2023',
    saleAmount: 225000,
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    location: 'Winston-Salem, NC',
    rating: 5,
    text: 'I was facing foreclosure and didn\'t know what to do. Solution 2 Properties helped me avoid foreclosure and get a fresh start. Forever grateful!',
    saleDate: 'November 2023',
    saleAmount: 165000,
  },
  {
    id: '6',
    name: 'Robert Kim',
    location: 'Cary, NC',
    rating: 5,
    text: 'Sold my rental property to them when my tenant moved out. No need to find new tenants or make repairs. Quick and easy transaction.',
    saleDate: 'October 2023',
    saleAmount: 275000,
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">500+ 5-Star Reviews</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Real Stories from <span className="text-gradient">Real Sellers</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of North Carolina homeowners who discovered the stress-free way to sell their homes for top dollar
          </p>
        </motion.div>

        {/* Premium Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>

        {/* Premium Stats Section */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-white shadow-premium rounded-2xl p-6 hover:shadow-premium-lg transition-shadow duration-300">
              <Users className="h-8 w-8 text-gold mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent mb-2">
                {inView && <CountUp end={500} duration={2.5} />}+
              </div>
              <div className="text-gray-600 font-medium">Happy Sellers</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-white shadow-premium rounded-2xl p-6 hover:shadow-premium-lg transition-shadow duration-300">
              <Star className="h-8 w-8 text-gold mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent mb-2">
                {inView && <CountUp end={4.9} decimals={1} duration={2.5} />}★
              </div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-white shadow-premium rounded-2xl p-6 hover:shadow-premium-lg transition-shadow duration-300">
              <Calendar className="h-8 w-8 text-gold mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent mb-2">
                {inView && <CountUp end={7} duration={2.5} />}-{inView && <CountUp end={30} duration={2.5} />}
              </div>
              <div className="text-gray-600 font-medium">Days to Close</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white shadow-premium rounded-2xl p-6 hover:shadow-premium-lg transition-shadow duration-300">
              <Award className="h-8 w-8 text-gold mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent mb-2">
                {inView && <CountUp end={98} duration={2.5} />}%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-navy to-navy-light rounded-3xl p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative z-10">
              <Sparkles className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join <span className="text-gradient">500+ Happy Sellers</span>?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get your guaranteed cash offer in 24 hours or less. No obligations, no hidden fees.
              </p>
              <CTAButton 
                href="/get-offer" 
                size="lg"
                className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy-dark px-10 py-4 text-lg font-bold rounded-full shadow-gold hover-glow"
              >
                Get Offer Now
              </CTAButton>
              
              <div className="flex items-center justify-center gap-8 mt-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold" />
                  <span>A+ BBB Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-gold" />
                  <span>5.0 Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}