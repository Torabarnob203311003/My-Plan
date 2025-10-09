// import React, { useState, useEffect } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What services does aaronlaroc provide?",
//       answer: "We provide comprehensive digital solutions including web development, mobile app development, UI/UX design, and digital marketing services. Our team specializes in creating custom solutions tailored to your business needs."
//     },
//     {
//       question: "How long does a typical project take?",
//       answer: "Project timelines vary depending on scope and complexity. A standard website typically takes 4-8 weeks, while more complex applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
//     },
//     {
//       question: "What is your pricing structure?",
//       answer: "Our pricing is project-based and depends on your specific requirements. We offer flexible payment plans and provide detailed quotes after understanding your needs. Contact us for a free consultation and custom quote."
//     },
//     {
//       question: "Do you provide ongoing support and maintenance?",
//       answer: "Yes! We offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally. This includes updates, security patches, performance monitoring, and technical support."
//     },
//     {
//       question: "Can you work with our existing systems?",
//       answer: "Absolutely! We have extensive experience integrating with existing systems and platforms. Whether you need to modernize legacy systems or add new features, we can help ensure seamless integration."
//     },
//     {
//       question: "What technologies do you work with?",
//       answer: "We work with modern technologies including React, Node.js, Python, PHP, and various databases. We choose the best technology stack based on your project requirements to ensure optimal performance and scalability."
//     },
//     {
//       question: "How do you ensure project quality?",
//       answer: "We follow industry best practices including code reviews, automated testing, and quality assurance processes. Our team maintains high standards throughout development to deliver reliable, secure, and performant solutions."
//     },
//     {
//       question: "Do you sign NDAs and protect intellectual property?",
//       answer: "Yes, we take confidentiality seriously. We're happy to sign NDAs and have strict policies to protect your intellectual property and sensitive information throughout our engagement."
//     }
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // 🪄 Scroll logic: Check the URL hash on component mount
//   useEffect(() => {
//     // Check if the current URL hash matches the FAQ section ID
//     if (window.location.hash === '#faq') {
//       const element = document.getElementById('faq');
//       if (element) {
//         // Use 'instant' behavior for fast scrolling
//         element.scrollIntoView({
//           behavior: 'instant',
//           block: 'start', // Scroll the top of the element to the top of the viewport
//         });
//       }
//     }
//   }, []); // Run only once on mount

//   return (
//     // 💡 IMPORTANT: Add the 'id' matching the footer link's href="#faq"
//     <section id="faq" className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#8fc4fa' }}>
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
//             Find answers to common questions about our services and process
//           </p>
//         </div>

//         {/* FAQ Accordion */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden transition-all duration-200 hover:bg-white/15"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
//                 aria-expanded={openIndex === index}
//               >
//                 <span className="text-base sm:text-lg font-semibold text-white pr-8">
//                   {faq.question}
//                 </span>
//                 <span className="flex-shrink-0 text-white">
//                   {openIndex === index ? (
//                     <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
//                   )}
//                 </span>
//               </button>
              
//               <div
//                 className={`transition-all duration-300 ease-in-out ${
//                   openIndex === index
//                     ? 'max-h-96 opacity-100'
//                     : 'max-h-0 opacity-0'
//                 }`}
//               >
//                 <div className="px-6 pb-5 text-white/90 text-sm sm:text-base leading-relaxed">
//                   {faq.answer}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact CTA */}
//         <div className="mt-12 sm:mt-16 text-center">
//           <p className="text-white/90 text-base sm:text-lg mb-6">
//             Still have questions? We're here to help!
//           </p>
//           <a
//             href="#contact"
//             className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react'

function FAQ() {
  return (
    <div>
      
    </div>
  )
}

export default FAQ
