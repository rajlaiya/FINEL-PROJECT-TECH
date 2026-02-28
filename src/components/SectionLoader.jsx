import React, { useEffect, useState } from 'react';

const CUBE_COUNT = 9;

const SectionLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let current = 0;
    const duration = 1400;
    const interval = 16;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => onComplete(), 500);
        }, 250);
        return;
      }
      setProgress(Math.floor(current));
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Determine how many cubes should be "lit" based on progress
  const litCount = Math.ceil((progress / 100) * CUBE_COUNT);

  return (
    <div
      className={`section-loader fixed inset-0 z-50 flex flex-col items-center justify-center
        bg-white dark:bg-[#0a0e1a] transition-all duration-500
        ${fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="loader-scanline" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-blue-500/40 dark:border-cyan-400/40" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-blue-500/40 dark:border-cyan-400/40" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-blue-500/40 dark:border-cyan-400/40" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-blue-500/40 dark:border-cyan-400/40" />

      {/* Big number display */}
      <div className="relative mb-10">
        <span
          className="text-[7rem] sm:text-[9rem] font-black tabular-nums leading-none
            text-transparent bg-clip-text loader-number-gradient select-none"
          style={{ fontFamily: '"Inter", "SF Mono", monospace' }}
        >
          {String(progress).padStart(3, '0')}
        </span>
        {/* Glitch shadow layers */}
        <span
          className="absolute inset-0 text-[7rem] sm:text-[9rem] font-black tabular-nums leading-none
            text-cyan-500/10 dark:text-cyan-400/10 select-none loader-glitch-1"
          aria-hidden
          style={{ fontFamily: '"Inter", "SF Mono", monospace' }}
        >
          {String(progress).padStart(3, '0')}
        </span>
        <span
          className="absolute inset-0 text-[7rem] sm:text-[9rem] font-black tabular-nums leading-none
            text-pink-500/10 dark:text-pink-400/10 select-none loader-glitch-2"
          aria-hidden
          style={{ fontFamily: '"Inter", "SF Mono", monospace' }}
        >
          {String(progress).padStart(3, '0')}
        </span>
        {/* Percent sign */}
        <span className="absolute -right-8 top-4 text-2xl font-bold text-gray-300 dark:text-gray-600">
          %
        </span>
      </div>

      {/* Cube grid */}
      <div className="grid grid-cols-9 gap-1.5 sm:gap-2 mb-8">
        {[...Array(CUBE_COUNT)].map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-sm transition-all duration-300 ease-out
              ${
                i < litCount
                  ? 'loader-cube-active scale-100'
                  : 'bg-gray-200 dark:bg-gray-800/60 scale-90 opacity-40'
              }`}
            style={{ transitionDelay: `${i * 25}ms` }}
          />
        ))}
      </div>

      {/* Thin progress line */}
      <div className="w-64 sm:w-80 h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full loader-bar-gradient transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Status text */}
      <div className="mt-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 loader-dot-blink" />
        <p className="text-xs text-gray-400 dark:text-gray-500 tracking-[0.25em] uppercase font-mono">
          {progress < 100 ? 'Loading resources' : 'Complete'}
        </p>
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </div>
  );
};

export default SectionLoader;
