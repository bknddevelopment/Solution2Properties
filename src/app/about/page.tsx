import { Metadata } from 'next';
import { Award, Users, MapPin, TrendingUp } from 'lucide-react';
import { CTAButton } from '@/components/ui/custom/CTAButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'About Us | Solution 2 Properties',
  description: 'Learn about Solution 2 Properties, licensed real estate investors helping North Carolina homeowners sell their houses fast for cash since 2020.',
  openGraph: {
    title: 'About Us | Solution 2 Properties',
    description: 'Learn about Solution 2 Properties, licensed real estate investors helping North Carolina homeowners sell their houses fast for cash since 2020.',
  },
};

const stats = [
  {
    icon: Award,
    number: '500+',
    label: 'Homes Purchased',
    description: 'Successfully closed deals',
  },
  {
    icon: Users,
    number: '98%',
    label: 'Satisfied Customers',
    description: 'Customer satisfaction rate',
  },
  {
    icon: MapPin,
    number: '25+',
    label: 'North Carolina Cities',
    description: 'Active markets served',
  },
  {
    icon: TrendingUp,
    number: '21',
    label: 'Days Average',
    description: 'Time to close',
  },
];

const values = [
  {
    title: 'Transparency',
    description: 'We believe in honest, upfront communication. No hidden fees, no surprise costs, no fine print.',
  },
  {
    title: 'Fairness',
    description: 'Our offers reflect true market value. We want you to feel confident about your decision.',
  },
  {
    title: 'Reliability',
    description: 'When we make an offer, we follow through. Our cash-backed promises mean guaranteed closes.',
  },
  {
    title: 'Community',
    description: 'We\'re invested in North Carolina communities and committed to helping neighbors through difficult situations.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B3A67] to-[#4A90E2] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Established 2020
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Trusted <span className="text-[#27AE60]">Cash Home Buyers</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We're a team of licensed real estate professionals who specialize in 
                helping North Carolina homeowners sell their houses quickly and fairly. Since 2020, 
                we've built our reputation on trust, transparency, and results.
              </p>
              <CTAButton href="/get-offer" size="lg" className="bg-[#27AE60] hover:bg-[#219A52]">
                Get Your Offer
              </CTAButton>
            </div>
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className="h-8 w-8 text-[#27AE60] mx-auto mb-3" />
                        <div className="text-2xl font-bold mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-200">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B3A67] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Solution 2 Properties was founded in 2020 with a simple mission: 
                  to provide homeowners with a fast, fair, and hassle-free alternative 
                  to traditional real estate sales.
                </p>
                <p>
                  As licensed real estate investors and North Carolina natives, we understand 
                  the challenges homeowners face when they need to sell quickly. 
                  Whether it's foreclosure, inheritance, divorce, relocation, or 
                  financial hardship, we're here to help.
                </p>
                <p>
                  We've helped over 500 families across North Carolina sell their homes on 
                  their terms, without the stress of traditional selling methods. 
                  Our commitment to transparency and fairness has earned us an A+ 
                  BBB rating and the trust of homeowners throughout the state.
                </p>
              </div>
            </div>
            <div>
              <Card className="bg-[#F5F5F5] border-none">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#2B3A67] mb-4">
                    Why We Do What We Do
                  </h3>
                  <blockquote className="text-gray-700 italic mb-4">
                    "Every homeowner deserves options. We're here to provide a solution 
                    when traditional selling isn't the right fit."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">S2P</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#2B3A67]">Sarah Johnson</div>
                      <div className="text-sm text-gray-600">Founder & CEO</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B3A67] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent>
                  <h3 className="text-xl font-bold text-[#2B3A67] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B3A67] mb-4">
              Licensed & Trusted
            </h2>
            <p className="text-xl text-gray-600">
              We're fully licensed, bonded, and regulated real estate professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent>
                <div className="w-16 h-16 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#4A90E2]" />
                </div>
                <h3 className="text-lg font-bold text-[#2B3A67] mb-2">
                  A+ BBB Rating
                </h3>
                <p className="text-gray-600">
                  Accredited business with the Better Business Bureau
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent>
                <div className="w-16 h-16 bg-[#27AE60]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Badge className="h-8 w-8 text-[#27AE60]" />
                </div>
                <h3 className="text-lg font-bold text-[#2B3A67] mb-2">
                  Licensed & Bonded
                </h3>
                <p className="text-gray-600">
                  North Carolina Real Estate License #RE-123456
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent>
                <div className="w-16 h-16 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#4A90E2]" />
                </div>
                <h3 className="text-lg font-bold text-[#2B3A67] mb-2">
                  Local Experts
                </h3>
                <p className="text-gray-600">
                  Born and raised in North Carolina, serving our communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2B3A67] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join the hundreds of North Carolina homeowners who've trusted us to buy their houses fast and fair.
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
              href="/contact"
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#2B3A67] border-white"
            >
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}