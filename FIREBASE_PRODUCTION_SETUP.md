# Firebase Production Setup Guide

## Overview
This guide shows you how to set up a **real Firebase project** for production use, including database structure, security rules, and environment configuration.

**Note**: This is different from the emulator setup in `FIREBASE_TESTING.md` - this is for actual deployment.

## Step 1: Create Firebase Project

### 1.1 Firebase Console Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `sentinel-shield-consulting` (or your preferred name)
4. Enable Google Analytics (optional but recommended)
5. Choose or create a Google Analytics account
6. Click "Create project"

### 1.2 Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode" (we'll add rules later)
4. Select a region close to your users (e.g., `us-central1`)
5. Click "Done"

## Step 2: Configure Database Structure

### 2.1 Collections to Create
Your app will automatically create these collections when the first document is added, but here's the structure:

#### `quotes` Collection
```
quotes/
  └── {documentId}/
      ├── firstName: string
      ├── lastName: string
      ├── email: string
      ├── phone: string
      ├── company: string
      ├── jobTitle: string
      ├── companySize: string
      ├── services: array<string>
      ├── timeline: string
      ├── budget: string
      ├── description: string
      ├── urgency: string
      ├── submittedAt: timestamp
      ├── status: string ("new", "contacted", "qualified", "proposal", "closed")
      └── source: string ("website")
```

#### `contacts` Collection
```
contacts/
  └── {documentId}/
      ├── name: string
      ├── email: string
      ├── message: string
      ├── submittedAt: timestamp
      ├── status: string ("new", "responded", "closed")
      └── source: string ("website")
```

#### `newsletter` Collection
```
newsletter/
  └── {documentId}/
      ├── email: string
      ├── subscribedAt: timestamp
      ├── source: string ("website")
      └── status: string ("active", "unsubscribed")
```

## Step 3: Security Rules

### 3.1 Configure Firestore Rules
1. In Firebase Console, go to "Firestore Database"
2. Click on "Rules" tab
3. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow writes to quotes collection from website
    match /quotes/{document} {
      allow create: if request.auth == null 
        && validateQuoteData(request.resource.data);
      allow read, update, delete: if request.auth != null; // Admin only
    }
    
    // Allow writes to contacts collection from website
    match /contacts/{document} {
      allow create: if request.auth == null 
        && validateContactData(request.resource.data);
      allow read, update, delete: if request.auth != null; // Admin only
    }
    
    // Allow writes to newsletter collection from website
    match /newsletter/{document} {
      allow create: if request.auth == null 
        && validateNewsletterData(request.resource.data);
      allow read, update, delete: if request.auth != null; // Admin only
    }
    
    // Validation functions
    function validateQuoteData(data) {
      return data.keys().hasAll(['firstName', 'lastName', 'email', 'submittedAt', 'status', 'source'])
        && data.firstName is string && data.firstName.size() > 0
        && data.lastName is string && data.lastName.size() > 0
        && data.email is string && data.email.matches('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')
        && data.submittedAt is timestamp
        && data.status == 'new'
        && data.source == 'website';
    }
    
    function validateContactData(data) {
      return data.keys().hasAll(['name', 'email', 'message', 'submittedAt', 'status', 'source'])
        && data.name is string && data.name.size() > 0
        && data.email is string && data.email.matches('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')
        && data.message is string && data.message.size() > 0
        && data.submittedAt is timestamp
        && data.status == 'new'
        && data.source == 'website';
    }
    
    function validateNewsletterData(data) {
      return data.keys().hasAll(['email', 'subscribedAt', 'source', 'status'])
        && data.email is string && data.email.matches('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')
        && data.subscribedAt is timestamp
        && data.status == 'active'
        && data.source == 'website';
    }
  }
}
```

4. Click "Publish"

## Step 4: Get Configuration Keys

### 4.1 Web App Configuration
1. In Firebase Console, go to "Project Settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select web icon (`</>`)
4. Enter app nickname: `Sentinel Shield Website`
5. Check "Also set up Firebase Hosting" (optional)
6. Click "Register app"
7. Copy the configuration object - it looks like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyExample...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
  measurementId: "G-MEASUREMENT123"
};
```

## Step 5: Environment Variables

### 5.1 Local Development (.env.local)
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyExample...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-MEASUREMENT123

# Set to false for production Firebase
NEXT_PUBLIC_USE_FIREBASE_EMULATOR=false
```

### 5.2 Vercel Deployment
In your Vercel dashboard:
1. Go to your project
2. Click "Settings" tab
3. Click "Environment Variables"
4. Add each variable from above

## Step 6: Test the Setup

### 6.1 Local Testing with Real Firebase
1. Add the `.env.local` file with your real Firebase config
2. Set `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=false`
3. Run `npm run dev`
4. Test form submissions
5. Check Firebase Console > Firestore Database to see the data

### 6.2 Production Testing
1. Deploy to Vercel with environment variables set
2. Test all forms on the live site
3. Monitor Firebase Console for incoming data

## Step 7: Additional Firebase Features (Optional)

### 7.1 Firebase Analytics
- Automatically enabled if you included it during project creation
- View user behavior and form conversion rates

### 7.2 Firebase Authentication (Future)
- If you want to add admin login to view submissions
- Set up in Firebase Console > Authentication

### 7.3 Firebase Hosting (Alternative to Vercel)
- Deploy directly to Firebase instead of Vercel
- Run `firebase init hosting` and `firebase deploy`

## Security Best Practices

### ✅ Current Security Features
- Anonymous writes only (no authentication required for form submissions)
- Validation rules prevent malicious data
- Read/update/delete requires authentication (admin only)
- Email format validation
- Required field validation

### 🔐 Additional Security Considerations
- **Rate Limiting**: Consider implementing rate limiting for form submissions
- **Spam Protection**: Add reCAPTCHA to forms if needed
- **Data Retention**: Set up automatic data deletion policies
- **Monitoring**: Set up Firebase alerts for unusual activity

## Troubleshooting

### Common Issues
1. **Permission Denied**: Check security rules are published
2. **Environment Variables**: Ensure all variables are set correctly
3. **CORS Errors**: Make sure domain is authorized in Firebase
4. **Quota Exceeded**: Monitor Firebase usage limits

### Debug Steps
1. Check browser console for errors
2. Verify environment variables are loaded
3. Test with Firebase Console > Firestore > Data tab
4. Check Network tab for failed requests

## Cost Considerations

### Firebase Pricing (Free Tier Limits)
- **Firestore**: 50,000 reads, 20,000 writes, 20,000 deletes per day
- **Storage**: 1 GiB total
- **Bandwidth**: 10 GiB per month

### Typical Usage for Consulting Website
- Quote forms: ~5-50 submissions/month
- Contact forms: ~10-100 submissions/month  
- Newsletter: ~20-200 signups/month
- **Verdict**: Should stay within free tier easily

## Next Steps

1. ✅ Create Firebase project
2. ✅ Set up Firestore database
3. ✅ Configure security rules
4. ✅ Get configuration keys
5. ✅ Set environment variables
6. ✅ Test locally
7. ✅ Deploy to production
8. ✅ Monitor submissions

Your cybersecurity consulting website will be ready to receive and store real customer inquiries! 