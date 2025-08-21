export const BRAND_COLORS = {
  navy: '#2B3A67',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  accentBlue: '#4A90E2',
  successGreen: '#27AE60',
  trustGray: '#7F8C8D',
} as const;

export const COMPANY_INFO = {
  name: 'Solution 2 Properties LLC',
  phone: '(252) 258-0913',
  email: 'info@solution2properties.com',
  address: '123 Business Ave, Charlotte, NC 28202',
  businessHours: 'Mon-Fri 8AM-6PM, Sat 9AM-3PM',
  licenseNumber: 'RE-123456',
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About Us', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
] as const;

export const TRUST_INDICATORS = [
  'A+ BBB Rating',
  'Licensed & Bonded',
  '500+ Homes Purchased',
  '24-Hour Response',
  'No Hidden Fees',
  'Fast Offers',
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Get Your Offer',
    description: 'Fill out our simple form and get a fair cash offer within 24 hours.',
    icon: 'home',
  },
  {
    step: 2,
    title: 'Accept & Schedule',
    description: 'Accept our offer and schedule a convenient closing date.',
    icon: 'calendar',
  },
  {
    step: 3,
    title: 'Get Paid',
    description: 'Close on your timeline and get cash in hand - it\'s that easy!',
    icon: 'money',
  },
] as const;