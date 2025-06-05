import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
// You'll need to replace these with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "demo-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:abcdef123456",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-ABCDEF123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Connect to Firestore emulator in development
if (typeof window !== 'undefined') {
  // Connect to emulator when using demo config or when explicitly enabled
  const shouldUseEmulator = firebaseConfig.projectId === 'demo-project' || 
    (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true');
  
  if (shouldUseEmulator) {
    try {
      connectFirestoreEmulator(db, 'localhost', 8080);
      console.log('🔥 Connected to Firestore emulator');
    } catch (error) {
      console.log('Firestore emulator already connected:', error);
    }
  }
}

// Initialize Analytics (optional)
export const analytics = typeof window !== 'undefined' && firebaseConfig.projectId !== 'demo-project' 
  ? getAnalytics(app) 
  : null;

export default app; 