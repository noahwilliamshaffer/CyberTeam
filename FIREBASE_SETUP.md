# Firebase Setup Guide

## Prerequisites
1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Firestore Database in your Firebase project
3. Get your Firebase configuration from Project Settings > General > Your apps

## Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Firestore Database Structure

The application will create the following collections automatically:

### Quotes Collection (`quotes`)
- `firstName` (string)
- `lastName` (string)
- `email` (string)
- `phone` (string)
- `company` (string)
- `jobTitle` (string)
- `companySize` (string)
- `services` (array of strings)
- `timeline` (string)
- `budget` (string)
- `description` (string)
- `urgency` (string)
- `submittedAt` (timestamp)
- `status` (string: 'new' | 'reviewed' | 'contacted' | 'quoted' | 'closed')
- `source` (string: 'website')

### Contacts Collection (`contacts`)
- `name` (string)
- `email` (string)
- `message` (string)
- `submittedAt` (timestamp)
- `status` (string: 'new' | 'reviewed' | 'responded' | 'closed')
- `source` (string: 'website')

### Newsletter Collection (`newsletter`)
- `email` (string)
- `subscribedAt` (timestamp)
- `source` (string: 'website')
- `status` (string: 'active')

## Security Rules
Configure Firestore security rules to allow writes but restrict reads:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow writes to quotes, contacts, and newsletter collections
    match /{collection}/{document} {
      allow write: if collection in ['quotes', 'contacts', 'newsletter'];
      allow read: if false; // Only allow reads from backend/admin
    }
  }
}
```

## Deployment
When deploying to Vercel, add the environment variables in your Vercel project settings:
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each Firebase configuration variable
4. Redeploy your application 