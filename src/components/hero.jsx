import React, { useEffect, useMemo, useState } from 'react';

const HERO_STATS = [
  { label: 'Satisfied Clients', value: 200, suffix: '+' },
  { label: 'Projects Completed', value: 260, suffix: '+' },
  { label: 'Projects In Development', value: 15, suffix: '+' },
];

const Hero = () => {
  const stats = useMemo(() => HERO_STATS, []);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const duration = 900; // ms
    const frame = 30; // ms per tick
    const steps = Math.ceil(duration / frame);
    const increments = stats.map((stat) => Math.max(1, Math.ceil(stat.value / steps)));
    let current = stats.map(() => 0);

    const id = setInterval(() => {
      current = current.map((val, idx) => Math.min(stats[idx].value, val + increments[idx]));
      setCounts(current);

      const done = current.every((val, idx) => val >= stats[idx].value);
      if (done) clearInterval(id);
    }, frame);

    return () => clearInterval(id);
  }, [stats]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-950 dark:to-black relative overflow-hidden transition-colors duration-500">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Finel-project
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Your premier destination for innovative web solutions. We create stunning websites, 
              powerful applications, and digital experiences that drive your business forward.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => setShowDialog(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/85 dark:bg-slate-900/70 border border-white/60 dark:border-white/10 shadow-md shadow-black/10 dark:shadow-black/30 backdrop-blur p-4 text-center"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-300">
                    {counts[idx].toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Hero Image Placeholder */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-slate-800 dark:to-indigo-900 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white dark:bg-slate-900/80 rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 dark:bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 dark:bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 dark:bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-5/6"></div>
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-indigo-800 rounded-lg"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 bg-blue-500 dark:bg-blue-600 rounded w-1/3"></div>
                      <div className="h-8 bg-gray-200 dark:bg-slate-800 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full shadow-lg animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-green-400 rounded-full shadow-lg animate-ping"></div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20">
            <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose WebCart?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional results with cutting-edge technology and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900/80 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-300">Lightning-fast websites with 99.9% uptime guarantee</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900/80 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">User-Centered Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Beautiful interfaces designed with your users in mind</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900/80 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Quality Assured</h3>
              <p className="text-gray-600 dark:text-gray-300">Rigorous testing ensures flawless performance</p>
            </div>
          </div>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowDialog(false)}
          />
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-white/70 dark:border-white/10 p-6 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-300 uppercase tracking-wide">Get started</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">What do you need?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Pick an option to continue.</p>
              </div>
              <button
                onClick={() => setShowDialog(false)}
                className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/60 hover:border-blue-500 hover:shadow-md transition">
                <span className="text-gray-900 dark:text-gray-100 font-semibold">Internship</span>
                <span className="text-xs text-blue-600 dark:text-blue-300">Apply now</span>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/60 hover:border-blue-500 hover:shadow-md transition">
                <span className="text-gray-900 dark:text-gray-100 font-semibold">Jobs</span>
                <span className="text-xs text-blue-600 dark:text-blue-300">View openings</span>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/60 hover:border-blue-500 hover:shadow-md transition">
                <span className="text-gray-900 dark:text-gray-100 font-semibold">Hire Developers</span>
                <span className="text-xs text-blue-600 dark:text-blue-300">Start a project</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
