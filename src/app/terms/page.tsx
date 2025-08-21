import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Solution 2 Properties',
  description: 'Terms of Service for Solution 2 Properties LLC. Read our terms and conditions for using our services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-[#2B3A67] mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">Our Services</h2>
              <p className="text-gray-700 mb-4">
                Solution 2 Properties LLC provides real estate investment services, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cash offers for residential properties</li>
                <li>Property evaluation and consultation</li>
                <li>Fast closing services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">No Obligation</h2>
              <p className="text-gray-700">
                All offers provided are without obligation. You are free to accept or decline 
                any offer we present, and there are no fees for our evaluation services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                Solution 2 Properties LLC shall not be liable for any direct, indirect, incidental, 
                special, or consequential damages resulting from the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">Contact Information</h2>
              <p className="text-gray-700">
                For questions regarding these terms, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: info@solution2properties.com<br />
                Phone: (252) 258-0913<br />
                Address: 123 Business Ave, Charlotte, NC 28202
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}