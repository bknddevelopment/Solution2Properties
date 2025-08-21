import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { CTAButton } from '@/components/ui/custom/CTAButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Solution 2 Properties',
  description: 'Get in touch with Solution 2 Properties. Call, email, or visit us to learn more about selling your house fast for cash in North Carolina.',
  openGraph: {
    title: 'Contact Us | Solution 2 Properties',
    description: 'Get in touch with Solution 2 Properties. Call, email, or visit us to learn more about selling your house fast for cash in North Carolina.',
  },
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    primary: COMPANY_INFO.phone,
    secondary: 'Available 7 days a week',
    action: 'Call Now',
    href: `tel:${COMPANY_INFO.phone}`,
    color: 'bg-[#27AE60]',
  },
  {
    icon: MessageSquare,
    title: 'Text Us',
    primary: COMPANY_INFO.phone,
    secondary: 'Quick response guaranteed',
    action: 'Send Text',
    href: `sms:${COMPANY_INFO.phone}`,
    color: 'bg-[#4A90E2]',
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: COMPANY_INFO.email,
    secondary: 'Response within 2 hours',
    action: 'Send Email',
    href: `mailto:${COMPANY_INFO.email}`,
    color: 'bg-[#2B3A67]',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B3A67] to-[#4A90E2] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-[#27AE60]">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Ready to sell your house fast for cash? Have questions about our process? 
            We're here to help and would love to hear from you.
          </p>
          <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3 text-lg">
            <Clock className="h-5 w-5 mr-2 text-[#27AE60]" />
            Available 7 Days a Week
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B3A67] mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred way to get in touch
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2B3A67] mb-2">
                      {method.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      {method.primary}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {method.secondary}
                    </p>
                    <CTAButton 
                      href={method.href} 
                      className={`${method.color} hover:opacity-90`}
                    >
                      {method.action}
                    </CTAButton>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Offer CTA */}
          <div className="text-center bg-[#F5F5F5] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2B3A67] mb-4">
              Skip the Small Talk
            </h3>
            <p className="text-gray-600 mb-6">
              Ready to get your offer? Fill out our quick form and get an offer in 24 hours.
            </p>
            <CTAButton href="/get-offer" size="lg">
              Get Offer Now
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#2B3A67] mb-8">
                Our Office
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#4A90E2] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#2B3A67] mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-[#4A90E2] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#2B3A67] mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      {COMPANY_INFO.businessHours}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Emergency calls accepted 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#4A90E2] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#2B3A67] mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a 
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="hover:text-[#4A90E2] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#4A90E2] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#2B3A67] mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a 
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="hover:text-[#4A90E2] transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2B3A67]">
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We proudly serve homeowners throughout North Carolina, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="space-y-1">
                      <p>• Charlotte</p>
                      <p>• Raleigh</p>
                      <p>• Durham</p>
                      <p>• Greensboro</p>
                      <p>• Winston-Salem</p>
                      <p>• Cary</p>
                      <p>• Wilmington</p>
                    </div>
                    <div className="space-y-1">
                      <p>• Asheville</p>
                      <p>• Fayetteville</p>
                      <p>• Chapel Hill</p>
                      <p>• Apex</p>
                      <p>• High Point</p>
                      <p>• Concord</p>
                      <p>• And many more!</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Don't see your city? We buy houses throughout North Carolina. 
                    Contact us to confirm we serve your area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2B3A67] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our frequently asked questions or give us a call for immediate answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/#faq" variant="secondary" size="lg">
              View FAQ
            </CTAButton>
            <CTAButton 
              href={`tel:${COMPANY_INFO.phone}`} 
              variant="phone"
              size="lg"
            >
              Call {COMPANY_INFO.phone}
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}