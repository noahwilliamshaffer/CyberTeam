"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, 
  FileText, 
  Calendar,
  ArrowRight,
  Search,
  Download
} from 'lucide-react';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 12 },
    { id: 'security-tips', name: 'Security Tips', count: 5 },
    { id: 'case-studies', name: 'Case Studies', count: 3 },
    { id: 'threat-intel', name: 'Threat Intelligence', count: 2 },
    { id: 'compliance', name: 'Compliance', count: 2 }
  ];

  const resources = [
    {
      id: 1,
      title: "OWASP Top 10 2024: What's New and How to Protect Your Web Applications",
      excerpt: "Explore the latest OWASP Top 10 vulnerabilities and learn practical steps to secure your web applications against these critical threats.",
      category: 'security-tips',
      type: 'Guide',
      readTime: '8 min read',
      date: '2024-01-15',
      featured: true,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: "Case Study: Preventing a Multi-Million Dollar Breach at FinanceFirst",
      excerpt: "How our penetration testing identified critical vulnerabilities that could have led to a catastrophic data breach affecting 100,000+ customers.",
      category: 'case-studies',
      type: 'Case Study',
      readTime: '12 min read',
      date: '2024-01-10',
      featured: true,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: "The Rise of AI-Powered Phishing: New Threats and Defense Strategies",
      excerpt: "As cybercriminals leverage AI to create more sophisticated phishing attacks, organizations must adapt their security awareness training and technical controls.",
      category: 'threat-intel',
      type: 'Analysis',
      readTime: '10 min read',
      date: '2024-01-08',
      featured: false,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: "HIPAA Compliance Checklist: 15 Critical Security Controls for Healthcare",
      excerpt: "A comprehensive checklist of technical, administrative, and physical safeguards required for HIPAA compliance in 2024.",
      category: 'compliance',
      type: 'Checklist',
      readTime: '15 min read',
      date: '2024-01-05',
      featured: false,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: "Zero Trust Architecture: Implementation Guide for SMBs",
      excerpt: "Learn how small and medium businesses can implement Zero Trust security principles without breaking the budget.",
      category: 'security-tips',
      type: 'Guide',
      readTime: '12 min read',
      date: '2024-01-03',
      featured: false,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: "Supply Chain Attack Prevention: Lessons from Recent Breaches",
      excerpt: "Analyze recent supply chain attacks and discover strategies to protect your organization from third-party security risks.",
      category: 'threat-intel',
      type: 'Analysis',
      readTime: '9 min read',
      date: '2024-01-01',
      featured: false,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      title: "Case Study: How OSINT Revealed Critical Vulnerabilities at TechCorp",
      excerpt: "Discover how open source intelligence gathering uncovered sensitive information exposure that could have been exploited by attackers.",
      category: 'case-studies',
      type: 'Case Study',
      readTime: '11 min read',
      date: '2023-12-28',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      title: "5 Essential Security Metrics Every CISO Should Track",
      excerpt: "Key performance indicators and metrics that demonstrate the effectiveness of your cybersecurity program to stakeholders.",
      category: 'security-tips',
      type: 'Guide',
      readTime: '7 min read',
      date: '2023-12-25',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    }
  ];

  const whitepapers = [
    {
      title: "The State of Cybersecurity in 2024",
      description: "Comprehensive report on current threat landscape and emerging security challenges.",
      pages: 45,
      downloads: 2340
    },
    {
      title: "SMB Security Framework Guide",
      description: "Practical cybersecurity framework designed specifically for small and medium businesses.",
      pages: 32,
      downloads: 1890
    },
    {
      title: "Incident Response Playbook",
      description: "Step-by-step guide for effective incident response and business continuity.",
      pages: 28,
      downloads: 1567
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-cyber-600 to-cyber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-cyber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Security Resources & Insights
            </h1>
            <p className="text-xl text-cyber-100 max-w-3xl mx-auto">
              Stay ahead of cyber threats with our expert analysis, practical guides, 
              case studies, and actionable security insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyber-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {selectedCategory === 'all' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Featured Resources
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredResources.map((resource, index) => (
                  <motion.article
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-cyber-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(resource.date).toLocaleDateString()}
                        </span>
                        <span>{resource.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyber-600 dark:group-hover:text-cyber-400 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {resource.excerpt}
                      </p>
                      <Link
                        href={`/resources/${resource.id}`}
                        className="inline-flex items-center text-cyber-600 dark:text-cyber-400 font-medium hover:text-cyber-700 dark:hover:text-cyber-300 transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {selectedCategory === 'all' ? 'Latest Resources' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600 relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(resource.date).toLocaleDateString()}
                      </span>
                      <span>{resource.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyber-600 dark:group-hover:text-cyber-400 transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {resource.excerpt}
                    </p>
                    <Link
                      href={`/resources/${resource.id}`}
                      className="inline-flex items-center text-cyber-600 dark:text-cyber-400 font-medium hover:text-cyber-700 dark:hover:text-cyber-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Free Security Whitepapers
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Download our comprehensive guides and reports
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whitepapers.map((whitepaper, index) => (
                <motion.div
                  key={whitepaper.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-cyber-100 dark:bg-cyber-900/30 rounded-lg">
                      <FileText className="h-6 w-6 text-cyber-600 dark:text-cyber-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {whitepaper.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {whitepaper.description}
                  </p>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{whitepaper.pages} pages</span>
                    <span>{whitepaper.downloads.toLocaleString()} downloads</span>
                  </div>
                  <button className="w-full bg-cyber-600 hover:bg-cyber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-cyber-600 to-cyber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Security Insights
            </h2>
            <p className="text-xl text-cyber-100 mb-8">
              Get the latest cybersecurity tips, threat intelligence, and industry insights 
              delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-cyber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage; 