import React, { useEffect, useState } from 'react';

const Footer = ({ setCurrentPage }) => {
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const key = 'webcart-visit-count';
    const baseline = 1800; // visual baseline so the counter feels realistic
    const stored = parseInt(window.localStorage.getItem(key) || '0', 10) || 0;
    const next = stored + 1;
    window.localStorage.setItem(key, String(next));
    setVisitCount(baseline + next);
  }, []);

  const handleNavigation = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      // Scroll to top when navigating
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <footer className="relative overflow-hidden bg-white/80 dark:bg-gradient-to-b dark:from-gray-950/80 dark:via-gray-950/70 dark:to-black/80 text-gray-900 dark:text-white backdrop-blur-2xl border-t border-white/60 dark:border-white/10 shadow-[0_-12px_40px_-32px_rgba(0,0,0,0.4)] dark:shadow-[0_-12px_40px_-28px_rgba(0,0,0,0.9)] transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.14),transparent_42%)] opacity-90 pointer-events-none mix-blend-multiply dark:mix-blend-normal" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">finel-project</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Your one-stop destination for all your shopping needs. We provide quality products 
              with exceptional customer service and fast delivery.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.219 0 .979.219.979 1.488 0 .905-.219 2.262-.359 3.523-.219.937.478 1.698 1.406 1.698 1.687 0 2.984-1.781 2.984-4.357 0-2.279-1.641-3.877-3.984-3.877-2.714 0-4.31 2.034-4.31 4.133 0 .818.314 1.699.709 2.178.078.095.089.178.067.274-.074.314-.239.957-.271 1.092-.041.178-.139.219-.32.133-1.188-.557-1.936-2.298-1.936-3.705 0-3.016 2.191-5.787 6.312-5.787 3.314 0 5.891 2.361 5.891 5.518 0 3.291-2.078 5.938-4.962 5.938-.969 0-1.881-.507-2.191-1.108l-.597 2.277c-.219.838-.815 1.881-1.216 2.522.916.283 1.881.436 2.925.436 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.582-2.043 4.729-1.147 1.147-2.871 1.874-4.729 2.043-.905-.169-1.74-.522-2.497-.982 1.725.231 3.491-.231 4.789-1.528 1.298-1.298 1.759-3.064 1.528-4.789.46.757.813 1.592.982 2.497-.169-1.858-.896-3.582-2.043-4.729-1.147-1.147-2.871-1.874-4.729-2.043.905.169 1.74.522 2.497.982-1.725-.231-3.491.231-4.789 1.528-1.298 1.298-1.759 3.064-1.528 4.789-.46-.757-.813-1.592-.982-2.497z"/>
                </svg>
              </a>
            </div>

            {visitCount !== null && (
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 dark:bg-white/5 border border-white/70 dark:border-white/10 shadow-sm backdrop-blur">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">Visitors</span>
                <span className="text-base font-bold text-blue-600 dark:text-blue-300">{visitCount.toLocaleString()}</span>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('home')} 
                  className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('projects')} 
                  className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('services')} 
                  className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('about')} 
                  className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact')} 
                  className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('help-center')} 
                  className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold text-left"
                >
                  Help Center
                </button>
              </li>
              <li><a href="#" className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold">Track Your Order</a></li>
              <li><a href="#" className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold">Returns & Exchanges</a></li>
              <li>
                <button 
                  onClick={() => handleNavigation('shipping')} 
                  className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold text-left"
                >
                  Shipping Info
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('internship')} 
                  className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-semibold text-left"
                >
                  Internships
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Stay Updated</h4>
            <p className="text-gray-800 dark:text-gray-300 text-sm font-medium">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-2">We Accept</h5>
              <div className="flex space-x-4 justify-center md:justify-start">
                <div className="bg-white rounded p-1">
                  <span className="text-xs font-bold text-blue-600">VISA</span>
                </div>
                <div className="bg-white rounded p-1">
                  <span className="text-xs font-bold text-red-600">MC</span>
                </div>
                <div className="bg-white rounded p-1">
                  <span className="text-xs font-bold text-blue-800">AMEX</span>
                </div>
                <div className="bg-white rounded p-1">
                  <span className="text-xs font-bold text-blue-700">PayPal</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="flex items-center space-x-2 text-sm text-gray-800 dark:text-gray-300 font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure Shopping</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-800 dark:text-gray-300 font-semibold mt-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>SSL Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-700 dark:text-gray-400 text-sm font-semibold text-center md:text-left">
              © 2025 finel-project. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-semibold">Privacy Policy</a>
              <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-semibold">Terms of Service</a>
              <button 
                onClick={() => handleNavigation('cookie-policy')} 
                className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-semibold"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
