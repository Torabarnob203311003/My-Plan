const CustomerServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-2">Customer Service</h1>
          <p className="text-xl text-blue-100">
            We'll help you find answers to your questions
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <a
              href="#"
              className="py-4 border-b-2 border-blue-500 text-gray-900 font-medium"
            >
              Overview
            </a>
            <a href="#" className="py-4 text-gray-600 hover:text-gray-900">
              Get help with your account
            </a>
            <a href="#" className="py-4 text-gray-600 hover:text-gray-900">
              FAQ's
            </a>
            <a href="#" className="py-4 text-gray-600 hover:text-gray-900">
              Send us a message
            </a>
            <a href="#" className="py-4 text-gray-600 hover:text-gray-900">
              Still have questions?
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Here to guide you!
          </h2>
          <p className="text-gray-600">We've got the tools to help you</p>
        </div>

        {/* Support Options */}
        <div className="space-y-12">
          {/* Customer Help */}
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-blue-400 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Customer help and technical support
              </h3>
              <p className="text-gray-600 mb-3">
                Get online & mobile support, or help with your account.
              </p>
              <p className="text-gray-700 mb-4">
                Call our customer service number:{" "}
                <a
                  href="tel:1-800-333-4444"
                  className="text-blue-500 hover:underline"
                >
                  1-800-333-4444
                </a>
              </p>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Our representatives are available:
                </p>
                <p className="text-gray-700">Mon-Fri, 8 a.m. to 9 p.m. ET</p>
                <p className="text-gray-700">Sat, 9 a.m. to 6 p.m. ET</p>
                <p className="text-gray-700">Sun, 8 a.m. to 5 p.m. ET</p>
              </div>
            </div>
          </div>

          {/* Send Message */}
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-blue-400 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Send us a message
              </h3>
              <p className="text-gray-600 mb-3">
                Message us directly using this form
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline flex items-center"
              >
                message center <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          {/* Complaints */}
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-blue-400 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Complaints and feedback
              </h3>
              <p className="text-gray-600 mb-3">
                Your feedback is important. Tell us about your Planeer
                experience
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline flex items-center"
              >
                Let us know <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">FAQ's</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                How to reset my password?
              </h3>
              <p className="text-gray-600">
                You can recover your planeer account password by following these
                steps below...
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                How to reset my password?
              </h3>
              <p className="text-gray-600">
                Your feedback is important. Tell us about your Planeer
                experience
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                How to reset my password?
              </h3>
              <p className="text-gray-600">
                Your feedback is important. Tell us about your Planeer
                experience
              </p>
            </div>
            <a
              href="#"
              className="text-blue-500 hover:underline inline-flex items-center mt-4"
            >
              View all FAQ's <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
