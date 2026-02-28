import React, { useCallback, useEffect, useState } from 'react'
import Header from './components/Header_footer/Header'
import Footer from './components/Header_footer/Footer'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Services from './components/services'
import Gallery from './components/galary'
import Contact from './components/contact'
import Shipping from './components/Shipping'
import HelpCenter from './components/HelpCenter'
import CookiePolicy from './components/CookiePolicy'
import Internship from './components/Internship'
import SectionLoader from './components/SectionLoader'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.classList.add('theme-transition');
    root.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', theme);

    const timeout = setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 400);

    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Trigger loader on page change
  const handlePageChange = useCallback((page) => {
    if (page !== currentPage) {
      setIsLoading(true);
      setCurrentPage(page);
    }
  }, [currentPage]);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'services':
        return <Services />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'shipping':
        return <Shipping />;
      case 'help-center':
        return <HelpCenter />;
      case 'cookie-policy':
        return <CookiePolicy />;
      case 'internship':
        return <Internship />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation - Always Visible */}
      <Header
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      {/* Section Loading Animation */}
      {isLoading && <SectionLoader onComplete={handleLoadingComplete} />}

      {/* Main Content Area - Changes based on navigation */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer - Always Visible */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
