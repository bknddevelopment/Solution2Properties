import { Home, Calendar, DollarSign } from 'lucide-react';
import { CTAButton } from '@/components/ui/custom/CTAButton';
import { PROCESS_STEPS } from '@/lib/constants';

const iconMap = {
  home: Home,
  calendar: Calendar,
  money: DollarSign,
} as const;

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B3A67] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our simple 3-step process makes selling your house fast and hassle-free
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div
                key={step.step}
                className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-[#4A90E2] text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-[#4A90E2]/10 rounded-full mx-auto mb-6 group-hover:bg-[#4A90E2]/20 transition-colors">
                  <Icon className="h-8 w-8 text-[#4A90E2]" />
                </div>

                <h3 className="text-xl font-bold text-[#2B3A67] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector for desktop */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-[#4A90E2] relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#4A90E2] rotate-45 translate-x-1"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#2B3A67] mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of homeowners who've sold their houses fast with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/get-offer" size="lg">
              Get Offer
            </CTAButton>
            <CTAButton 
              variant="secondary" 
              href="/how-it-works"
              size="lg"
            >
              Learn More
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}