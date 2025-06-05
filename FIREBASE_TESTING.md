# Firebase Local Testing Guide

## Overview
This guide shows you how to test Firebase form submissions locally using Firebase emulators, without needing to set up a real Firebase project.

## Prerequisites
- Firebase CLI installed globally (`npm install -g firebase-tools`)
- Project dependencies installed (`npm install`)

## Quick Start Testing

### 1. Start Firebase Emulators
```bash
# Option 1: Just start Firestore emulator
npm run emulators

# Option 2: Start emulators with web UI (recommended)
npm run emulators:ui

# Option 3: Start both emulators and dev server together
npm run test:local
```

### 2. Access the Application
- **Website**: http://localhost:3000
- **Firebase Emulator UI**: http://localhost:4000 (if using emulators:ui)
- **Firestore Emulator**: localhost:8080

## Testing Forms

### Quote Request Form
1. Navigate to http://localhost:3000/quote
2. Fill out the form completely
3. Submit the form
4. Check the Firestore emulator UI at http://localhost:4000 to see the data
5. Look for data in the `quotes` collection

### Contact Form (if implemented)
1. Use the ContactForm component wherever it's placed
2. Submit a contact message
3. Check the `contacts` collection in the emulator UI

### Newsletter Signup (if implemented)
1. Use the NewsletterSignup component
2. Enter an email and subscribe
3. Check the `newsletter` collection in the emulator UI

## Emulator Features

### Firestore Emulator UI (Port 4000)
- View all collections and documents
- Manually add/edit/delete data
- Export data to files
- Import seed data
- Clear all data

### What Gets Saved
The following data will be saved to the emulated Firestore:

#### Quotes Collection
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Example Corp",
  "jobTitle": "CTO",
  "companySize": "11-50",
  "services": ["penetration-testing", "security-audits"],
  "timeline": "1-month",
  "budget": "10k-25k",
  "description": "We need a security assessment...",
  "urgency": "medium",
  "submittedAt": "2024-01-15T10:30:00Z",
  "status": "new",
  "source": "website"
}
```

#### Contacts Collection
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "I have a question about your services...",
  "submittedAt": "2024-01-15T10:30:00Z",
  "status": "new",
  "source": "website"
}
```

#### Newsletter Collection
```json
{
  "email": "subscriber@example.com",
  "subscribedAt": "2024-01-15T10:30:00Z",
  "source": "website",
  "status": "active"
}
```

## Debugging

### Console Logs
Look for these messages in your browser console:
- `🔥 Connected to Firestore emulator` - Emulator connection successful
- `Quote submission successful with ID: [doc-id]` - Form submission worked
- Error messages if something goes wrong

### Common Issues

1. **Port already in use**: Stop other instances of the emulator
2. **Connection refused**: Make sure emulators are running first
3. **Data not appearing**: Check browser console for errors

### Reset Data
To clear all test data:
1. Go to http://localhost:4000
2. Click on Firestore
3. Use "Clear all data" button

## Switching to Production
When ready to deploy:
1. Create a real Firebase project
2. Set up environment variables (see FIREBASE_SETUP.md)
3. Remove or set `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=false`
4. Deploy to Vercel with real Firebase config

## Commands Reference

```bash
# Development with emulators
npm run dev                    # Just Next.js dev server
npm run emulators             # Just Firebase emulators
npm run emulators:ui          # Emulators with web UI
npm run test:local            # Both emulators and dev server

# Build and test
npm run build                 # Build production version
npm run start                 # Start production server
npm run lint                  # Check code quality
```

## Testing Checklist

- [ ] Emulators start without errors
- [ ] Website loads at localhost:3000
- [ ] Quote form submits successfully
- [ ] Data appears in Firestore emulator UI
- [ ] Toast notifications work
- [ ] Form validation works
- [ ] All form fields save correctly
- [ ] Status fields are set properly
- [ ] Timestamps are recorded 