# 🚀 Deployment Guide - CyberSecure Pro Website

This guide walks you through deploying your professional cybersecurity consulting website to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

- [ ] Replace placeholder content with your actual business information
- [ ] Update team member photos and bios in `/src/app/about/page.tsx`
- [ ] Replace contact information throughout the site
- [ ] Add your actual favicon to `/public/favicon.ico`
- [ ] Update social media links in footer
- [ ] Test all forms and contact methods
- [ ] Verify all links work correctly
- [ ] Run `npm run build` locally to check for errors
- [ ] Test responsive design on mobile devices

## 🎯 Vercel Deployment (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CyberSecure Pro website"
   git branch -M main
   git remote add origin https://github.com/yourusername/cybersec-consulting.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to your project dashboard on Vercel
   - Navigate to "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy**
   ```bash
   vercel login
   vercel --prod
   ```

## 🌐 Alternative Deployment Options

### Netlify

1. **Build the project**
   ```bash
   npm run build
   npm run export  # If using static export
   ```

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `out` folder to the deploy area

3. **Or via Git Integration**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `out` or `.next`

### AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify console
   - Choose "Host web app"
   - Connect your GitHub repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static
   EXPOSE 3000
   CMD ["node", "server.js"]
   ```

2. **Build and Run**
   ```bash
   docker build -t cybersec-consulting .
   docker run -p 3000:3000 cybersec-consulting
   ```

## ⚙️ Environment Variables

Create `.env.local` for local development:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="CyberSecure Pro"

# Contact Form (if using a service like Formspree)
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Email Service (if implementing contact form backend)
EMAIL_FROM=contact@cybersecurepro.com
EMAIL_TO=inquiries@cybersecurepro.com
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

For production, add these same variables to your hosting platform's environment settings.

## 🔧 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images using tools like TinyPNG
   - Ensure images are properly sized

2. **Code Optimization**
   ```bash
   npm run build
   npm run start  # Test production build locally
   ```

3. **Lighthouse Audit**
   - Run Lighthouse in Chrome DevTools
   - Aim for scores >90 in all categories
   - Fix any identified issues

### Post-Deployment

1. **CDN Configuration**
   - Vercel automatically provides global CDN
   - Other platforms may require manual CDN setup

2. **Monitoring**
   - Set up Vercel Analytics or Google Analytics
   - Monitor Core Web Vitals
   - Set up error tracking (optional)

## 🛡️ Security Considerations

### Headers Configuration

The included `vercel.json` sets security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### SSL/HTTPS

- Vercel provides automatic HTTPS
- Other platforms may require SSL certificate setup
- Ensure all external resources use HTTPS

### Form Security

- Implement CSRF protection for contact forms
- Use rate limiting to prevent spam
- Validate all user inputs server-side

## 📊 SEO Configuration

### Sitemap Generation

Add to `next.config.ts`:
```typescript
// Generate sitemap during build
const nextConfig = {
  // ... existing config
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ]
  }
}
```

### Meta Tags Verification

- Update Google Search Console verification in `layout.tsx`
- Set up Bing Webmaster Tools
- Configure social media meta tags

## 🚀 Going Live

### Final Steps

1. **DNS Configuration**
   - Point your domain to hosting provider
   - Set up www redirect if needed
   - Configure email forwarding

2. **SSL Certificate**
   - Verify HTTPS is working
   - Update all internal links to use HTTPS

3. **Testing**
   - Test all functionality on live site
   - Verify mobile responsiveness
   - Check all forms and contact methods

4. **Launch Checklist**
   - [ ] All pages load correctly
   - [ ] Contact forms work
   - [ ] Mobile design is perfect
   - [ ] SSL certificate is active
   - [ ] Analytics are tracking
   - [ ] Search engines can crawl the site

## 📞 Support

If you encounter any issues during deployment:

1. Check the build logs for specific error messages
2. Verify all environment variables are set correctly
3. Ensure all dependencies are properly installed
4. Test the build locally before deploying

For platform-specific issues:
- **Vercel**: Check Vercel documentation and community
- **Netlify**: Refer to Netlify support docs
- **AWS**: Consult AWS Amplify documentation

---

🎉 **Congratulations!** Your professional cybersecurity consulting website is now live and ready to attract clients! 