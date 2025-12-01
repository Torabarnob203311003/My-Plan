import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function PlannerFooter() {
  return (
    <footer className="w-full bg-[#83b9f0] text-white py-8 px-4 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Logo */}
          <div className="flex items-start justify-center sm:justify-start lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="relative">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={2} />
              </div>
              <span className="text-xl sm:text-2xl font-semibold">planeer</span>
            </Link>
          </div>

          {/* Column 1 */}
          <div className="text-center sm:text-left">
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/about" className="text-sm sm:text-base hover:underline transition-all">
                  About us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base hover:underline transition-all">
                  Enterprise
                </a>
              </li>
              <li>
                <Link to="/customer-service" className="text-sm sm:text-base hover:underline transition-all">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/message-center" className="text-sm sm:text-base hover:underline transition-all">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="text-center sm:text-left">
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base hover:underline transition-all">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base hover:underline transition-all">
                  Press
                </a>
              </li>
              <li>
                <Link to="/terms" className="text-sm sm:text-base hover:underline transition-all">
                  Legal
                </Link>
              </li>
              <li>
                <Link to="/message-center" className="text-sm sm:text-base hover:underline transition-all">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center sm:text-left">
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/faq" className="text-sm sm:text-base hover:underline transition-all">
                  FAQ's
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base hover:underline transition-all">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base hover:underline transition-all">
                  Security
                </a>
              </li>
              <li>
                <Link to="/terms" className="text-sm sm:text-base hover:underline transition-all">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom Right Links */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-end justify-center lg:justify-between gap-3 sm:gap-4 lg:gap-6 text-center sm:text-left lg:text-right">
            <div className="flex flex-wrap items-center justify-center sm:justify-start lg:justify-end gap-3 sm:gap-4">
              <p className="text-xs sm:text-sm opacity-90">©2025 Planeer</p>
              <Link to="/terms" className="text-xs sm:text-sm hover:underline transition-all opacity-90">
                Terms of Service
              </Link>
              <a href="#" className="text-xs sm:text-sm hover:underline transition-all opacity-90">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}