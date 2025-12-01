import { ChevronDown } from "lucide-react";
import { useState } from "react";

const MessageCenterPage = () => {
  const [problem, setProblem] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    if (problem && details) {
      alert("Message submitted!");
      setProblem("");
      setDetails("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-2">Message Center</h1>
          <p className="text-xl text-blue-100">
            Customer help and technical support
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Tell us about your Planeer experience
          </h2>
          <p className="text-gray-600">
            Your satisfaction matters. If our service falls short of your
            expectations,
          </p>
          <p className="text-gray-600">
            let us know so we can address your concerns
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-900 font-medium mb-2">
              Problem
            </label>
            <div className="relative">
              <select
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Problem list here</option>
                <option value="account">Account Issues</option>
                <option value="technical">Technical Problems</option>
                <option value="billing">Billing Questions</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-900 font-medium mb-2">
              Details
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Type here..."
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-400 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Submit
          </button>
        </div>

        {/* Phone Contact Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            If you would rather contact us by phone
          </h3>
          <p className="text-gray-600 mb-4">
            Get online & mobile support, or help with your account.
          </p>
          <p className="text-gray-700 mb-2">
            Call our customer service number:
          </p>
          <a
            href="tel:1-800-333-4444"
            className="text-blue-500 hover:underline text-xl font-medium"
          >
            1-800-333-4444
          </a>

          <div className="mt-8">
            <p className="font-semibold text-gray-900 mb-3">
              Our representatives are available:
            </p>
            <p className="text-gray-700">Mon-Fri, 8 a.m. to 9 p.m. ET</p>
            <p className="text-gray-700">Sat, 9 a.m. to 6 p.m. ET</p>
            <p className="text-gray-700">Sun, 8 a.m. to 5 p.m. ET</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessageCenterPage;
