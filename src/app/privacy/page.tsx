import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Solution 2 Properties',
  description: 'Privacy Policy for Solution 2 Properties LLC. Learn how we protect and use your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-[#2B3A67] mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you fill out our property form, 
                call us, or communicate with us via email.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Property information (address, condition, timeline)</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide you with a cash offer for your property</li>
                <li>Communicate with you about our services</li>
                <li>Improve our services and customer experience</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#2B3A67] mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: info@solution2properties.com<br />
                Phone: (252) 258-0913
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}