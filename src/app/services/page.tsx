"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, 
  Layers, 
  CheckCircle, 
  ArrowRight,
  Server,
  Database,
  Network,
  FileCheck,
  Users,
  Lock,
  AlertTriangle,
  Target,
  Zap,
  Settings,
  Monitor,
  Globe,
  Smartphone,
  Cloud,
  Bug,
  ShieldCheck
} from 'lucide-react';

const ServicesPage = () => {
  const cisControls = [
    {
      id: 1,
      title: "Inventory & Control of Hardware Assets",
      icon: Server,
      ig1: 2,
      ig2: 4,
      ig3: 5,
      total: 5
    },
    {
      id: 2,
      title: "Inventory & Control of Software Assets",
      icon: Database,
      ig1: 1,
      ig2: 4,
      ig3: 7,
      total: 7
    },
    {
      id: 3,
      title: "Data Protection",
      icon: Lock,
      ig1: 6,
      ig2: 12,
      ig3: 14,
      total: 14
    },
    {
      id: 4,
      title: "Secure Configuration",
      icon: Settings,
      ig1: 4,
      ig2: 8,
      ig3: 12,
      total: 12
    },
    {
      id: 5,
      title: "Account Management",
      icon: Users,
      ig1: 3,
      ig2: 5,
      ig3: 6,
      total: 6
    },
    {
      id: 6,
      title: "Access Control Management",
      icon: ShieldCheck,
      ig1: 5,
      ig2: 6,
      ig3: 8,
      total: 8
    },
    {
      id: 7,
      title: "Continuous Vulnerability Management",
      icon: AlertTriangle,
      ig1: 4,
      ig2: 7,
      ig3: 7,
      total: 7
    },
    {
      id: 8,
      title: "Audit Log Management",
      icon: FileCheck,
      ig1: 5,
      ig2: 8,
      ig3: 12,
      total: 12
    },
    {
      id: 9,
      title: "Email & Web Browser Protections",
      icon: Globe,
      ig1: 3,
      ig2: 5,
      ig3: 7,
      total: 7
    },
    {
      id: 10,
      title: "Malware Defenses",
      icon: Bug,
      ig1: 3,
      ig2: 5,
      ig3: 7,
      total: 7
    },
    {
      id: 11,
      title: "Data Recovery",
      icon: Database,
      ig1: 3,
      ig2: 4,
      ig3: 5,
      total: 5
    },
    {
      id: 12,
      title: "Network Infrastructure Management",
      icon: Network,
      ig1: 4,
      ig2: 6,
      ig3: 8,
      total: 8
    },
    {
      id: 13,
      title: "Network Monitoring & Defense",
      icon: Monitor,
      ig1: 6,
      ig2: 8,
      ig3: 11,
      total: 11
    },
    {
      id: 14,
      title: "Security Awareness & Training",
      icon: Users,
      ig1: 4,
      ig2: 7,
      ig3: 9,
      total: 9
    },
    {
      id: 15,
      title: "Service Provider Management",
      icon: Cloud,
      ig1: 4,
      ig2: 6,
      ig3: 7,
      total: 7
    },
    {
      id: 16,
      title: "Application Software Security",
      icon: Smartphone,
      ig1: 7,
      ig2: 11,
      ig3: 14,
      total: 14
    },
    {
      id: 17,
      title: "Incident Response Management",
      icon: Zap,
      ig1: 4,
      ig2: 6,
      ig3: 9,
      total: 9
    },
    {
      id: 18,
      title: "Penetration Testing",
      icon: Target,
      ig1: 0,
      ig2: 3,
      ig3: 5,
      total: 5
    }
  ];

  const tiers = [
    {
      id: 'ig1',
      name: 'IG1 - Foundation',
      subtitle: 'Small Organizations',
      description: 'Essential cybersecurity for organizations with limited IT resources',
      color: 'green',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      accentColor: 'text-green-600 dark:text-green-400',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      icon: Shield,
      features: [
        'Basic asset inventory',
        'Essential access controls',
        'Core data protection',
        'Fundamental vulnerability management',
        'Basic monitoring & logging'
      ],
      totalSafeguards: cisControls.reduce((sum, control) => sum + control.ig1, 0),
      price: 'Starting at $2,500/month'
    },
    {
      id: 'ig2',
      name: 'IG2 - Standard',
      subtitle: 'Mid-Size Organizations',
      description: 'Comprehensive security for moderate complexity environments',
      color: 'orange',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      accentColor: 'text-orange-600 dark:text-orange-400',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      icon: Layers,
      features: [
        'Advanced asset management',
        'Enhanced access controls',
        'Comprehensive data protection',
        'Continuous vulnerability scanning',
        'Advanced threat detection',
        'Security awareness training'
      ],
      totalSafeguards: cisControls.reduce((sum, control) => sum + control.ig2, 0),
      price: 'Starting at $5,500/month',
      popular: true
    },
    {
      id: 'ig3',
      name: 'IG3 - Advanced',
      subtitle: 'Enterprise Organizations',
      description: 'Maximum security for high-value data and regulated environments',
      color: 'blue',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      accentColor: 'text-blue-600 dark:text-blue-400',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      icon: ShieldCheck,
      features: [
        'Complete asset visibility',
        'Zero-trust architecture',
        'Advanced data loss prevention',
        'Real-time threat hunting',
        'Penetration testing',
        'Incident response team',
        'Compliance reporting'
      ],
      totalSafeguards: cisControls.reduce((sum, control) => sum + control.ig3, 0),
      price: 'Starting at $12,000/month'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CIS Framework-Based 
              <span className="text-transparent bg-clip-text cyber-gradient"> Cybersecurity Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our offerings are structured around the CIS v8 Critical Security Controls, 
              scaled for organizations of all maturity levels from small businesses to enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
                         {tiers.map((tier) => (
               <motion.div
                 key={tier.id}
                 variants={itemVariants}
                className={`relative ${tier.bgColor} ${tier.borderColor} border-2 rounded-2xl p-8 ${
                  tier.popular 
                    ? 'ring-4 ring-orange-200 dark:ring-orange-800 scale-105' 
                    : ''
                } hover:shadow-xl transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${tier.bgColor} ${tier.borderColor} border rounded-full mb-4`}>
                    <tier.icon className={`h-8 w-8 ${tier.accentColor}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${tier.accentColor} mb-2`}>
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                    {tier.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {tier.description}
                  </p>
                  <div className={`text-3xl font-bold ${tier.accentColor} mb-2`}>
                    {tier.price}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tier.totalSafeguards} total safeguards included
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className={`h-5 w-5 ${tier.accentColor} mr-3 flex-shrink-0`} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white">CIS Controls Coverage:</h4>
                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                    {cisControls.map((control) => {
                      const coverage = tier.id === 'ig1' ? control.ig1 : 
                                      tier.id === 'ig2' ? control.ig2 : control.ig3;
                      return (
                        <div key={control.id} className="flex items-center justify-between text-xs p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                          <span className="truncate mr-2">Control {control.id}</span>
                          <span className={`font-semibold ${tier.accentColor}`}>
                            {coverage}/{control.total}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="/quote"
                  className={`w-full inline-flex items-center justify-center px-6 py-4 ${tier.buttonColor} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {tier.id === 'ig1' ? 'Start with IG1' : 
                   tier.id === 'ig2' ? 'Choose IG2' : 'Protect at IG3'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Controls Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete CIS v8 Controls Breakdown
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See exactly which safeguards are included in each implementation group tier.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    CIS Control
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600 dark:text-green-400">
                    IG1
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600 dark:text-orange-400">
                    IG2
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                    IG3
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                 {cisControls.map((control) => (
                   <motion.tr
                     key={control.id}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }}
                     viewport={{ once: true }}
                     className="hover:bg-gray-50 dark:hover:bg-gray-800/50"
                   >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <control.icon className="h-5 w-5 text-cyber-600 dark:text-cyber-400 mr-3" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Control {control.id}: {control.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        {control.ig1}/{control.total}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100">
                        {control.ig2}/{control.total}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                        {control.ig3}/{control.total}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyber-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Strengthen Your Security Posture?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you determine the right CIS implementation group for your organization 
              and create a customized security roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-white text-cyber-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Learn About Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 