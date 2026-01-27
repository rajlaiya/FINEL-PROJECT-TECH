import React, { useState } from 'react';

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'general', name: 'General Questions', icon: '❓' },
    { id: 'account', name: 'Account & Profile', icon: '👤' },
    { id: 'orders', name: 'Orders & Payment', icon: '🛒' },
    { id: 'shipping', name: 'Shipping & Delivery', icon: '📦' },
    { id: 'returns', name: 'Returns & Refunds', icon: '↩️' },
    { id: 'technical', name: 'Technical Support', icon: '⚙️' }
  ];

  const faqs = {
    general: [
      {
        question: 'How do I create an account?',
        answer: 'Click the "Sign Up" button in the top right corner of our website. Fill in your details and verify your email address to complete registration.'
      },
      {
        question: 'Is my personal information secure?',
        answer: 'Yes, we use industry-standard encryption and security measures to protect your personal information. We never share your data with third parties without your consent.'
      },
      {
        question: 'What are your business hours?',
        answer: 'Our customer service team is available Monday-Friday 9AM-6PM EST. Live chat is available 24/7 for urgent inquiries.'
      }
    ],
    account: [
      {
        question: 'How do I reset my password?',
        answer: 'Click "Forgot Password" on the login page, enter your email address, and follow the instructions in the reset email we send you.'
      },
      {
        question: 'Can I change my email address?',
        answer: 'Yes, you can update your email address in your account settings. You\'ll need to verify the new email address before the change takes effect.'
      },
      {
        question: 'How do I delete my account?',
        answer: 'Contact our customer service team to request account deletion. Please note this action is permanent and cannot be undone.'
      }
    ],
    orders: [
      {
        question: 'How do I place an order?',
        answer: 'Browse our products, add items to your cart, proceed to checkout, enter your shipping and payment information, and confirm your order.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.'
      },
      {
        question: 'Can I modify or cancel my order?',
        answer: 'Orders can be modified or cancelled within 2 hours of placement. After this time, contact customer service for assistance.'
      }
    ],
    shipping: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Overnight shipping arrives the next business day.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to over 50 countries worldwide. International shipping times vary by destination but typically take 7-21 business days.'
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in your account dashboard.'
      }
    ],
    returns: [
      {
        question: 'What is your return policy?',
        answer: 'We offer 30-day returns on most items in original condition. Some restrictions apply to personalized or perishable items.'
      },
      {
        question: 'How do I return an item?',
        answer: 'Log into your account, go to order history, select the item to return, and follow the return instructions. A prepaid return label will be provided.'
      },
      {
        question: 'When will I receive my refund?',
        answer: 'Refunds are processed within 3-5 business days after we receive your returned item. The refund will appear on your original payment method.'
      }
    ],
    technical: [
      {
        question: 'The website is loading slowly. What should I do?',
        answer: 'Try clearing your browser cache, disabling browser extensions, or using a different browser. Contact us if the problem persists.'
      },
      {
        question: 'I\'m having trouble with checkout. Help!',
        answer: 'Ensure your payment information is correct, check that items are in stock, and try using a different payment method. Clear your browser cache if issues continue.'
      },
      {
        question: 'The mobile app isn\'t working properly.',
        answer: 'Try updating the app to the latest version, restarting your device, or reinstalling the app. Contact technical support if problems persist.'
      }
    ]
  };

  const filteredFaqs = faqs[activeCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Find answers to your questions and get the support you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold text-gray-800">Live Chat</h3>
            <p className="text-sm text-gray-600">Chat with support</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="font-semibold text-gray-800">Email Support</h3>
            <p className="text-sm text-gray-600">Send us an email</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-semibold text-gray-800">Phone Support</h3>
            <p className="text-sm text-gray-600">Call us directly</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="font-semibold text-gray-800">Submit Ticket</h3>
            <p className="text-sm text-gray-600">Create support ticket</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              
              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h3 className="font-semibold text-gray-800 mb-2 flex items-start">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                          Q
                        </span>
                        {faq.question}
                      </h3>
                      <div className="ml-9">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
          <p className="mb-6 text-blue-100">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support Team
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
