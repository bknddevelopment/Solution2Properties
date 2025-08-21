'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Home, Clock, Shield, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const benefits = [
    { text: 'No Repairs Needed', icon: '🏚️' },
    { text: 'No Realtor Fees', icon: '💰' },
    { text: 'Close in 7-30 Days', icon: '⚡' },
    { text: 'Fair Cash Offer', icon: '🤝' },
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'Houses Bought' },
    { value: 24, suffix: 'hrs', label: 'Average Offer Time' },
    { value: 98, suffix: '%', label: 'Customer Satisfaction' },
    { value: 15, suffix: 'M+', label: 'Cash Deployed', prefix: '$' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark opacity-95" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Premium Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm text-gold-light px-4 py-2 rounded-full mb-6"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Licensed & Bonded North Carolina Buyer</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Sell Your House
              <span className="block text-gradient mt-2">For Top Dollar</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-gray-200">In 7 Days or Less</span>
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              North Carolina's premier cash home buyer. We deliver guaranteed offers within 24 hours and close on your timeline — with zero fees, zero repairs, and complete transparency.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <span className="font-medium text-white">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="group relative bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy-dark text-lg px-10 py-6 rounded-full shadow-gold hover-glow font-bold overflow-hidden"
                >
                  <Link href="/get-offer">
                    <span className="relative z-10 flex items-center">
                      Get Offer
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
              >
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-6 rounded-full font-semibold"
                >
                  <Link href="/how-it-works">
                    See How It Works
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10 flex items-center gap-6 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-sm">BBB A+ Rated</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:pl-12"
          >
            {/* Premium Stats Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold-light/20 blur-3xl" />
              
              {/* Stats Card */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-premium-lg"
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-gold to-gold-dark text-navy-dark px-6 py-3 rounded-full font-bold shadow-gold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Instant Cash Offer</span>
                  </div>
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-8 text-center mt-4">Our Track Record</h3>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6" ref={ref}>
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-gold mb-2">
                        {inView && (
                          <>
                            {stat.prefix}
                            <CountUp
                              end={stat.value}
                              duration={2.5}
                              separator=","
                            />
                            {stat.suffix}
                          </>
                        )}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald to-emerald-dark rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">No Hidden Fees</div>
                    <div className="text-sm text-gray-300">100% Transparent</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mt-20 py-8 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              <span>Licensed Cash Buyer</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              <span>A+ BBB Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-gold" />
              <span>500+ Homes Purchased</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold" />
              <span>7-Day Closing Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}