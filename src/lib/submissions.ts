import { collection, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

// Types for form submissions
export interface QuoteSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  companySize: string;
  services: string[];
  timeline: string;
  budget: string;
  description: string;
  urgency: string;
  submittedAt: Timestamp;
  status: 'new' | 'reviewed' | 'contacted' | 'quoted' | 'closed';
  source: 'website';
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  submittedAt: Timestamp;
  status: 'new' | 'reviewed' | 'responded' | 'closed';
  source: 'website';
}

// Submit quote request to Firebase
export async function submitQuoteRequest(formData: Omit<QuoteSubmission, 'submittedAt' | 'status' | 'source'>) {
  try {
    const submissionData: QuoteSubmission = {
      ...formData,
      submittedAt: serverTimestamp() as Timestamp,
      status: 'new',
      source: 'website'
    };

    const docRef = await addDoc(collection(db, 'quotes'), submissionData);
    console.log('Quote submission successful with ID:', docRef.id);
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting quote request:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Submit general contact form to Firebase
export async function submitContactForm(formData: Omit<ContactSubmission, 'submittedAt' | 'status' | 'source'>) {
  try {
    const submissionData: ContactSubmission = {
      ...formData,
      submittedAt: serverTimestamp() as Timestamp,
      status: 'new',
      source: 'website'
    };

    const docRef = await addDoc(collection(db, 'contacts'), submissionData);
    console.log('Contact submission successful with ID:', docRef.id);
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Subscribe to newsletter
export async function subscribeToNewsletter(email: string) {
  try {
    const submissionData = {
      email,
      subscribedAt: serverTimestamp() as Timestamp,
      source: 'website',
      status: 'active'
    };

    const docRef = await addDoc(collection(db, 'newsletter'), submissionData);
    console.log('Newsletter subscription successful with ID:', docRef.id);
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
} 