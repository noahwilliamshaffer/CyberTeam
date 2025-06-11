"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, 
  Globe, 
  Search,
  CheckCircle, 
  ArrowRight,
  Mail,
  Phone,
  FileText,
  AlertTriangle,
  ShieldCheck,
  Target,
  Database,
  Settings,
  Monitor
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Online Website Security Scanning",
      description: "Identify and address vulnerabilities in your live website before attackers do.",
      features: [
        "Continuous scanning of your public-facing site",
        "Detection of known CVEs and misconfigurations", 
        "OWASP Top 10 coverage",
        "Cross-Site Scripting (XSS) and SQL Injection testing",
        "Alerts for outdated libraries and exposed endpoints"
      ],
      ctaText: "Start Website Scan",
      ctaLink: "/contact"
    },
    {
      id: 2,
      icon: Search,
      title: "Nessus Vulnerability Scans",
      description: "Industry-standard internal and external scans using Tenable Nessus for vulnerability detection and compliance checks.",
      features: [
        "Authenticated and unauthenticated Nessus scans",
        "Full CVSS scoring for discovered issues",
        "Scans of endpoints, servers, and network devices",
        "Exportable PDF and CSV reports",
        "Actionable remediation recommendations"
      ],
      ctaText: "Request Nessus Assessment",
      ctaLink: "/contact"
    },
    {
      id: 3,
      icon: Shield,
      title: "CIS IG1-Based Protection",
      description: "Asset visibility, threat reduction, and compliance-aligned services built on the CIS Controls v8 – Implementation Group 1 (IG1) framework.",
      features: [
        "Inventory and control of hardware and software assets",
        "Secure configuration, access management, and patching",
        "Basic incident response planning and recovery",
        "Malware defenses, audit log management, and user training",
        "Documentation for HIPAA, PCI-DSS, and SOC 2 prep"
      ],
      ctaText: "Secure with CIS IG1",
      ctaLink: "/contact"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 security-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Core Cybersecurity Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Sentinel Shield delivers high-impact cybersecurity services tailored for small to 
              medium-sized organizations seeking essential protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-cyber-500 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Service Icon and Title */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-cyber-100 dark:bg-cyber-900/30 rounded-xl group-hover:bg-cyber-200 dark:group-hover:bg-cyber-800/50 transition-colors">
                        <service.icon className="h-10 w-10 text-cyber-600 dark:text-cyber-400" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Features and CTA */}
                  <div className="lg:w-2/3">
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyber-500 mr-2" />
                        What's Included
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-cyber-500 rounded-full mt-3 mr-3"></div>
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={service.ctaLink}
                      className="inline-flex items-center px-8 py-4 bg-cyber-600 hover:bg-cyber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-glow group"
                    >
                      {service.ctaText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-cyber-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Don't wait for a security incident. Contact our cybersecurity experts today 
                  for immediate support and consultation.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                  <div className="flex items-center justify-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Mail className="h-6 w-6 mr-3 text-blue-200" />
                    <div className="text-left">
                      <div className="text-sm text-blue-200">Email Us</div>
                      <a 
                        href="mailto:noahwilliamshaffer@gmail.com"
                        className="text-white font-semibold hover:text-blue-200 transition-colors"
                      >
                        noahwilliamshaffer@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Phone className="h-6 w-6 mr-3 text-blue-200" />
                    <div className="text-left">
                      <div className="text-sm text-blue-200">Call Us</div>
                      <a 
                        href="tel:+19414519208"
                        className="text-white font-semibold hover:text-blue-200 transition-colors"
                      >
                        +1 (941) 451-9208
                      </a>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-cyber-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 