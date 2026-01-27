import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-4 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            About Us
          </h1>
          <p className="text-xl text-gray-600">
            Learn more about our company and mission
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to our company! We are dedicated to providing exceptional 
            products and services to our customers. Founded with a vision to 
            make a difference in the industry, we have grown to become a trusted 
            name in our field.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team consists of passionate professionals who are committed to 
            excellence and innovation. We believe in building lasting relationships 
            with our clients and continuously improving our offerings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver high-quality solutions that exceed customer expectations 
              while maintaining the highest standards of integrity and professionalism.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the leading provider in our industry, recognized for innovation, 
              quality, and exceptional customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
