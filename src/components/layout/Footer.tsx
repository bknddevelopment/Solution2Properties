'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Shield, Award, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { CertificationBadgesInline } from '@/components/ui/custom/CertificationBadges';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About Us' },
    { href: '/get-offer', label: 'Get Offer' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceAreas = [
    'Charlotte', 'Raleigh', 'Durham', 'Greensboro',
    'Winston-Salem', 'Cary', 'Wilmington', 'Asheville'
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-navy-dark to-navy text-white overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Trust Banner */}
      <div className="relative bg-gold/10 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <CertificationBadgesInline />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Logo size="lg" />
            <p className="text-gray-300 mb-8 mt-6 text-lg leading-relaxed max-w-md">
              North Carolina's premier cash home buyer. We've helped over 500 families sell their homes quickly and hassle-free.
            </p>
            
            {/* Premium Contact Info */}
            <div className="space-y-4">
              <motion.a 
                href="tel:+12522580913" 
                className="group flex items-center text-gray-300 hover:text-gold transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gold/20 p-2 rounded-lg mr-4 group-hover:bg-gold/30 transition-colors">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-white">(252) 258-0913</div>
                  <div className="text-sm">Available 7 Days a Week</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="mailto:info@solution2properties.com" 
                className="group flex items-center text-gray-300 hover:text-gold transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gold/20 p-2 rounded-lg mr-4 group-hover:bg-gold/30 transition-colors">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-white">info@solution2properties.com</div>
                  <div className="text-sm">24-Hour Response Time</div>
                </div>
              </motion.a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="bg-white/10 hover:bg-gold/20 p-3 rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-gold transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-gold/50 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gold">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center text-gray-300">
                  <MapPin className="h-3 w-3 mr-1 text-gold/50" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
            <Link 
              href="/service-areas"
              className="inline-flex items-center text-gold hover:text-gold-light mt-4 text-sm font-semibold transition-colors"
            >
              View All Areas
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.div>
          
          {/* Premium CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-gold/20 to-gold/10 backdrop-blur-sm rounded-2xl p-6 border border-gold/30">
              <h3 className="text-xl font-bold mb-3 text-white">Ready to Sell?</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Get your no-obligation cash offer in less than 24 hours.
              </p>
              <Link
                href="/get-offer"
                className="block w-full text-center bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy-dark px-6 py-3 rounded-full font-bold shadow-gold hover-glow transition-all duration-300"
              >
                Get Offer
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Premium Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Solution2Properties LLC. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {legalLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="h-4 w-4 text-gold" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="h-4 w-4 text-gold" />
                <span className="text-sm">BBB A+ Rated</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}