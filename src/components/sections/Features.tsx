'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  DollarSign, 
  Home, 
  Shield, 
  Calendar,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '24-Hour Cash Offer',
    description: 'Lightning-fast evaluations with guaranteed offers within one business day.',
    gradient: 'from-gold to-gold-dark',
    highlight: true,
  },
  {
    icon: Home,
    title: 'Any Condition Accepted',
    description: 'From luxury estates to fixer-uppers, we purchase properties in any state.',
    gradient: 'from-emerald to-emerald-dark',
  },
  {
    icon: DollarSign,
    title: 'Zero Fees or Commissions',
    description: 'Keep 100% of your offer. No hidden costs, no realtor fees, no surprises.',
    gradient: 'from-navy to-navy-light',
  },
  {
    icon: Calendar,
    title: 'Close on Your Timeline',
    description: 'Whether you need cash in 7 days or 60 days, we work with your schedule.',
    gradient: 'from-gold to-gold-dark',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully bonded North Carolina buyers with $5M insurance coverage for your peace of mind.',
    gradient: 'from-emerald to-emerald-dark',
  },
  {
    icon: Sparkles,
    title: 'White-Glove Service',
    description: 'Dedicated transaction coordinator handles every detail from offer to closing.',
    gradient: 'from-navy to-navy-light',
  },
  {
    icon: TrendingUp,
    title: 'Market-Leading Offers',
    description: 'Our data-driven approach ensures you receive top dollar for your property.',
    gradient: 'from-gold to-gold-dark',
  },
  {
    icon: CheckCircle,
    title: 'Guaranteed Closing',
    description: 'No financing contingencies. When we make an offer, we close. Period.',
    gradient: 'from-emerald to-emerald-dark',
  },
];

export function Features() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">The Premium Advantage</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Why Choose <span className="text-gradient">Solution2Properties</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the gold standard in home buying. We combine cutting-edge technology 
            with old-fashioned integrity to deliver unmatched service.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
                feature.highlight 
                  ? 'bg-gradient-to-br from-navy to-navy-light text-white shadow-premium-lg scale-105' 
                  : 'bg-white shadow-premium hover:shadow-premium-lg'
              }`}>
                {/* Highlight Badge */}
                {feature.highlight && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="absolute -top-3 -right-3 bg-gold text-navy-dark px-3 py-1 rounded-full text-xs font-bold shadow-gold"
                  >
                    MOST POPULAR
                  </motion.div>
                )}
                
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-full h-full rounded-xl flex items-center justify-center ${
                      feature.highlight ? 'bg-navy-dark' : 'bg-white'
                    }`}>
                      <feature.icon className={`h-8 w-8 ${
                        feature.highlight ? 'text-gold' : `bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`
                      }`} />
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  feature.highlight ? 'text-white' : 'text-navy'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  feature.highlight ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the difference?
          </p>
          <a
            href="/get-offer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy-dark px-8 py-4 rounded-full font-bold text-lg shadow-gold hover-glow transition-all duration-300"
          >
            Get Your Premium Offer
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}