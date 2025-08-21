# Solution 2 Properties LLC

A professional real estate wholesaling and cash home buying website built with Next.js 14, TypeScript, and Tailwind CSS.

## Project Overview

Solution 2 Properties LLC helps homeowners sell their properties quickly for cash. This website serves as the primary lead generation and information platform for the business.

### Key Features
- Professional, trust-building design
- Multi-step property evaluation forms
- SEO-optimized city landing pages
- Mobile-responsive interface
- Fast performance (90+ PageSpeed score)
- Integrated contact forms with validation

## Contact Information

**Business Contact:**
- Phone: (252) 258-0913
- Email: info@solution2properties.com
- Address: 123 Business Ave, Charlotte, NC 28202
- License: RE-123456

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
│   ├── forms/       # Form components
│   ├── layout/      # Layout components (Header, Footer)
│   ├── sections/    # Page sections
│   └── ui/          # UI components (buttons, cards, etc.)
├── lib/             # Utility functions and constants
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript compiler check
- `npm run format` - Format code with Prettier

## Documentation

- [Contact Management Guide](./CONTACT_MANAGEMENT.md) - How to manage and update contact information
- [Project Plan](./PROJECT_PLAN.md) - Detailed development roadmap and specifications
- [Design Strategy](./DESIGN_STRATEGY.md) - Visual design guidelines and approach
- [Location Audit Report](./LOCATION_AUDIT_REPORT.md) - North Carolina localization updates

## Important Configuration

### Contact Information Updates
All contact information is centrally managed in `/src/lib/constants.ts`. Never hardcode contact details in components. See [Contact Management Guide](./CONTACT_MANAGEMENT.md) for details.

### Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_FB_PIXEL_ID=your-facebook-pixel-id
```

## Development Guidelines

1. **Code Style**: Follow TypeScript strict mode and ESLint rules
2. **Components**: Use functional components with TypeScript
3. **Styling**: Use Tailwind CSS classes, avoid inline styles
4. **Forms**: Implement with React Hook Form and Zod validation
5. **Performance**: Optimize images, use Next.js Image component
6. **SEO**: Use proper meta tags and structured data

## Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run all checks before committing
npm run lint && npm run type-check
```

## Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment
```bash
npm run build
npm run start
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` and `npm run type-check`
4. Submit a pull request

## License

This project is proprietary software for Solution 2 Properties LLC.

---

For technical support or questions, contact the development team.
