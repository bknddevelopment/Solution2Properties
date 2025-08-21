'use client';

import { Shield, Award, Clock, DollarSign, Users, CheckCircle } from 'lucide-react';

interface TrustSignal {
  icon: any;
  value: string | number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface TrustSignalsBarProps {
  variant?: 'default' | 'compact' | 'subtle';
  className?: string;
}

export function TrustSignalsBar({ variant = 'default', className = '' }: TrustSignalsBarProps) {
  const trustSignals: TrustSignal[] = [
    {
      icon: Shield,
      value: 'A+',
      label: 'BBB Rating',
    },
    {
      icon: Users,
      value: '15,000',
      label: 'Happy Customers',
      suffix: '+',
    },
    {
      icon: DollarSign,
      value: '150',
      label: 'Cash Deployed',
      prefix: '$',
      suffix: 'M+',
    },
    {
      icon: Clock,
      value: '7-30',
      label: 'Days to Close',
    },
    {
      icon: Award,
      value: '15',
      label: 'Years Experience',
      suffix: '+',
    },
  ];

  const variants = {
    default: 'bg-gray-50 border-y border-gray-200',
    compact: 'bg-slate text-white',
    subtle: 'bg-white border-b border-gray-100',
  };

  const containerClass = `${variants[variant]} ${className}`;

  return (
    <div className={`py-8 ${containerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="text-center"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-10 h-10 mb-2 rounded-full ${variant === 'compact' ? 'bg-gold/20' : 'bg-gold/10'}`}>
                <signal.icon className={`w-5 h-5 ${variant === 'compact' ? 'text-gold' : 'text-gold-dark'}`} />
              </div>
              
              {/* Value */}
              <div className={`text-xl font-bold mb-1 font-serif ${variant === 'compact' ? 'text-white' : 'text-navy'}`}>
                {signal.prefix}
                {signal.value}
                {signal.suffix}
              </div>
              
              {/* Label */}
              <div className={`text-xs ${variant === 'compact' ? 'text-gray-300' : 'text-gray-600'}`}>
                {signal.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline Trust Signals for Headers/Footers
export function InlineTrustSignals({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 text-sm ${className}`}>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-gold" />
        <span className="text-slate">Licensed & Insured</span>
      </div>
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-gold" />
        <span className="text-slate">BBB A+ Rated</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-gold" />
        <span className="text-slate">24hr Offers</span>
      </div>
    </div>
  );
}

// Simple Trust Badge
export function FloatingTrustBadge() {
  return (
    <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
      <div className="bg-white rounded-lg shadow-professional p-4 border border-gold/20">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-gold" />
          <div>
            <div className="font-semibold text-navy">Verified Company</div>
            <div className="text-xs text-gray-600">BBB A+ • Licensed • Insured</div>
          </div>
        </div>
      </div>
    </div>
  );
}