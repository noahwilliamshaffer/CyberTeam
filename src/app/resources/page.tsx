"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, 
  Award, 
  Target, 
  Eye, 
  Search,
  Lock,
  Globe,
  AlertTriangle,
  BookOpen,
  Users,
  CheckCircle,
  ExternalLink,
  Mail
} from 'lucide-react';

const ErwinBrunoPage = () => {
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  const certifications = [
    {
      id: 'ceh',
      name: 'EC-Council CEH',
      fullName: 'Certified Ethical Hacker',
      description: 'Demonstrates knowledge of penetration testing methodologies and ethical hacking techniques.',
      icon: Shield
    },
    {
      id: 'pentest',
      name: 'CompTIA PenTest+',
      fullName: 'CompTIA PenTest+ Certification',
      description: 'Validates skills in vulnerability assessment and penetration testing engagements.',
      icon: Target
    },
    {
      id: 'security',
      name: 'CompTIA Security+',
      fullName: 'CompTIA Security+ Certification',
      description: 'Proves competency in network security, compliance and operational security.',
      icon: Lock
    },
    {
      id: 'network',
      name: 'CompTIA Network+',
      fullName: 'CompTIA Network+ Certification',
      description: 'Validates networking knowledge including design, configuration, and troubleshooting.',
      icon: Globe
    },
    {
      id: 'aplus',
      name: 'CompTIA A+',
      fullName: 'CompTIA A+ Certification',
      description: 'Foundation-level certification covering essential IT skills.',
      icon: Award
    },
    {
      id: 'itf',
      name: 'CompTIA ITF+',
      fullName: 'CompTIA IT Fundamentals+',
      description: 'Entry-level certification validating basic IT literacy.',
      icon: BookOpen
    },
    {
      id: 'az900',
      name: 'Microsoft AZ-900',
      fullName: 'Azure Fundamentals',
      description: 'Demonstrates foundational knowledge of cloud services with Microsoft Azure.',
      icon: Eye
    },
    {
      id: 'ms900',
      name: 'Microsoft MS-900',
      fullName: 'Microsoft 365 Fundamentals',
      description: 'Validates understanding of Microsoft 365 services.',
      icon: Users
    },
    {
      id: 'osha',
      name: 'OSHA 10-Hour Safety',
      fullName: 'OSHA 10-Hour Safety Certificate',
      description: 'Workplace safety training covering hazard recognition and prevention.',
      icon: AlertTriangle
    }
  ];

  const capabilities = [
    {
      icon: Search,
      title: 'Penetration Testing',
      subtitle: 'Internal & External',
      description: 'Comprehensive security assessments using advanced exploitation techniques.',
      features: ['Network Penetration Testing', 'Wireless Security Assessment', 'Social Engineering Testing', 'Physical Security Evaluation']
    },
    {
      icon: Globe,
      title: 'Web App Pentesting',
      subtitle: 'OWASP Top 10',
      description: 'Specialized testing focusing on OWASP Top 10 vulnerabilities.',
      features: ['SQL Injection Testing', 'XSS Vulnerability Assessment', 'Authentication Bypass', 'Session Management Testing']
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Scanning',
      subtitle: '+ Detailed Reporting',
      description: 'Automated and manual vulnerability assessments with comprehensive reporting.',
      features: ['Automated Scanning', 'Manual Verification', 'Risk Prioritization', 'Executive Reporting']
    },
    {
      icon: Eye,
      title: 'OSINT Recon',
      subtitle: '& Attack Surface Mapping',
      description: 'Open Source Intelligence gathering to map your digital footprint.',
      features: ['Digital Footprint Analysis', 'Social Media Intelligence', 'DNS Reconnaissance', 'Subdomain Discovery']
    },
    {
      icon: Users,
      title: 'Security Awareness Training',
      subtitle: 'Human Layer Defense',
      description: 'Comprehensive training programs to educate employees about cybersecurity threats.',
      features: ['Phishing Simulation', 'Security Workshops', 'Policy Training', 'Incident Response Training']
    },
    {
      icon: CheckCircle,
      title: 'Security Audits',
      subtitle: 'CIS, NIST, ISO Standards',
      description: 'Thorough security audits against industry frameworks.',
      features: ['CIS Controls Assessment', 'NIST Framework Alignment', 'ISO 27001 Auditing', 'Gap Analysis']
    },
    {
      icon: Shield,
      title: 'Compliance Assistance',
      subtitle: 'HIPAA, PCI-DSS',
      description: 'Expert guidance for achieving and maintaining compliance.',
      features: ['HIPAA Compliance', 'PCI-DSS Assessment', 'SOX Compliance', 'Regulatory Reporting']
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyber-600 via-cyber-700 to-cyber-800 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-32 h-32 mx-auto mb-8"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyber-300 to-cyber-500 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-cyber-300" />
                </div>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🔐 Meet Erwin Bruno
            </h1>
            
            <p className="text-2xl md:text-3xl text-cyber-100 mb-4 font-semibold">
              Veteran Cybersecurity Expert, Red Team Lead, and Industry-Certified Professional
            </p>

            <div className="text-lg text-cyber-200 max-w-4xl mx-auto leading-relaxed">
              Discipline forged in service. Precision executed in cyberspace.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyber-500/20 to-purple-500/20 p-8 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                  <Shield className="h-32 w-32 text-cyber-400" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-cyber-600 text-white px-4 py-2 rounded-lg font-semibold">
                🇺🇸 U.S. Veteran
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                &ldquo;Discipline forged in service. Precision executed in cyberspace.&rdquo;
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Erwin Bruno brings a wealth of experience from his military service and years in the cybersecurity trenches. As our Technical Lead, he oversees all penetration testing, security audits, and compliance projects with precision and professionalism.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-cyber-50 dark:bg-cyber-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-cyber-700 dark:text-cyber-300 mb-2">Role</h4>
                    <p className="text-gray-900 dark:text-white">Tech Lead / Red Team Operator</p>
                  </div>
                  <div className="bg-cyber-50 dark:bg-cyber-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-cyber-700 dark:text-cyber-300 mb-2">Background</h4>
                    <p className="text-gray-900 dark:text-white">U.S. Veteran</p>
                  </div>
                  <div className="bg-cyber-50 dark:bg-cyber-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-cyber-700 dark:text-cyber-300 mb-2">Leadership</h4>
                    <p className="text-gray-900 dark:text-white">Heads all offensive testing operations</p>
                  </div>
                  <div className="bg-cyber-50 dark:bg-cyber-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-cyber-700 dark:text-cyber-300 mb-2">Specializes in</h4>
                    <p className="text-gray-900 dark:text-white">Advanced exploitation, human-layer OSINT, secure architecture guidance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Award className="h-16 w-16 mx-auto mb-6 text-cyber-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industry Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Proven expertise across multiple cybersecurity domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                  onMouseEnter={() => setHoveredCert(cert.id)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-cyber-500 transition-all duration-300 hover:shadow-lg group cursor-pointer h-full">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-8 w-8 text-cyber-600 group-hover:text-cyber-500 transition-colors" />
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyber-600 dark:group-hover:text-cyber-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {cert.fullName}
                    </p>
                    
                    {/* Tooltip */}
                    {hoveredCert === cert.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-10 bottom-full left-0 right-0 mb-2 p-3 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-lg shadow-lg border border-gray-700"
                      >
                        {cert.description}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Target className="h-16 w-16 mx-auto mb-6 text-cyber-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive cybersecurity expertise across all domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-cyber-50/50 dark:from-gray-800 dark:to-cyber-900/20 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-cyber-500 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyber-600 p-3 rounded-lg group-hover:bg-cyber-500 transition-colors">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-cyber-600 dark:text-cyber-400 font-medium mb-3">
                        {capability.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {capability.description}
                      </p>
                      <ul className="space-y-2">
                        {capability.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyber-600 to-cyber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in having Erwin assess your environment?
            </h2>
            <p className="text-xl text-cyber-100 mb-8 max-w-2xl mx-auto">
              Get a comprehensive security assessment from our veteran cybersecurity expert. 
              Protect your business with military-grade precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-white text-cyber-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
              >
                Request Security Assessment
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:info@sentinelshield.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyber-700 transition-colors group"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Erwin Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ErwinBrunoPage; 