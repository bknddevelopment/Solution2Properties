import { Metadata } from 'next';
import { Suspense } from 'react';
import { GetOfferForm } from '@/components/forms/GetOfferForm';
import { TrustBadges } from '@/components/ui/custom/TrustBadges';

export const metadata: Metadata = {
  title: 'Get Your Offer | Solution 2 Properties',
  description: 'Get a fair offer for your house in 24 hours. No fees, no repairs needed. Fill out our simple form to get started.',
  openGraph: {
    title: 'Get Your Offer | Solution 2 Properties',
    description: 'Get a fair offer for your house in 24 hours. No fees, no repairs needed.',
  },
};

function GetOfferFormWrapper() {
  // This would typically get the address from URL params
  // For now, we'll pass undefined and let the form handle it
  return <GetOfferForm />;
}

export default function GetOfferPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B3A67] to-[#4A90E2] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your <span className="text-[#27AE60]">Offer</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Fill out our simple 3-step form and receive a fair offer for your house within 24 hours. 
            No obligation, no fees, no repairs needed.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#27AE60] rounded-full"></div>
              <span>No Fees or Commissions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#27AE60] rounded-full"></div>
              <span>Close on Your Timeline</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#27AE60] rounded-full"></div>
              <span>No Repairs Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div>Loading form...</div>}>
            <GetOfferFormWrapper />
          </Suspense>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#2B3A67] mb-2">
              Why Choose Solution 2 Properties?
            </h2>
            <p className="text-gray-600">
              We're licensed, bonded, and committed to fair, transparent transactions
            </p>
          </div>
          <TrustBadges />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#2B3A67] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need to Speak with Someone?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our team is standing by to answer your questions and help you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12522580913"
              className="bg-[#27AE60] hover:bg-[#219A52] text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Call Now: (252) 258-0913
            </a>
            <a
              href="mailto:info@solution2properties.com"
              className="bg-white hover:bg-gray-100 text-[#2B3A67] font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}