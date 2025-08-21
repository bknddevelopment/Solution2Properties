'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/Logo';
import { COMPANY_INFO } from '@/lib/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/solutions', label: 'Our Solutions' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white shadow-professional' 
        : 'bg-white border-b border-gray-100'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo size="sm" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate font-medium hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Phone Number */}
            <a
              href={`tel:+12522580913`}
              className="flex items-center gap-2 text-slate font-semibold hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            
            <Button 
              asChild
              className="btn-primary"
            >
              <Link href="/get-offer">
                Get Offer
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-slate font-medium hover:bg-gray-50 hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Phone Number in Mobile Menu */}
              <a
                href={`tel:+12522580913`}
                className="block py-3 px-4 text-slate font-semibold hover:bg-gray-50 hover:text-gold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold" />
                  {COMPANY_INFO.phone}
                </span>
              </a>
              
              {/* CTA Button in Mobile Menu */}
              <div className="px-4 pt-2">
                <Button 
                  asChild
                  className="w-full btn-primary"
                >
                  <Link href="/get-offer" onClick={() => setIsMenuOpen(false)}>
                    Get Offer
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}