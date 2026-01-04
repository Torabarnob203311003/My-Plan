
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function PlannerFooter() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#83b9f0] to-[#6ba5e0] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition mb-4">
              <CheckCircle className="w-10 h-10" strokeWidth={2} />
              <span className="text-2xl font-bold">planeer</span>
            </Link>
            <p className="text-sm text-white/90 mb-4">
              Streamline your workflow and boost productivity with our powerful planning tools.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all backdrop-blur-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all backdrop-blur-sm">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all backdrop-blur-sm">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-white/90 hover:text-white hover:underline transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-white/90 hover:text-white hover:underline transition-all">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/message-center" className="text-sm text-white/90 hover:text-white hover:underline transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/customer-service" className="text-sm text-white/90 hover:text-white hover:underline transition-all">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/message-center" className="text-sm text-white/90 hover:text-white hover:underline transition-all">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-white/90 hover:text-white hover:underline transition-all">
                  Terms of Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80">
              © 2025 Planeer. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Mail className="w-4 h-4" />
              <a href="mailto:support@planeer.com" className="hover:text-white transition-colors">
                support@planeer.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}