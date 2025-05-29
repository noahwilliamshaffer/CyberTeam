# 🛡️ CyberSecure Pro - Professional Cybersecurity Consulting Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.15-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.15.0-ff69b4)](https://www.framer.com/motion/)

A modern, professional cybersecurity consulting website built with Next.js 15, featuring cutting-edge design, comprehensive service showcases, and optimized performance. **Ready for deployment!**

## ✅ Current Status: **PRODUCTION READY**

- ✅ **Build Status**: Successfully compiles
- ✅ **Linting**: All ESLint errors resolved
- ✅ **TypeScript**: Type-safe and error-free
- ✅ **Performance**: Optimized for Lighthouse scores >90
- ✅ **Responsive**: Mobile-first design
- ✅ **Accessibility**: WCAG compliant
- ✅ **SEO**: Meta tags and structured data ready
- ✅ **Deployment**: Vercel/Netlify ready

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Architecture & Features

### **Tech Stack**
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.15
- **Animations**: Framer Motion 11.15.0
- **Theme**: next-themes (dark/light mode)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter (self-hosted)

### **Key Features**
- 🎨 **Modern Cyber-themed Design** with blue/teal color palette
- 🌙 **Dark/Light Mode** with system preference detection
- 📱 **Fully Responsive** mobile-first design
- ⚡ **Performance Optimized** with Next.js 15 features
- 🔍 **SEO Optimized** with comprehensive meta tags
- ♿ **Accessible** WCAG 2.1 compliant
- 🎭 **Smooth Animations** with Framer Motion
- 📝 **Form Validation** with React Hook Form + Zod
- 🔒 **Security Headers** configured for Vercel deployment

## 📄 Pages Overview

### **Homepage (`/`)**
- Hero section with animated statistics
- 6 core cybersecurity services showcase
- Client testimonials carousel
- Call-to-action sections
- Social proof and trust indicators

### **About Page (`/about`)**
- Company mission and vision
- Core values with icons
- Team member profiles with certifications
- Achievement metrics
- Industry certifications display

### **Quote Request (`/quote`)**
- Comprehensive quote request form
- Form validation with error handling
- Service selection with pricing tiers
- Timeline and budget selectors
- Personal and company information fields

### **Resources (`/resources`)**
- Blog/articles section with 8 sample posts
- Search and filter functionality
- Cybersecurity whitepapers
- Newsletter signup
- Resource categories

## 🎨 Design System

### **Color Palette**
```css
/* Cyber Theme Colors */
--cyber-50: #ecfeff
--cyber-100: #cffafe
--cyber-200: #a5f3fc
--cyber-300: #67e8f9
--cyber-400: #22d3ee
--cyber-500: #06b6d4  /* Primary */
--cyber-600: #0891b2
--cyber-700: #0e7490
--cyber-800: #155e75
--cyber-900: #164e63
```

### **Typography**
- **Primary Font**: Inter (400, 500, 600, 700, 800, 900)
- **Headings**: Bold, clean sans-serif
- **Body**: Medium weight for readability

### **Components**
- Glassmorphism effects for cards
- Gradient backgrounds
- Smooth hover transitions
- Consistent spacing scale
- Professional button styles

## 🔧 Configuration Files

### **Key Configuration**
- `next.config.ts` - Next.js configuration with image optimization
- `tailwind.config.ts` - Custom theme with cyber colors and animations
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules for code quality
- `vercel.json` - Deployment configuration with security headers

### **Environment Variables**
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="CyberSecure Pro"
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint_here
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### **Manual Deployment**
```bash
npm run build
npm start
```

Detailed deployment instructions in [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## 📊 Performance Metrics

**Target Lighthouse Scores:**
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

**Optimizations:**
- Image optimization with Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Gzip compression
- CDN delivery via Vercel

## 🛠️ Development

### **Project Structure**
```
src/
├── app/                    # Next.js 15 App Router
│   ├── about/             # About page
│   ├── quote/             # Quote request form
│   ├── resources/         # Blog and resources
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   ├── Navigation.tsx     # Header navigation
│   └── theme-provider.tsx # Theme context
└── lib/                   # Utilities
    └── utils.ts           # Helper functions
```

### **Available Scripts**
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
npm run type-check   # TypeScript checking
```

### **Code Quality**
- ESLint with TypeScript rules
- Prettier for code formatting
- Husky for git hooks (optional)
- TypeScript strict mode
- Component-based architecture

## 🎯 Customization Guide

### **Branding**
1. Update colors in `tailwind.config.ts`
2. Replace logo/brand name in navigation
3. Update favicon in `public/favicon.ico`
4. Modify company information throughout pages

### **Content**
1. **Team Members**: Update profiles in `/about` page
2. **Services**: Modify service descriptions in homepage
3. **Testimonials**: Replace with real client feedback
4. **Blog Posts**: Add real articles in `/resources`

### **Contact Information**
1. Update footer contact details
2. Modify quote form submission endpoint
3. Replace placeholder phone/email addresses

## 🔒 Security Features

- Security headers configured in `vercel.json`
- CSRF protection ready for forms
- Input validation with Zod schemas
- XSS protection with React's built-in sanitization
- Content Security Policy ready

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:
- Create an issue in this repository
- Check the documentation
- Review the deployment guide

---

**Built with ❤️ for cybersecurity professionals**

Ready to deploy and start attracting clients! 🚀 