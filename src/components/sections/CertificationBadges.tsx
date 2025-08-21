'use client';

import { Shield, Award, Lock, CheckCircle, TrendingUp, Users } from 'lucide-react';

export function CertificationBadges() {
  const certifications = [
    {
      icon: Shield,
      name: 'BBB Accredited',
      rating: 'A+ Rating',
      description: 'Better Business Bureau'
    },
    {
      icon: Lock,
      name: 'SSL Secured',
      rating: '256-bit',
      description: 'Your data is protected'
    },
    {
      icon: CheckCircle,
      name: 'Verified Business',
      rating: 'Licensed',
      description: 'NC State Verified'
    },
    {
      icon: Award,
      name: 'Licensed Broker',
      rating: '#123456',
      description: 'NC Real Estate'
    },
    {
      icon: TrendingUp,
      name: '$150M+ Deployed',
      rating: '15 Years',
      description: 'Cash Investments'
    },
    {
      icon: Users,
      name: '15,000+ Helped',
      rating: 'Since 2009',
      description: 'Happy Homeowners'
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif text-navy mb-4">
            Credentials & Certifications
          </h3>
          <p className="text-gray-600">
            Your trust and security are our top priorities
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="text-center group hover:transform hover:scale-105 transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors mb-3">
                <cert.icon className="w-8 h-8 text-gold-dark" />
              </div>
              <div className="font-semibold text-navy text-sm mb-1">
                {cert.name}
              </div>
              <div className="text-gold font-bold text-xs mb-1">
                {cert.rating}
              </div>
              <div className="text-gray-500 text-xs">
                {cert.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}