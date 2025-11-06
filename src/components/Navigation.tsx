import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Single Fixed Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#EAE4DB]/97 backdrop-blur-md shadow-soft' 
            : 'bg-transparent'
        }`}
        style={{ height: '80px' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo - Left */}
          <a href="#" className="z-50 flex flex-col items-center">
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '32px',
                fontWeight: 400,
                color: '#2A241E',
                letterSpacing: '0.075em',
                lineHeight: '1',
              }}
            >
              AYWA
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                fontWeight: 400,
                color: '#6E6A5B',
                letterSpacing: '0.14em',
                marginTop: '4px',
                lineHeight: '1',
                textTransform: 'uppercase',
              }}
            >
              Wellness Elevated
            </span>
          </a>

          {/* Navigation Links - Center (Desktop) */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative group"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#2A241E',
                  letterSpacing: '0.025em',
                  transition: 'color 0.3s ease',
                }}
              >
                {link.label}
                <span className="absolute left-0 right-0 bottom-[-6px] h-[1px] bg-[#9AA17C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Right (Desktop) */}
          <div className="hidden lg:block">
            <a href="#waitlist">
              <button
                className="bg-[#9AA17C] hover:bg-[#7F8564] text-[#EAE4DB] transition-all duration-300 shadow-cinematic hover:shadow-cinematic-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  borderRadius: '50px',
                  padding: '12px 28px',
                  letterSpacing: '0.025em',
                }}
              >
                Get Early Access
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#2A241E] hover:text-[#9AA17C] transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#1C1916]/70 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-[#EAE4DB] z-40 lg:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: '-8px 0 28px rgba(28, 25, 22, 0.18)' }}
      >
        <div className="flex flex-col gap-6 mt-24 px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="py-3 border-b border-[#CBBBA0] hover:text-[#9AA17C] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                color: '#2A241E',
                letterSpacing: '0.015em',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#waitlist" onClick={handleLinkClick}>
            <button
              className="w-full bg-[#9AA17C] hover:bg-[#7F8564] text-[#EAE4DB] transition-all duration-300 shadow-cinematic"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '50px',
                padding: '14px 28px',
                marginTop: '16px',
                letterSpacing: '0.025em',
              }}
            >
              Get Early Access
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
