'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CTAButton } from '@/components/ui/custom/CTAButton';
import { CheckCircle, Home, Clock, DollarSign } from 'lucide-react';

export function Hero() {
  const [address, setAddress] = useState('');

  const handleQuickOffer = () => {
    if (address.trim()) {
      // Navigate to offer form with pre-filled address
      window.location.href = `/get-offer?address=${encodeURIComponent(address)}`;
    } else {
      window.location.href = '/get-offer';
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#2B3A67] via-[#364779] to-[#4A90E2] text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2 text-[#27AE60]" />
              Trusted by 500+ Homeowners
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Sell Your House{' '}
              <span className="text-[#4A90E2]">Fast</span>{' '}
              for <span className="text-[#27AE60]">Cash</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get a fair cash offer in 24 hours. No repairs, no fees, no showings. 
              We buy houses in any condition, on your timeline.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <Clock className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <p className="text-2xl font-bold">24hrs</p>
                <p className="text-sm text-gray-300">Fast Offers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <Home className="h-6 w-6 text-[#27AE60]" />
                </div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-gray-300">Homes Bought</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <DollarSign className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <p className="text-2xl font-bold">$0</p>
                <p className="text-sm text-gray-300">Fees or Costs</p>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden space-y-4">
              <CTAButton href="/get-offer" size="lg" className="w-full">
                Get Offer
              </CTAButton>
              <CTAButton 
                variant="phone" 
                href="tel:+12522580913" 
                size="lg" 
                className="w-full"
              >
                Call Now: (252) 258-0913
              </CTAButton>
            </div>
          </div>

          {/* Form */}
          <div className="lg:animate-fade-in-up lg:animation-delay-200">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#2B3A67] mb-2">
                  Get Your Offer Now
                </h2>
                <p className="text-gray-600">
                  Enter your address to get started
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address
                  </label>
                  <Input
                    type="text"
                    placeholder="123 Main St, Your City, ST"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>

                <Button
                  onClick={handleQuickOffer}
                  className="w-full bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold h-12 text-lg"
                >
                  Get Offer
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Or call us directly:</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#27AE60] text-[#27AE60] hover:bg-[#27AE60] hover:text-white font-semibold"
                  >
                    <a href="tel:+12522580913">(252) 258-0913</a>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#27AE60]" />
                    <span className="text-xs text-gray-600">No Obligation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#27AE60]" />
                    <span className="text-xs text-gray-600">Fair Offers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#27AE60]" />
                    <span className="text-xs text-gray-600">Fast Closing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}