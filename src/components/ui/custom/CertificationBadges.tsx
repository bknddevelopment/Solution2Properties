'use client';

import { motion } from 'framer-motion';

interface Certification {
  name: string;
  logo: string;
  description: string;
}

const certifications: Certification[] = [
  {
    name: 'Better Business Bureau',
    logo: '/certifications/bbb-logo.svg', // You'll need to add these logos
    description: 'A+ Accredited Business',
  },
  {
    name: 'National Association of Home Buyers',
    logo: '/certifications/nahb-logo.svg',
    description: 'Certified Member',
  },
  {
    name: 'North Carolina Real Estate Commission',
    logo: '/certifications/ncrec-logo.svg',
    description: 'Licensed Buyer',
  },
];

export function CertificationBadges() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-navy mb-4">
            Certified & Accredited
          </h3>
          <p className="text-lg text-gray-600">
            Recognized by industry-leading organizations for excellence and integrity
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-premium transition-all duration-300 border-2 border-transparent hover:border-gold/20">
                {/* Placeholder for logo - in real implementation, use actual logos */}
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-gray-500">
                    {cert.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-navy mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline certification badges for footer or other sections
export function CertificationBadgesInline() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 py-6">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg"
        >
          <div className="w-8 h-8 bg-gold/20 rounded flex items-center justify-center">
            <span className="text-sm font-bold text-gold">{cert.name.charAt(0)}</span>
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-white">{cert.name}</p>
            <p className="text-xs text-gray-300">{cert.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}