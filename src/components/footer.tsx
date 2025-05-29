"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-cyber-400" />
              <span className="font-bold text-xl">Sentinel Shield LLC</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner in cybersecurity excellence. We protect businesses 
              from digital threats with comprehensive security solutions and expert consulting.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://twitter.com/sentinelshield" 
                className="text-gray-300 hover:text-cyber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/sentinelshield" 
                className="text-gray-300 hover:text-cyber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/sentinelshield" 
                className="text-gray-300 hover:text-cyber-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/penetration-testing" className="text-gray-300 hover:text-cyber-400 transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/services/web-app-security" className="text-gray-300 hover:text-cyber-400 transition-colors">
                  Web App Security
                </Link>
              </li>
              <li>
                <Link href="/services/osint" className="text-gray-300 hover:text-cyber-400 transition-colors">
                  OSINT Assessment
                </Link>
              </li>
              <li>
                <Link href="/services/security-audits" className="text-gray-300 hover:text-cyber-400 transition-colors">
                  Security Audits
                </Link>
              </li>
              <li>
                <Link href="/services/compliance" className="text-gray-300 hover:text-cyber-400 transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyber-400" />
                <a href="mailto:contact@sentinelshield.com" className="text-gray-300 hover:text-cyber-400 transition-colors">
                  contact@sentinelshield.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyber-400" />
                <a href="tel:+1-555-CYBER-SEC" className="text-gray-300 hover:text-cyber-400 transition-colors">
                  +1 (555) CYBER-SEC
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyber-400 mt-1" />
                <div className="text-gray-300">
                  <p>123 Security Street</p>
                  <p>Cyber City, CC 12345</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Sentinel Shield LLC. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-cyber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-cyber-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-cyber-400 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 