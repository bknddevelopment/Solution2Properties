'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CTAButton } from '@/components/ui/custom/CTAButton';

const faqs = [
  {
    id: '1',
    question: 'How quickly can you buy my house?',
    answer: 'We can typically make you a fair cash offer within 24 hours of receiving your information. Once you accept our offer, we can close in as little as 7-14 days, or on your timeline if you need more time.',
  },
  {
    id: '2',
    question: 'Do I need to make repairs before selling?',
    answer: 'No! We buy houses in any condition - from move-in ready to needing major repairs. You don\'t need to spend a dime on repairs, cleaning, or staging. We handle everything.',
  },
  {
    id: '3',
    question: 'Are there any fees or commissions?',
    answer: 'Absolutely not. We don\'t charge any fees, commissions, or closing costs. The cash offer we give you is exactly what you\'ll receive at closing.',
  },
  {
    id: '4',
    question: 'How do you determine your offer price?',
    answer: 'We consider factors like your home\'s location, size, condition, recent comparable sales, and current market conditions. Our goal is to make you a fair offer that reflects your home\'s true value.',
  },
  {
    id: '5',
    question: 'What types of houses do you buy?',
    answer: 'We buy all types of residential properties: single-family homes, condos, townhouses, multi-family properties, mobile homes, and land. We buy in any condition and situation.',
  },
  {
    id: '6',
    question: 'Is there any obligation after getting an offer?',
    answer: 'No obligation whatsoever. Getting an offer is completely free with no strings attached. You can take time to consider our offer and compare it with other options.',
  },
  {
    id: '7',
    question: 'Why should I sell to you instead of listing with a realtor?',
    answer: 'Selling to us means no repairs, no showings, no waiting months for a buyer, no realtor commissions (typically 6%), and you can close on your timeline. It\'s perfect for those who need certainty and speed.',
  },
  {
    id: '8',
    question: 'What documents do I need?',
    answer: 'We make it simple. Typically, we just need proof of ownership (deed) and a valid ID. We handle most of the paperwork and can help you through the entire process.',
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B3A67] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Here are the most common questions we receive from homeowners.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#2B3A67] pr-4">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-[#4A90E2] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#4A90E2] flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#2B3A67] mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/get-offer" size="lg">
              Get Offer
            </CTAButton>
            <CTAButton 
              variant="phone" 
              href="tel:+12522580913"
              size="lg"
            >
              Call Us Now
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}