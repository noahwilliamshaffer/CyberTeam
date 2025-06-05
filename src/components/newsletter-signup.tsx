import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Send, Shield } from 'lucide-react';
import { subscribeToNewsletter } from '@/lib/submissions';
import { useToast, ToastContainer } from '@/components/toast';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterSignupProps {
  title?: string;
  subtitle?: string;
  className?: string;
  compact?: boolean;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = "Stay Updated with Security Insights",
  subtitle = "Get the latest cybersecurity tips, threat intelligence, and industry insights delivered to your inbox weekly.",
  className = "",
  compact = false
}) => {
  const { toasts, removeToast, showSuccess, showError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (formData: NewsletterFormData) => {
    try {
      const result = await subscribeToNewsletter(formData.email);
      
      if (result.success) {
        showSuccess(
          'Successfully Subscribed!',
          'Welcome to our newsletter! You\'ll receive our latest security insights weekly.',
          7000
        );
        reset();
      } else {
        throw new Error(result.error || 'Subscription failed');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      showError(
        'Subscription Failed',
        'There was an error subscribing to our newsletter. Please try again.',
        7000
      );
    }
  };

  if (compact) {
    return (
      <>
        <div className={`${className}`}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                {...register('email')}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:ring-2 focus:ring-cyber-500 focus:border-transparent"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white text-cyber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyber-600"></div>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </>
              )}
            </motion.button>
          </form>
        </div>
        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </>
    );
  }

  return (
    <>
      <div className={`bg-gradient-to-r from-cyber-600 to-cyber-800 text-white rounded-xl p-8 ${className}`}>
        <div className="text-center mb-6">
          <Shield className="h-12 w-12 mx-auto mb-4 text-cyber-200" />
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-cyber-100">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <input
              {...register('email')}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-200">{errors.email.message}</p>
            )}
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-white text-cyber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyber-600"></div>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </>
            )}
          </motion.button>
        </form>

        <p className="text-xs text-cyber-200 text-center mt-4">
          <Mail className="h-3 w-3 inline mr-1" />
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
      
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}; 