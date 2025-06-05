"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, 
  Search, 
  Users, 
  CheckCircle, 
  FileCheck, 
  Globe,
  ArrowRight,
  Star,
  Award,
  Zap
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
      features: ["Network Security", "Application Testing", "Social Engineering", "Physical Security"]
    },
    {
      icon: Globe,
      title: "Web App Security",
      description: "OWASP Top 10 focused testing to secure your web applications against common threats.",
      features: ["SQL Injection", "XSS Prevention", "Authentication", "Session Management"]
    },
    {
      icon: Search,
      title: "OSINT Assessment",
      description: "Open Source Intelligence gathering to reveal exploitable public information.",
      features: ["Data Exposure", "Social Media", "Domain Analysis", "Employee Info"]
    },
    {
      icon: FileCheck,
      title: "Security Audits",
      description: "Detailed security audits based on NIST and CIS frameworks for compliance.",
      features: ["NIST Framework", "CIS Controls", "Risk Assessment", "Remediation Plans"]
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Cybersecurity awareness training to educate your team about threats.",
      features: ["Phishing Awareness", "Best Practices", "Incident Response", "Regular Updates"]
    },
    {
      icon: CheckCircle,
      title: "Compliance Assistance",
      description: "Help achieve and maintain compliance with HIPAA, PCI-DSS, and other standards.",
      features: ["HIPAA Compliance", "PCI-DSS", "SOX", "Ongoing Support"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Sentinel Shield LLC identified critical vulnerabilities we never knew existed. Their thorough approach and detailed reporting helped us strengthen our security posture significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Security Manager, FinanceFirst",
      content: "The penetration testing revealed several security gaps that could have been catastrophic. Their team is professional, knowledgeable, and delivers actionable results.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, HealthTech Solutions",
      content: "Excellent HIPAA compliance guidance. They helped us navigate complex requirements and implement robust security measures. Highly recommended!",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Security Assessments" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Veteran Experts" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 security-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Protect Your Business with
                <span className="text-transparent bg-clip-text cyber-gradient"> Expert Cybersecurity</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Professional cybersecurity consulting services including penetration testing, 
                security audits, compliance assistance, and threat assessments to keep your 
                business secure from evolving digital threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center px-8 py-4 bg-cyber-600 hover:bg-cyber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-glow"
                >
                  Get Free Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 hover:border-cyber-400 text-white font-semibold rounded-lg transition-all duration-300 glass-effect"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-cyber-500/20 to-purple-500/20 rounded-2xl p-8 glass-effect animate-float">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-cyber-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-gray-300">Protection</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <Award className="h-8 w-8 text-cyber-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-300">Assessments</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <Zap className="h-8 w-8 text-cyber-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <Users className="h-8 w-8 text-cyber-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-gray-300">Experts</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer a complete range of cybersecurity services to protect your business 
              from all angles of digital threats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:border-cyber-500"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyber-100 dark:bg-cyber-900/30 rounded-lg group-hover:bg-cyber-200 dark:group-hover:bg-cyber-800/50 transition-colors">
                    <service.icon className="h-6 w-6 text-cyber-600 dark:text-cyber-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cyber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-cyber-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Trusted by businesses worldwide for exceptional cybersecurity services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait for a security breach. Get started with a comprehensive 
              security assessment today and protect your valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-cyber-600 hover:bg-cyber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 hover:border-cyber-400 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 