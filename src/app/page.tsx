import { ProfessionalHeroSection } from '@/components/sections/ProfessionalHeroSection';
import { Features } from '@/components/sections/Features';
import { CTASection } from '@/components/sections/CTASection';
import { TrustBadges } from '@/components/ui/custom/TrustBadges';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Solutions } from '@/components/sections/Solutions';
import { FAQ } from '@/components/sections/FAQ';
import { CertificationBadges } from '@/components/sections/CertificationBadges';

export default function Home() {
  return (
    <>
      <ProfessionalHeroSection />
      
      {/* Trust Badges Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
              Why North Carolina Homeowners Trust Us
            </h2>
            <p className="text-lg text-slate max-w-3xl mx-auto">
              With over 15 years of experience and <span className="text-gold font-semibold">$150M+ in cash deployed</span>, 
              we're North Carolina's most trusted home buying company
            </p>
          </div>
          <TrustBadges />
        </div>
      </section>

      <CertificationBadges />
      <Features />
      <Solutions />
      <HowItWorks />
      <CTASection />
      <FAQ />
    </>
  );
}