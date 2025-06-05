"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  Target, 
  Eye, 
  Heart,
  CheckCircle,
  Globe,
  Trophy
} from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: "Noah Shaffer",
      role: "Chief Technology Officer",
      bio: "Visionary technology leader with extensive experience in cybersecurity strategy and implementation. Drives innovation and technical excellence across all security initiatives.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      certifications: ["CISSP", "CISM", "CompTIA Security+", "GCIH"]
    },
    {
      name: "Erwin Bruno",
      role: "Tech Lead / Red Team Operator",
      bio: "U.S. Military veteran with deep expertise in penetration testing, OSINT, and offensive security operations. Leads all technical assessments with military precision.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      certifications: ["CEH", "PenTest+", "Security+", "Network+"]
    },
    {
      name: "Matthew",
      role: "Business Management",
      bio: "Strategic business operations leader focused on client relations, project management, and organizational growth. Ensures seamless service delivery and client satisfaction.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      certifications: ["PMP", "CISA", "Six Sigma Black Belt"]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security of our clients' data and systems above all else, ensuring confidentiality and integrity in every engagement."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and detailed reporting ensure our clients understand their security posture and the steps needed for improvement."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in our assessments and recommendations, delivering actionable insights that drive real security improvements."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "We view our clients as partners, working collaboratively to build lasting security resilience and business continuity."
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      number: "500+",
      title: "Security Assessments",
      description: "Completed comprehensive security evaluations for organizations worldwide."
    },
    {
      icon: Shield,
      number: "99.9%",
      title: "Client Satisfaction",
      description: "Maintained exceptional client satisfaction through expert service delivery."
    },
    {
      icon: Award,
      number: "50+",
      title: "Veteran Experts",
      description: "Military-trained cybersecurity professionals with advanced security credentials."
    },
    {
      icon: Globe,
      number: "25+",
      title: "Countries Served",
      description: "Global reach with clients across multiple continents and industries."
    }
  ];

  const certifications = [
    "CISSP", "OSCP", "CEH", "CISA", "CISM", "GCIH", "GPEN", "GWEB", "GCFA", "CGEIT", "CRISC"
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyber-600 to-cyber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Shield className="h-16 w-16 mx-auto mb-6 text-cyber-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Sentinel Shield LLC
            </h1>
            <p className="text-xl text-cyber-100 max-w-3xl mx-auto leading-relaxed">
              Founded by cybersecurity veterans, we&apos;re dedicated to protecting businesses 
              from evolving digital threats through expert consulting, comprehensive assessments, 
              and cutting-edge security solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To empower organizations of all sizes with enterprise-grade cybersecurity 
                expertise, making advanced security accessible and understandable for 
                every business.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe that robust cybersecurity shouldn&apos;t be a luxury reserved for 
                large corporations. Every business deserves protection from digital threats, 
                and we&apos;re here to provide that protection through expert consulting and 
                practical solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-500/10 to-purple-500/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To create a world where every organization operates with confidence, 
                knowing their digital assets are secure and their business is protected 
                from cyber threats.
              </p>
              <div className="space-y-3">
                {[
                  "100% client satisfaction through expert service",
                  "Continuous innovation in security methodologies",
                  "Building long-term partnerships with our clients",
                  "Contributing to global cybersecurity awareness"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyber-600 dark:text-cyber-400" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide our work and define our commitment to clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-100 dark:bg-cyber-900/30 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-cyber-600 dark:text-cyber-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Industry veterans with decades of combined cybersecurity experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-cyber-400 to-purple-500 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyber-600 dark:text-cyber-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-1 bg-cyber-100 dark:bg-cyber-900/30 text-cyber-700 dark:text-cyber-300 text-xs rounded-md"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-cyber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-cyber-100">
              Proven results in cybersecurity excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold mb-2">{achievement.title}</div>
                <div className="text-cyber-100 text-sm">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Industry Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team holds the most respected certifications in cybersecurity
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.span
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
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
              Ready to Work with Security Experts?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experienced team help protect your business from cyber threats. 
              Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-cyber-600 hover:bg-cyber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Assessment
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 hover:border-cyber-400 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 