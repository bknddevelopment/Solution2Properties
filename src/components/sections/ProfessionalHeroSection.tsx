'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Award, Clock, Phone, CheckCircle, Home, DollarSign, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InstantValuationWidget } from '@/components/ui/InstantValuationWidget';

export function ProfessionalHeroSection() {
  const trustPoints = [
    { icon: CheckCircle, title: 'Fair Cash Offers', text: 'No lowball offers' },
    { icon: Calendar, title: 'Close in 7-30 Days', text: 'You pick the date' },
    { icon: Home, title: 'Any Condition', text: 'No repairs needed' },
    { icon: DollarSign, title: 'Zero Fees', text: 'We pay all costs' },
  ];

  const credentials = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Award, text: 'BBB A+ Rated' },
    { icon: Clock, text: '24hr Offers' },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-navy via-navy-dark to-slate-dark overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-8">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-gold font-semibold text-sm tracking-wide uppercase">
                North Carolina\'s #1 Cash Home Buyer
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-display font-serif text-white mb-6">
              We Buy Houses <span className="text-gold">Fast</span> for
              <br />
              <span className="text-gold">Cash</span> in NC
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-200 leading-relaxed mb-10 font-light">
              Get a guaranteed cash offer in 24 hours or less. 
              No repairs, no fees, no waiting months to sell.
              <strong className="text-white font-semibold block mt-2">
                Over $150M deployed to help homeowners like you.
              </strong>
            </p>

            {/* Trust Points Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-3 text-white"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{point.title}</div>
                    <div className="text-xs text-gray-300">{point.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                asChild
                size="lg"
                className="btn-primary text-lg"
              >
                <Link href="/get-offer">
                  <span className="flex items-center">
                    Get Offer Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur border-2 border-white/30 text-white hover:bg-white/20 text-lg min-h-[48px]"
              >
                <a href="tel:+12522580913">
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="font-semibold">(252) 258-0913</span>
                </a>
              </Button>
            </div>
            
            {/* Credentials Bar */}
            <div className="flex flex-wrap gap-6">
              {credentials.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <item.icon className="w-4 h-4 text-gold" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Valuation Widget */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-xl shadow-professional p-1">
              <InstantValuationWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}