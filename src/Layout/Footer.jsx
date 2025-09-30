import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'News', href: '#news' },
    { name: 'Resources', href: '#resources' },
    { name: 'About Us', href: '#about' },
    { name: 'Privacy', href: '#privacy' },
    { name: 'Legal', href: '#legal' },
    { name: 'Terms of Use', href: '#terms' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' }
  ];

  return (
    <footer className="w-full border-t border-blue-400" style={{ background: 'linear-gradient(180deg, rgba(62, 150, 238, 0.8918) -49.04%, rgba(39, 99, 159, 0.98) 43.54%)' }}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Logo and Social Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 pb-8 border-b border-blue-300/30">
          {/* Logo */}
          <div className="flex items-center">
            {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              A
            </div> */}
            <span className="ml-3 text-xl sm:text-2xl font-semibold text-white">My Plan</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1">
            <span className="text-sm text-white/90 mr-3">Follow us</span>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600 hover:border-white transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-orange-300 transition-colors duration-200 text-sm sm:text-base font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-blue-300/30 text-center">
          <p className="text-xs sm:text-sm text-white/80">
            © {new Date().getFullYear()} aaronlaroc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
