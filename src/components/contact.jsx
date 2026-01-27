import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-950 dark:to-black py-12 px-4 sm:px-6 lg:px-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 text-xs font-semibold uppercase tracking-wide">
            We reply within 24h
          </p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tell us what you need and we’ll get back with a tailored response.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
          {/* Info column */}
          <div className="rounded-2xl bg-white/90 dark:bg-slate-900/70 border border-white/70 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/30 backdrop-blur p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Let’s talk</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Prefer a call or quick email? Pick what works best and we’ll follow up.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 px-4 py-3">
                <div className="p-2 rounded-lg bg-white text-blue-600 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Visit</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">123 Business Street<br />City, State 12345</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 px-4 py-3">
                <div className="p-2 rounded-lg bg-white text-blue-600 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Call</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">+1 (555) 123-4567</div>
                  <div className="text-xs text-blue-600 dark:text-blue-300">Mon-Fri • 9am–6pm</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 px-4 py-3">
                <div className="p-2 rounded-lg bg-white text-blue-600 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Email</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">info@company.com</div>
                  <div className="text-xs text-blue-600 dark:text-blue-300">We respond in 24h</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 px-4 py-3">
                <div className="p-2 rounded-lg bg-white text-blue-600 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Hours</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Sat 10am–4pm · Sun closed</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Emergency support 24/7</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-5 shadow-lg">
              <div className="text-sm font-semibold uppercase tracking-wide">Need something fast?</div>
              <div className="text-lg font-bold">Book a 15-min discovery call.</div>
              <p className="text-sm text-white/80 mt-1">We’ll align on scope, timelines, and next steps.</p>
            </div>
          </div>

          {/* Form column */}
          <div className="rounded-2xl bg-white/95 dark:bg-slate-900/70 border border-white/70 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/30 backdrop-blur p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-2">Send us a message</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Tell us about your project or question.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What’s this about?"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold shadow-md shadow-blue-600/30 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
