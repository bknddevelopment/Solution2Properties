'use client';

import { Shield, Award, Phone, DollarSign } from 'lucide-react';

export function TrustBar() {
  return (
    <div className="bg-navy-dark text-white py-2 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          {/* Left side - credentials */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-gold" />
              <span>Licensed RE Broker #123456</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gold" />
              <span>BBB A+ Rated</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-gold" />
              <span className="font-semibold">$150M+ Cash Deployed</span>
            </div>
          </div>
          
          {/* Right side - phone */}
          <a 
            href="tel:+12522580913" 
            className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span>(252) 258-0913</span>
            <span className="hidden lg:inline text-white/80 font-normal">• Speak to an Expert</span>
          </a>
        </div>
      </div>
    </div>
  );
}