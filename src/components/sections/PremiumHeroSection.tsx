'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Award, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InstantValuationWidget } from '@/components/ui/InstantValuationWidget';

export function PremiumHeroSection() {
  const trustPoints = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Award, text: 'BBB A+ Rated' },
    { icon: Clock, text: '24hr Offers' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-700 font-medium text-sm">
                Trusted by 500+ North Carolina Homeowners
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              We Buy Houses
              <span className="text-blue-600"> Fast</span> in
              <br />
              North Carolina
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Get a guaranteed cash offer in 24 hours or less. 
              No repairs, no fees, no waiting months to sell.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {trustPoints.map((point) => (
                <div
                  key={point.text}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <point.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">{point.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="/get-offer">
                  <span className="flex items-center">
                    Get Offer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-gray-50"
              >
                <a href="tel:+12522580913">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>(252) 258-0913</span>
                </a>
              </Button>
            </div>
            
            {/* Trust Text */}
            <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>100% Safe & Secure • No Obligations</span>
            </p>
          </div>

          {/* Right Column - Valuation Widget */}
          <div className="lg:pl-8">
            <InstantValuationWidget />
          </div>
        </div>
      </div>
    </section>
  );
}