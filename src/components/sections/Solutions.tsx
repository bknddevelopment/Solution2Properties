'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CTAButton } from '@/components/ui/custom/CTAButton';
import { 
  Home, 
  DollarSign, 
  Clock, 
  Handshake, 
  TrendingUp, 
  Shield, 
  Users,
  Zap,
  CheckCircle
} from 'lucide-react';

const solutions = [
  {
    id: 'cash-purchase',
    title: 'Traditional Cash Purchase',
    icon: DollarSign,
    description: 'We buy your home directly with cash, closing in as little as 7 days. No repairs, no showings, no realtor fees - just a straightforward sale that puts money in your pocket fast.',
    bestFor: 'Homeowners who need to sell quickly due to job relocation, inheritance, or financial hardship',
    benefits: [
      'Close in 7-14 days',
      'No repairs or cleaning needed',
      'No realtor commissions',
      'Guaranteed closing date'
    ],
    example: 'Sarah inherited a property that needed $40,000 in repairs. Instead of fixing it up, she sold it to us for cash and closed in 10 days, using the proceeds to pay off debts.',
    color: 'emerald'
  },
  {
    id: 'subject-to',
    title: 'Subject-To Existing Financing',
    icon: Clock,
    description: 'We take over your existing mortgage payments while you walk away from the property. This helps you avoid foreclosure and protect your credit score while getting immediate relief from payment stress.',
    bestFor: 'Homeowners behind on payments or facing foreclosure who want to protect their credit',
    benefits: [
      'Stop foreclosure immediately',
      'Protect your credit score',
      'No more mortgage stress',
      'Move on with your life'
    ],
    example: 'John was 3 months behind on payments. We took over his mortgage, caught up the payments, and he avoided foreclosure - saving his credit for future home purchases.',
    color: 'blue'
  },
  {
    id: 'seller-financing',
    title: 'Seller Financing',
    icon: TrendingUp,
    description: 'You become the bank and we pay you monthly over time. This often results in a higher total sale price and provides you with steady monthly income instead of a lump sum.',
    bestFor: 'Homeowners who want maximum sale price and can wait for full payment',
    benefits: [
      'Higher total sale price',
      'Monthly income stream',
      'Tax advantages',
      'Secured by the property'
    ],
    example: 'Maria sold her rental property to us for $180,000 with seller financing. She receives $1,200/month for 15 years - more than she was making in rent!',
    color: 'purple'
  },
  {
    id: 'novation',
    title: 'Novation',
    icon: Handshake,
    description: 'We help transfer your existing loan to a qualified buyer, completely removing you from the mortgage obligation. Perfect when you have a low interest rate that buyers want to assume.',
    bestFor: 'Homeowners with attractive mortgage rates who need to relocate or downsize',
    benefits: [
      'Completely off the loan',
      'Help buyers get your rate',
      'Smooth transition',
      'Legal and compliant'
    ],
    example: 'Tom had a 3% mortgage when rates hit 7%. Through novation, a buyer took over his loan, Tom was released from liability, and the buyer saved thousands in interest.',
    color: 'orange'
  },
  {
    id: 'short-sale',
    title: 'Short Sale',
    icon: Shield,
    description: 'When you owe more than your home is worth, we negotiate with your lender to accept less than the full balance. This helps you avoid foreclosure and move forward without the debt burden.',
    bestFor: 'Underwater homeowners who owe more than their home\'s current value',
    benefits: [
      'Avoid foreclosure',
      'Eliminate deficiency',
      'Less credit damage',
      'Fresh financial start'
    ],
    example: 'Lisa owed $250,000 on a home worth $200,000. We negotiated a short sale, the bank forgave the $50,000 difference, and Lisa avoided bankruptcy.',
    color: 'red'
  },
  {
    id: 'joint-venture',
    title: 'Joint Venture Partnership',
    icon: Users,
    description: 'We partner with you to renovate and sell your property for maximum profit. We fund all repairs and split the profits - you get more money without any upfront investment.',
    bestFor: 'Homeowners with properties that need work but have strong profit potential',
    benefits: [
      'No repair costs',
      'Share in profits',
      'Professional renovation',
      'Higher final payout'
    ],
    example: 'David\'s home needed updates to sell. We invested $30,000 in renovations, sold for $80,000 more, and David got an extra $40,000 he wouldn\'t have seen otherwise.',
    color: 'teal'
  },
  {
    id: 'forbearance',
    title: 'Forbearance & Workout Plans',
    icon: Home,
    description: 'We help you negotiate with your lender to modify your loan, reduce payments, or create a plan to catch up. Sometimes keeping your home is the best solution, and we\'ll help make it happen.',
    bestFor: 'Homeowners who want to keep their home but need help with payments',
    benefits: [
      'Stay in your home',
      'Lower payments',
      'Catch up over time',
      'Avoid foreclosure'
    ],
    example: 'Rachel lost her job and fell behind. We helped negotiate a forbearance plan, her payments were reduced by $400/month, and she kept her family home.',
    color: 'indigo'
  },
  {
    id: 'hybrid',
    title: 'Hybrid Solutions',
    icon: Zap,
    description: 'Get cash now for immediate needs plus monthly payments for long-term security. We create custom combinations of our solutions to perfectly match your unique situation.',
    bestFor: 'Homeowners who need some cash now but also want ongoing income',
    benefits: [
      'Immediate cash relief',
      'Ongoing income',
      'Custom structured',
      'Best of both worlds'
    ],
    example: 'Mike needed $20,000 for medical bills. We gave him $20,000 cash upfront plus $800/month for 10 years - solving his immediate need and providing future security.',
    color: 'pink'
  }
];

export function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold text-navy">Our Options-First Approach</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Your Situation is Unique. <span className="text-gradient">Your Solution Should Be Too.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We don't believe in one-size-fits-all. That's why we analyze your specific situation and present multiple 
            solutions with clear numbers, so you can choose the path that works best for your family.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">How Our Options-First Approach Works</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-2" />
                  <h4 className="font-semibold">1. Free Consultation</h4>
                </div>
                <p className="text-gray-600">We listen to understand your goals, timeline, and unique challenges</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-2" />
                  <h4 className="font-semibold">2. Custom Analysis</h4>
                </div>
                <p className="text-gray-600">We create multiple solutions with real numbers you can compare</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-2" />
                  <h4 className="font-semibold">3. You Choose</h4>
                </div>
                <p className="text-gray-600">Pick the option that best fits your needs - no pressure, just clarity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const isSelected = selectedSolution === solution.id;
            
            return (
              <Card 
                key={solution.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  isSelected ? 'ring-2 ring-gold transform scale-105' : ''
                }`}
                onClick={() => setSelectedSolution(isSelected ? null : solution.id)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${solution.color}-100 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${solution.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm text-gray-700 mb-1">Best For:</p>
                      <p className="text-sm text-gray-600">{solution.bestFor}</p>
                    </div>
                    
                    {isSelected && (
                      <>
                        <div>
                          <p className="font-semibold text-sm text-gray-700 mb-2">Key Benefits:</p>
                          <ul className="space-y-1">
                            {solution.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="font-semibold text-sm text-gray-700 mb-2">Real Example:</p>
                          <p className="text-sm text-gray-600 italic">{solution.example}</p>
                        </div>
                      </>
                    )}
                    
                    <button className="text-sm font-medium text-gold hover:text-gold/80 transition-colors">
                      {isSelected ? 'Hide Details' : 'Learn More'} →
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-navy rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Solution is Right for You?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            That's exactly why we offer a free, no-obligation consultation. Let's discuss your situation 
            and show you all your options with real numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/get-offer"
              variant="primary"
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90"
            >
              Get Your Free Options Analysis
            </CTAButton>
            <CTAButton 
              href="tel:9195550123"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Call Now: (919) 555-0123
            </CTAButton>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Average consultation reveals 3-5 viable options • No obligation to accept any offer
          </p>
        </div>
      </div>
    </section>
  );
}