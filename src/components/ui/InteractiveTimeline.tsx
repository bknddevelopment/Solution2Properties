'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, FileText, Home, DollarSign, CheckCircle, Calendar, Clock, ArrowRight } from 'lucide-react';

interface TimelineStep {
  id: number;
  icon: any;
  title: string;
  description: string;
  duration: string;
  details: string[];
  color: string;
}

export function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: TimelineStep[] = [
    {
      id: 0,
      icon: Phone,
      title: 'Initial Contact',
      description: 'Reach out to us via phone, form, or chat',
      duration: '5 minutes',
      details: [
        'Share basic property details',
        'Discuss your timeline needs',
        'Schedule property assessment',
        'No obligations or fees'
      ],
      color: 'from-emerald to-emerald-dark',
    },
    {
      id: 1,
      icon: FileText,
      title: 'Property Analysis',
      description: 'We evaluate your property and market data',
      duration: '24 hours',
      details: [
        'Comprehensive market analysis',
        'Property condition assessment',
        'Comparable sales review',
        'Custom offer preparation'
      ],
      color: 'from-gold to-gold-dark',
    },
    {
      id: 2,
      icon: DollarSign,
      title: 'Offer',
      description: 'Receive your guaranteed offer',
      duration: '24-48 hours',
      details: [
        'No-obligation offer',
        'Clear breakdown of numbers',
        'Flexible closing options',
        'Time to review with family'
      ],
      color: 'from-navy to-navy-light',
    },
    {
      id: 3,
      icon: Home,
      title: 'Property Visit',
      description: 'Quick walkthrough to finalize details',
      duration: '30-60 minutes',
      details: [
        'Confirm property condition',
        'Address any questions',
        'Finalize offer details',
        'Sign purchase agreement'
      ],
      color: 'from-emerald to-emerald-dark',
    },
    {
      id: 4,
      icon: Calendar,
      title: 'Choose Closing Date',
      description: 'You pick the date that works for you',
      duration: 'Your choice',
      details: [
        'Close in as little as 7 days',
        'Or take up to 60 days',
        'We work around your schedule',
        'Move out when convenient'
      ],
      color: 'from-gold to-gold-dark',
    },
    {
      id: 5,
      icon: CheckCircle,
      title: 'Get Your Cash',
      description: 'Receive funds at closing',
      duration: 'Closing day',
      details: [
        'Professional title company',
        'All paperwork handled',
        'Receive certified funds',
        'Keys handed over'
      ],
      color: 'from-emerald to-emerald-dark',
    },
  ];

  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        {/* Progress Bar */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full" />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          
          {/* Step Circles */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index <= activeStep
                    ? 'bg-gradient-to-br ' + step.color + ' shadow-lg scale-110'
                    : 'bg-white border-2 border-gray-300 hover:border-gold'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <step.icon className={`w-8 h-8 ${index <= activeStep ? 'text-white' : 'text-gray-400'}`} />
                
                {/* Step Number */}
                <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  index <= activeStep
                    ? 'bg-gold text-navy-dark'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-premium rounded-3xl p-8 shadow-premium-lg"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Info */}
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${steps[activeStep].color} text-white mb-4`}>
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">{steps[activeStep].duration}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-navy mb-4">{steps[activeStep].title}</h3>
              <p className="text-xl text-gray-600 mb-6">{steps[activeStep].description}</p>
              
              <div className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Visual */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`relative w-full h-64 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center`}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {React.createElement(steps[activeStep].icon, { className: "w-32 h-32 text-white/20" })}
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg" />
              </motion.div>
              
              {/* Next Step Hint */}
              {activeStep < steps.length - 1 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="absolute -bottom-6 right-0 flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
                >
                  Next Step
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
              index === activeStep
                ? 'border-gold bg-gold/5 shadow-lg'
                : 'border-gray-200 bg-white'
            }`}
            onClick={() => setActiveStep(index)}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-navy">{step.title}</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{step.duration}</span>
                </div>
                <p className="text-sm text-gray-600">{step.description}</p>
                
                {index === activeStep && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-2"
                  >
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Step Number Badge */}
            <span className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              index <= activeStep
                ? 'bg-gold text-navy-dark'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}