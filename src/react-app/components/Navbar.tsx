import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-display font-bold text-aikrakow-purple">AI Kraków</span>
            <span className="text-sm font-medium text-muted-foreground hidden sm:inline-block">Community</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-aikrakow-purple transition-colors">About</a>
            <a href="#next-meetup" className="text-sm font-medium hover:text-aikrakow-purple transition-colors">Next Meetup</a>
            <a href="#connect" className="text-sm font-medium hover:text-aikrakow-purple transition-colors">Connect</a>
            <a href="#get-involved" 
              className="bg-aikrakow-purple hover:bg-aikrakow-purple/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Join Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-sm font-medium hover:text-aikrakow-purple transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#next-meetup" 
                className="text-sm font-medium hover:text-aikrakow-purple transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Next Meetup
              </a>
              <a 
                href="#connect" 
                className="text-sm font-medium hover:text-aikrakow-purple transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect
              </a>
              <a 
                href="#get-involved" 
                className="bg-aikrakow-purple hover:bg-aikrakow-purple/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors inline-block w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
