
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8',
        isScrolled
          ? 'bg-white/80 dark:bg-gdg-dark/80 shadow-subtle blur-backdrop'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-gdg-blue" />
          <span className="font-display font-semibold text-xl">GDG Community</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-gdg-blue transition-colors">
            About
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-gdg-blue transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-gdg-blue transition-colors">
            Testimonials
          </a>
          <a href="#events" className="text-sm font-medium hover:text-gdg-blue transition-colors">
            Events
          </a>
          <Button size="sm" className="bg-gdg-blue hover:bg-gdg-blue/90 text-white">
            Join Us
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gdg-dark" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <a 
            href="#about" 
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#benefits" 
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#events" 
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Events
          </a>
          <Button 
            size="lg" 
            className="bg-gdg-blue hover:bg-gdg-blue/90 text-white mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
