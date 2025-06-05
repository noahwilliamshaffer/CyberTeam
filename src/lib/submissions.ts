// MongoDB API service functions for form submissions

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  employeeCount: string;
  services: string[];
  timeline: string;
  budget: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

// Submit quote request
export const submitQuote = async (data: QuoteFormData): Promise<{ success: boolean; message: string; id?: string }> => {
  try {
    const response = await fetch('/api/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit quote request');
    }

    return {
      success: true,
      message: result.message,
      id: result.id,
    };
  } catch (error) {
    console.error('Quote submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit quote request',
    };
  }
};

// Submit contact form
export const submitContact = async (data: ContactFormData): Promise<{ success: boolean; message: string; id?: string }> => {
  try {
    const response = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit contact form');
    }

    return {
      success: true,
      message: result.message,
      id: result.id,
    };
  } catch (error) {
    console.error('Contact submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit contact form',
    };
  }
};

// Submit newsletter subscription
export const submitNewsletter = async (data: NewsletterFormData): Promise<{ success: boolean; message: string; id?: string }> => {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to subscribe to newsletter');
    }

    return {
      success: true,
      message: result.message,
      id: result.id,
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to subscribe to newsletter',
    };
  }
}; 