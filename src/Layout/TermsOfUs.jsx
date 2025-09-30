import React, { useState, useEffect } from 'react';
import { FileText, AlertCircle, Shield, Scale, User, Lock } from 'lucide-react';

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: FileText },
    { id: 'services', title: 'Use of Services', icon: User },
    { id: 'privacy', title: 'Privacy & Data', icon: Lock },
    { id: 'medical', title: 'Medical Disclaimer', icon: AlertCircle },
    { id: 'liability', title: 'Liability', icon: Shield },
    { id: 'governing', title: 'Governing Law', icon: Scale }
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-white">
      {/* Header Section */}
      <div className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#4B98D2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of Use
            </h1>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed">
              Please read these terms carefully before using PharmClite's services
            </p>
            <div className="mt-8 text-white/90 text-sm">
              Last Updated: October 1, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
                Quick Navigation
              </h3>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === section.id
                      ? 'text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={activeSection === section.id ? { backgroundColor: '#4B98D2' } : {}}
                >
                  <section.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{section.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Acceptance of Terms */}
            <div id="acceptance" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4B98D2' }}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Acceptance of Terms
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  By accessing and using PharmClite's website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These Terms of Use constitute a legally binding agreement between you and PharmClite. We reserve the right to update, change, or replace any part of these Terms of Use by posting updates on our website. It is your responsibility to check this page periodically for changes.
                </p>
                <p>
                  Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                </p>
              </div>
            </div>

            {/* Use of Services */}
            <div id="services" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4B98D2' }}>
                  <User className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Use of Services
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  You agree to use PharmClite's services only for lawful purposes and in accordance with these Terms of Use. You are responsible for ensuring that your use of the services complies with all applicable laws and regulations.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">You agree NOT to:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction</li>
                  <li>Infringe upon or violate our intellectual property rights</li>
                  <li>Submit false or misleading information</li>
                  <li>Upload viruses or any other type of malicious code</li>
                  <li>Attempt to interfere with the proper functioning of our services</li>
                  <li>Share your account credentials with unauthorized parties</li>
                </ul>
                <p>
                  We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Use.
                </p>
              </div>
            </div>

            {/* Privacy & Data */}
            <div id="privacy" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4B98D2' }}>
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Privacy & Data Protection
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of information as described in our Privacy Policy.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Data We Collect:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Medical and prescription information</li>
                  <li>Payment and billing information</li>
                  <li>Usage data and website analytics</li>
                </ul>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p>
                  You have the right to access, update, or delete your personal information at any time by contacting our support team.
                </p>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div id="medical" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4B98D2' }}>
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Medical Disclaimer
                </h2>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg mb-6">
                <div className="flex">
                  <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-orange-800 mb-2">Important Notice</h4>
                    <p className="text-orange-700">
                      The information provided on this website is for informational purposes only and should not be considered as medical advice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  PharmClite provides pharmaceutical products and services, but we are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified healthcare provider with any questions regarding a medical condition.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Important Points:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Never disregard professional medical advice based on information from our website</li>
                  <li>Always read medication labels and follow prescription instructions carefully</li>
                  <li>Inform your healthcare provider of all medications you are taking</li>
                  <li>Report any adverse reactions or side effects immediately</li>
                  <li>Keep all medications out of reach of children</li>
                  <li>Do not share prescription medications with others</li>
                </ul>
                <p>
                  In case of a medical emergency, call your local emergency services immediately. Do not rely on information from our website in emergency situations.
                </p>
              </div>
            </div>

            {/* Liability */}
            <div id="liability" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4B98D2' }}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Limitation of Liability
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  To the maximum extent permitted by applicable law, PharmClite shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
                <p>
                  We strive to provide accurate product information and quality services. However, we do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our services will be uninterrupted or error-free</li>
                  <li>All information on our website is completely accurate or current</li>
                  <li>Defects will be corrected immediately</li>
                  <li>Our website is free of viruses or harmful components</li>
                </ul>
                <p>
                  Your use of our services is at your own risk. We provide our services on an "as is" and "as available" basis without any warranties of any kind.
                </p>
                <p>
                  In jurisdictions that do not allow the exclusion of certain warranties, some of the above exclusions may not apply to you.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div id="governing" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4B98D2' }}>
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Governing Law & Disputes
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which PharmClite operates, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration, except that each party retains the right to seek injunctive or other equitable relief in a court of competent jurisdiction.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Contact & Dispute Resolution:</h3>
                <p>
                  If you have any questions about these Terms of Use or wish to resolve a dispute, please contact us first. We are committed to resolving issues amicably and efficiently.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact Information:</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> legal@pharmclite.com</p>
                    <p><strong>Phone:</strong> 1-800-PHARMCLITE</p>
                    <p><strong>Address:</strong> PharmClite Legal Department, [Your Address]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement Notice */}
            <div className="border-t-2 pt-8" style={{ borderColor: '#4B98D2' }}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Acknowledgment
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  By using PharmClite's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please discontinue use of our services immediately.
                </p>
                <p className="text-sm text-gray-600">
                  These terms are effective as of the date listed above and will remain in effect except with respect to any changes in their provisions, which will be in effect immediately after being posted on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16 sm:py-20" style={{ backgroundColor: '#F0F7FB' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help clarify any concerns you may have
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#4B98D2' }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}