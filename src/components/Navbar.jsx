// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logos">
          <img src="/logo-aistana-full-nav.png" alt="AISTANA Logo" className="logo-aistana-img" />
        </div>

        <div className="desktop-menu">
          <a href="#hero" className="nav-link">Inicio</a>
          <a href="#alliance" className="nav-link">Alianza</a>
          <a href="#displays" className="nav-link">Pantallas Huawei</a>
          <a href="#contact" className="btn btn-primary nav-btn">Contáctanos</a>
        </div>

        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#hero" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
          <a href="#alliance" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Alianza</a>
          <a href="#displays" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pantallas</a>
          <a href="#contact" className="btn btn-primary mobile-nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Contáctanos</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
