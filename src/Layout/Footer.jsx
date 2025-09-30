import React, { useCallback } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { name: 'Contact', href: '#contact' },
    // { name: 'FAQ', href: '#faq' },
    { name: 'News', href: '#news' },
    { name: 'Resources', href: '#resources' },
    // { name: 'About Us', href: '#about' },
    { name: 'Privacy', href: '#privacy' },
    { name: 'Legal', href: '#legal' },
    // { name: 'Terms of Use', href: '#terms' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' }
  ];

  // 🪄 Function to instantly scroll to the top of the page (instant scroll fast)
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Ensures the scroll is instant
    });
  }, []);

  // Function to handle link clicks, triggering scroll for internal links
  const handleLinkClick = (isTermsOfUse = false) => {
    // For 'Terms of Use', we navigate to a new route, then scroll to top.
    // The scroll to top should generally be handled on the *destination* page component,
    // but we can enforce it here before navigation (though a `useEffect` on the destination 
    // component using `useLocation` is the React router best practice).
    // For simplicity, we just call it on the click event.
    if (isTermsOfUse) {
      // In a multi-page app (using Link), the destination page should handle the scroll, 
      // but this forces it on click before navigation starts.
      scrollToTop();
    } else {
      // For hash links, we only need to call scroll to top if the link jumps to a 
      // section far down the current page. If the href is a hash link, the browser
      // will handle the section jump, but we can call scrollToTop to ensure
      // the page is reset if needed before the jump.
      scrollToTop(); 
    }
  };

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
                  onClick={scrollToTop} // Scroll to top when clicking any social link (optional)
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600 hover:border-white transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {footerLinks.map((link) =>
            link.name === 'Terms of Use' ? (
              <Link
                key={link.name}
                to="/terms"
                onClick={() => handleLinkClick(true)} // Calls scrollToTop before navigating
                className="text-white hover:text-orange-300 transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(false)} // Calls scrollToTop before jumping to hash
                className="text-white hover:text-orange-300 transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                {link.name}
              </a>
            )
          )}
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