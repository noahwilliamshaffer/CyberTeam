# �� Deployment Guide - Sentinel Shield LLC Website

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
   git commit -m "Initial commit: Sentinel Shield LLC website"
   git branch -M main
   git remote add origin https://github.com/yourusername/sentinelshield-consulting.git
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
NEXT_PUBLIC_SITE_NAME="Sentinel Shield LLC"

# Contact Form (if using a service like Formspree)
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Email Service (if implementing contact form backend)
EMAIL_FROM=noahwilliamshaffer@gmail.com
EMAIL_TO=noahwilliamshaffer@gmail.com
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```