# Contact Information Management Guide

## Current Contact Information

### Primary Business Contact
- **Phone**: (252) 258-0913
- **Email**: info@solution2properties.com
- **Address**: 123 Business Ave, Charlotte, NC 28202
- **Business Hours**: Mon-Fri 8AM-6PM, Sat 9AM-3PM
- **License Number**: RE-123456

## Phone Number Change Log

### January 16, 2025 - Phone Number Update
- **Previous Number**: (919) 555-0100 (Raleigh/Durham area code)
- **New Number**: (252) 258-0913 (North Carolina area code)
- **Updated By**: Documentation Guardian
- **Files Updated**: 
  - `/src/lib/constants.ts` - Primary source of truth
  - `/LOCATION_AUDIT_REPORT.md` - Documentation updated

## Contact Information Architecture

### Single Source of Truth
All contact information is centrally managed in:
```
/src/lib/constants.ts → COMPANY_INFO object
```

This ensures consistency across the entire application.

### Current Implementation
```typescript
export const COMPANY_INFO = {
  name: 'Solution 2 Properties LLC',
  phone: '(252) 258-0913',
  email: 'info@solution2properties.com',
  address: '123 Business Ave, Charlotte, NC 28202',
  businessHours: 'Mon-Fri 8AM-6PM, Sat 9AM-3PM',
  licenseNumber: 'RE-123456',
} as const;
```

## Best Practices for Contact Information Management

### 1. **Centralized Configuration**
- ✅ **DO**: Use the `COMPANY_INFO` constant from `/src/lib/constants.ts`
- ❌ **DON'T**: Hardcode contact information in components or pages

### 2. **Implementation Pattern**
```typescript
// Good - Import from constants
import { COMPANY_INFO } from '@/lib/constants';

// In your component
<a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>

// Bad - Hardcoded
<a href="tel:(252) 258-0913">(252) 258-0913</a>
```

### 3. **Environment-Based Configuration**
For different environments (development, staging, production):

```typescript
// Future enhancement: environment-specific config
export const COMPANY_INFO = {
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '(252) 258-0913',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@solution2properties.com',
  // ... other fields
} as const;
```

### 4. **Schema Markup**
Ensure structured data is updated when contact info changes:

```typescript
// In layout or page metadata
const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": COMPANY_INFO.name,
  "telephone": COMPANY_INFO.phone,
  "email": COMPANY_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": COMPANY_INFO.address
  }
};
```

## Checklist for Contact Information Updates

When updating contact information, follow this checklist:

### Internal Updates
- [ ] Update `/src/lib/constants.ts`
- [ ] Run a full build to ensure no hardcoded references
- [ ] Test all contact links (phone, email)
- [ ] Verify forms are using the correct contact info
- [ ] Check footer displays updated information
- [ ] Review CTA sections for accuracy

### External Updates
- [ ] Google Business Profile
- [ ] Social media profiles
- [ ] Domain registrar contact info
- [ ] Email service provider settings
- [ ] SMS/Twilio configuration
- [ ] CRM system
- [ ] Any third-party integrations
- [ ] Marketing materials
- [ ] Business cards
- [ ] Legal documents

### SEO & Technical Updates
- [ ] Update structured data/schema markup
- [ ] Submit updated sitemap if needed
- [ ] Update any local SEO citations
- [ ] Verify Analytics tracking
- [ ] Update call tracking numbers if applicable

## Automated Validation

### Recommended ESLint Rule
Add a custom ESLint rule to prevent hardcoding:

```javascript
// .eslintrc.js
module.exports = {
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'Literal[value=/\\(\\d{3}\\)\\s*\\d{3}-\\d{4}/]',
        message: 'Do not hardcode phone numbers. Use COMPANY_INFO.phone from @/lib/constants'
      }
    ]
  }
};
```

### Pre-commit Hook
Add validation to prevent accidental hardcoding:

```bash
# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Check for hardcoded phone numbers
if grep -r --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" "\(252\) 258-0913" src/; then
  echo "❌ Error: Hardcoded phone number found. Use COMPANY_INFO from constants.ts"
  exit 1
fi
```

## Migration Guide

### For Developers
1. Search codebase for any hardcoded contact info
2. Replace with imports from `constants.ts`
3. Test all contact functionality
4. Update any API configurations

### For Content Managers
1. Review all content for outdated contact info
2. Update CMS entries if applicable
3. Refresh cached content
4. Verify all public-facing information

## Monitoring & Alerts

### Recommended Monitoring
1. Set up uptime monitoring for phone system
2. Email deliverability monitoring
3. Form submission testing (weekly)
4. Broken link checker for contact links

### Alert Configuration
- Phone system downtime
- Email bounce rates > 5%
- Form submission failures
- 404 errors on contact pages

## Emergency Contacts

### Technical Support
- **Developer Contact**: [Add developer contact]
- **Hosting Support**: Vercel Support
- **Domain Support**: [Add registrar support]

### Business Continuity
- **Backup Phone**: [Add if available]
- **Backup Email**: [Add if available]
- **After-hours Contact**: [Add if available]

---

## Summary

Proper contact information management is crucial for business operations and customer trust. By following these guidelines:

1. **Centralize** all contact information in one location
2. **Automate** validation to prevent errors
3. **Document** all changes with timestamps
4. **Test** regularly to ensure functionality
5. **Monitor** for issues proactively

This approach minimizes hardcoding issues, ensures consistency, and makes future updates straightforward.

---

*Last Updated: January 16, 2025*
*Document Version: 1.0.0*