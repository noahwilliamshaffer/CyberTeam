"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Shield, 
  Mail, 
  Phone, 
  Building, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { submitQuote } from '@/lib/submissions';
import { useToast, ToastContainer } from '@/components/toast';

const quoteSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  companySize: z.string().min(1, 'Please select company size'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  timeline: z.string().min(1, 'Please select a timeline'),
  budget: z.string().min(1, 'Please select a budget range'),
  description: z.string().min(10, 'Please provide more details about your requirements'),
  urgency: z.string().min(1, 'Please select urgency level'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuotePage = () => {
  const { toasts, removeToast, showSuccess, showError } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      services: [],
    }
  });

  const onSubmit = async (formData: QuoteFormData) => {
    try {
      // Transform form data to match MongoDB structure
      const mongoData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        employeeCount: formData.companySize, // Map companySize to employeeCount
        services: formData.services,
        timeline: formData.timeline,
        budget: formData.budget,
        message: `${formData.description}\n\nJob Title: ${formData.jobTitle}\nUrgency: ${formData.urgency}` // Combine description with extra fields
      };

      // Submit to MongoDB
      const result = await submitQuote(mongoData);
      
      if (result.success) {
        showSuccess(
          'Quote Request Submitted!',
          `Thank you for your request! We will contact you within 24 hours.`,
          7000
        );
        reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      showError(
        'Submission Failed',
        'There was an error submitting your request. Please try again or contact us directly.',
        7000
      );
    }
  };

  const services = [
    {
      id: 'penetration-testing',
      name: 'Penetration Testing',
      description: 'Internal and external assessments to identify vulnerabilities'
    },
    {
      id: 'web-app-security',
      name: 'Web App Security (OWASP Top 10)',
      description: 'Deep testing for injection flaws and access control failures'
    },
    {
      id: 'vulnerability-scanning',
      name: 'Vulnerability Scanning',
      description: 'Automated and manual scanning with actionable reporting'
    },
    {
      id: 'osint-threat-mapping',
      name: 'OSINT & Threat Surface Mapping',
      description: 'Identify publicly exposed data attackers can use'
    },
    {
      id: 'cybersecurity-training',
      name: 'Cybersecurity Training',
      description: 'Staff awareness programs to reduce human error'
    },
    {
      id: 'security-audits',
      name: 'Security Checklists & Audits',
      description: 'CIS/NIST framework audits and misconfigurations'
    },
    {
      id: 'cis-control-implementation',
      name: 'CIS Control 1 Implementation',
      description: 'Asset inventory and lifecycle management'
    },
    {
      id: 'compliance-support',
      name: 'Compliance Support',
      description: 'HIPAA, PCI-DSS, ISO 27001 gap analysis and roadmaps'
    },
    {
      id: 'security-engineering-review',
      name: 'Security Engineering Review',
      description: 'Architecture-level evaluations with blue-team focus'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-cyber-600 to-cyber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="h-16 w-16 mx-auto mb-6 text-cyber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Custom Security Quote
            </h1>
            <p className="text-xl text-cyber-100 max-w-2xl mx-auto">
              Tell us about your security needs and we&apos;ll provide a tailored proposal 
              within 24 hours. All consultations are confidential and free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Users className="h-6 w-6 text-cyber-600 mr-2" />
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Building className="h-6 w-6 text-cyber-600 mr-2" />
                  Company Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Acme Corporation"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Job Title *
                    </label>
                    <input
                      {...register('jobTitle')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="CTO, Security Manager, etc."
                    />
                    {errors.jobTitle && (
                      <p className="mt-1 text-sm text-red-600">{errors.jobTitle.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Size *
                    </label>
                    <select
                      {...register('companySize')}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                    {errors.companySize && (
                      <p className="mt-1 text-sm text-red-600">{errors.companySize.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-cyber-600 mr-2" />
                  Required Services *
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-cyber-500 transition-colors cursor-pointer group"
                    >
                      <input
                        {...register('services')}
                        type="checkbox"
                        value={service.id}
                        className="mt-1 h-4 w-4 text-cyber-600 focus:ring-cyber-500 border-gray-300 rounded"
                      />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white group-hover:text-cyber-600 dark:group-hover:text-cyber-400">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {service.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-2 text-sm text-red-600">{errors.services.message}</p>
                )}
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timeline *
                  </label>
                  <select
                    {...register('timeline')}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Within 1 week)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months+">6+ months</option>
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range *
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                  )}
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Urgency Level *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'low', label: 'Low Priority', color: 'green' },
                    { value: 'medium', label: 'Medium Priority', color: 'yellow' },
                    { value: 'high', label: 'High Priority', color: 'red' }
                  ].map(({ value, label, color }) => (
                    <label key={value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        {...register('urgency')}
                        type="radio"
                        value={value}
                        className={`h-4 w-4 text-${color}-600 focus:ring-${color}-500 border-gray-300`}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
                    </label>
                  ))}
                </div>
                {errors.urgency && (
                  <p className="mt-1 text-sm text-red-600">{errors.urgency.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  {...register('description')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Please describe your security requirements, current challenges, compliance needs, or any specific concerns you'd like us to address..."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-4 bg-cyber-600 hover:bg-cyber-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-cyber-600 to-cyber-800 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-cyber-100 mb-6">
              For urgent security concerns or questions about our services, 
              contact us directly through any of the channels below.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-cyber-200" />
                <div>
                  <div className="font-semibold">Emergency Line</div>
                  <div className="text-cyber-100">+1 (555) CYBER-911</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-cyber-200" />
                <div>
                  <div className="font-semibold">Direct Email</div>
                  <div className="text-cyber-100">urgent@sentinelshield.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Toast Container */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
};

export default QuotePage; 