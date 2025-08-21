'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, MessageSquare, Sparkles, TrendingUp, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export function CTASection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 gradient-premium">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark opacity-95" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm text-gold-light px-6 py-3 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Limited Time: Get 5% Above Market Value</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Home Sold in <span className="text-gradient">7 Days</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Choose the stress-free way to sell your home for top dollar. 
            We've helped hundreds of homeowners across North Carolina.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="relative"
            >
              {/* Pulsing Glow Effect */}
              <div className="absolute inset-0 bg-gold/30 blur-xl rounded-full animate-pulse-slow" />
              
              <Button 
                asChild
                size="lg"
                className="relative group bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy-dark text-xl px-12 py-7 rounded-full shadow-gold hover-glow font-bold transform transition-all duration-300 hover:scale-105"
              >
                <Link href="/get-offer">
                  <Sparkles className="h-5 w-5 mr-2 animate-pulse" />
                  Get Offer Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="h-px w-16 bg-white/30" />
              <span className="text-gray-300">or</span>
              <div className="h-px w-16 bg-white/30" />
            </motion.div>
            
            <motion.a
              href="tel:+12522580913"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 rounded-full transition-all duration-300"
            >
              <div className="bg-gold/20 p-3 rounded-full group-hover:bg-gold/30 transition-colors">
                <Phone className="h-6 w-6 text-gold animate-pulse" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-300">Call Now</div>
                <div className="text-xl font-bold text-white">(252) 258-0913</div>
              </div>
            </motion.a>
          </div>
          

          {/* Premium Trust Indicators */}
          <div ref={ref} className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-gold mb-3 mx-auto" />
                <div className="text-4xl font-bold text-white mb-2">
                  {inView && <CountUp end={500} duration={2} />}+
                </div>
                <div className="text-gray-300">Happy Sellers</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Clock className="h-8 w-8 text-gold mb-3 mx-auto" />
                <div className="text-4xl font-bold text-white mb-2">
                  {inView && <CountUp end={24} duration={2} />}hrs
                </div>
                <div className="text-gray-300">Guaranteed Offer</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Shield className="h-8 w-8 text-gold mb-3 mx-auto" />
                <div className="text-4xl font-bold text-white mb-2">A+</div>
                <div className="text-gray-300">BBB Rated</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Sparkles className="h-8 w-8 text-gold mb-3 mx-auto" />
                <div className="text-4xl font-bold text-white mb-2">
                  {inView && <CountUp end={98} duration={2} />}%
                </div>
                <div className="text-gray-300">Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <MessageSquare className="h-5 w-5 text-gold" />
              <p className="text-sm">
                Questions? <Link href="/contact" className="text-gold hover:text-gold-light underline transition-colors">Contact us</Link> anytime
              </p>
            </div>
            
            {/* Security Badge */}
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>No Spam Guarantee</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}