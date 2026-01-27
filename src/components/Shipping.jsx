import React from 'react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-4 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Shipping Information
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about our shipping policies and delivery options
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Shipping</h3>
            <p className="text-gray-600 mb-3">5-7 business days</p>
            <p className="text-2xl font-bold text-green-600">$5.99</p>
            <p className="text-sm text-gray-500">Free on orders over $50</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Express Shipping</h3>
            <p className="text-gray-600 mb-3">2-3 business days</p>
            <p className="text-2xl font-bold text-blue-600">$12.99</p>
            <p className="text-sm text-gray-500">Fast delivery guaranteed</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Overnight Shipping</h3>
            <p className="text-gray-600 mb-3">Next business day</p>
            <p className="text-2xl font-bold text-purple-600">$24.99</p>
            <p className="text-sm text-gray-500">Order by 2 PM EST</p>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Shipping Policies
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Processing Time</h4>
                  <p className="text-gray-600 text-sm">Orders are processed within 1-2 business days after payment confirmation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Delivery Areas</h4>
                  <p className="text-gray-600 text-sm">We ship to all 50 US states, Canada, and select international locations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Package Tracking</h4>
                  <p className="text-gray-600 text-sm">All shipments include tracking numbers sent to your email address.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Insurance</h4>
                  <p className="text-gray-600 text-sm">All packages are insured up to $100. Additional insurance available.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              International Shipping
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800">Available Countries</h4>
                <p className="text-gray-600 text-sm">Canada, UK, Australia, Germany, France, Japan, and more.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800">Delivery Time</h4>
                <p className="text-gray-600 text-sm">7-21 business days depending on destination.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-800">Customs & Duties</h4>
                <p className="text-gray-600 text-sm">Customer is responsible for any customs fees or import duties.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800">Shipping Costs</h4>
                <p className="text-gray-600 text-sm">Calculated at checkout based on weight and destination.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Can I change my shipping address after placing an order?</h4>
                <p className="text-gray-600 text-sm">Address changes are possible within 2 hours of order placement. Contact customer service immediately.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What if my package is lost or damaged?</h4>
                <p className="text-gray-600 text-sm">Contact us within 48 hours of delivery. We'll investigate and provide a replacement or refund.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Do you ship to P.O. boxes?</h4>
                <p className="text-gray-600 text-sm">Standard shipping is available to P.O. boxes. Express and overnight require physical addresses.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Can I expedite my order after it's placed?</h4>
                <p className="text-gray-600 text-sm">Shipping upgrades are possible if the order hasn't been processed. Additional charges may apply.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What happens if I'm not home for delivery?</h4>
                <p className="text-gray-600 text-sm">Packages will be left with a neighbor or at a pickup location. You'll receive delivery instructions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Do you offer signature confirmation?</h4>
                <p className="text-gray-600 text-sm">Yes, signature confirmation is available for an additional $3.99 on any order.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Need Help with Shipping?
          </h3>
          <p className="text-gray-600 mb-4">
            Our customer service team is here to help with any shipping questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Track Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
