import { Metadata } from 'next';
import { Solutions } from '@/components/sections/Solutions';
import { CTASection } from '@/components/sections/CTASection';
import { TrustBadges } from '@/components/ui/custom/TrustBadges';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Our Solutions | Solution 2 Properties - Multiple Ways to Help',
  description: 'Discover 8 different ways we can help with your property situation. From cash purchases to creative financing, we have options that work for every homeowner.',
  openGraph: {
    title: 'Flexible Home Selling Solutions | Solution 2 Properties',
    description: 'Traditional sale not working? Explore cash offers, seller financing, subject-to, and more. We create custom solutions for North Carolina homeowners.',
  },
};

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-navy to-navy/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-gold text-navy">Beyond Traditional Real Estate</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Every Problem Has Multiple Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We don't just make cash offers. We create custom solutions that match your unique situation, 
            timeline, and goals. More options mean better outcomes for you.
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Main Solutions Content */}
      <Solutions />

      {/* Additional Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">
              Why Our Multi-Option Approach Works Better
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-gold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">No Pressure Selling</h3>
                <p className="text-gray-600">
                  When you have options, you're in control. We present solutions, you choose what works best.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Better Outcomes</h3>
                <p className="text-gray-600">
                  Different solutions can mean tens of thousands more in your pocket. Knowledge is power.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-gold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
                <p className="text-gray-600">
                  Know you explored every option and made the best decision for your family's future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}