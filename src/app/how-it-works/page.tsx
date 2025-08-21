import { Metadata } from 'next';
import { Home, Calendar, DollarSign, CheckCircle, Clock, Shield } from 'lucide-react';
import { CTAButton } from '@/components/ui/custom/CTAButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'How It Works | Solution 2 Properties',
  description: 'Learn about our simple 3-step process to sell your house fast for cash. Get a fair offer in 24 hours with no fees or repairs needed.',
  openGraph: {
    title: 'How It Works | Solution 2 Properties',
    description: 'Learn about our simple 3-step process to sell your house fast for cash. Get a fair offer in 24 hours with no fees or repairs needed.',
  },
};

const processSteps = [
  {
    step: 1,
    title: 'Get Your Offer',
    description: 'Fill out our simple form with basic information about your property. Our team will research your home and local market conditions to prepare a fair cash offer.',
    details: [
      'Quick 3-minute online form',
      'Property research and analysis',
      'Market comparison analysis',
      'Fair cash offer within 24 hours'
    ],
    icon: Home,
    color: 'from-[#4A90E2] to-[#357ABD]',
  },
  {
    step: 2,
    title: 'Accept & Schedule',
    description: 'Review our no-obligation offer. If you like it, we\'ll schedule a quick property walkthrough and set your preferred closing date.',
    details: [
      'No-obligation cash offer',
      'Quick property walkthrough',
      'Choose your closing date',
      'Professional closing process'
    ],
    icon: Calendar,
    color: 'from-[#27AE60] to-[#219A52]',
  },
  {
    step: 3,
    title: 'Get Paid',
    description: 'Close on your timeline and receive your cash. We handle all the paperwork and closing costs. You walk away with cash in hand.',
    details: [
      'We handle all paperwork',
      'No closing costs for you',
      'Close in as little as 7 days',
      'Cash in hand at closing'
    ],
    icon: DollarSign,
    color: 'from-[#2B3A67] to-[#1E2951]',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Fast Process',
    description: 'Get a cash offer in 24 hours and close in as little as 7 days.',
  },
  {
    icon: Shield,
    title: 'No Risk',
    description: 'No obligation offers, no fees, and we buy houses in any condition.',
  },
  {
    icon: CheckCircle,
    title: 'Guaranteed Close',
    description: 'Cash buyers mean no financing contingencies or deal fall-through.',
  },
];

const comparison = [
  {
    aspect: 'Timeline',
    traditional: '3-6+ months',
    us: '7-30 days',
  },
  {
    aspect: 'Repairs Needed',
    traditional: 'Yes, often $10k+',
    us: 'None required',
  },
  {
    aspect: 'Fees & Commissions',
    traditional: '6-10% of sale price',
    us: '$0 fees',
  },
  {
    aspect: 'Showings',
    traditional: 'Multiple showings',
    us: 'One walkthrough',
  },
  {
    aspect: 'Closing Guarantee',
    traditional: 'Deals can fall through',
    us: 'Guaranteed close',
  },
  {
    aspect: 'Paperwork',
    traditional: 'You handle most',
    us: 'We handle everything',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2B3A67] via-[#364779] to-[#4A90E2] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Simple & Transparent Process
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How We Buy Houses <span className="text-[#27AE60]">Fast</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Our proven 3-step process has helped over 500 homeowners sell their houses quickly 
            and hassle-free. Here's exactly how it works.
          </p>
          <CTAButton href="/get-offer" size="lg" className="bg-[#27AE60] hover:bg-[#219A52]">
            Start Your Cash Offer
          </CTAButton>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          Step {step.step}
                        </Badge>
                        <h2 className="text-3xl font-bold text-[#2B3A67]">
                          {step.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-[#27AE60] flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <Card className="bg-gray-50 border-none shadow-lg">
                      <CardContent className="p-8">
                        <div className={`w-full h-64 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                          <Icon className="h-24 w-24 text-white opacity-80" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B3A67] mb-4">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've designed our process to be fast, fair, and completely hassle-free for homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent>
                    <div className="flex items-center justify-center w-16 h-16 bg-[#4A90E2]/10 rounded-full mx-auto mb-6">
                      <Icon className="h-8 w-8 text-[#4A90E2]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2B3A67] mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B3A67] mb-4">
              Us vs. Traditional Selling
            </h2>
            <p className="text-xl text-gray-600">
              See how our process compares to listing with a realtor
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-[#2B3A67] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                  <th className="px-6 py-4 text-center font-semibold">Traditional Selling</th>
                  <th className="px-6 py-4 text-center font-semibold bg-[#4A90E2]">Solution 2 Properties</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.aspect}</td>
                    <td className="px-6 py-4 text-center text-red-600">{item.traditional}</td>
                    <td className="px-6 py-4 text-center text-[#27AE60] font-semibold bg-[#4A90E2]/5">
                      {item.us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2B3A67] to-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join hundreds of homeowners who've chosen our fast, fair, and hassle-free process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/get-offer" 
              size="lg"
              className="bg-[#27AE60] hover:bg-[#219A52]"
            >
              Get Offer
            </CTAButton>
            <CTAButton 
              variant="secondary" 
              href="tel:+12522580913"
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#2B3A67] border-white"
            >
              Call (252) 258-0913
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}