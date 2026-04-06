import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Layout.css';
import GoogleAnalytics from './GoogleAnalytics';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app-container">
      <GoogleAnalytics />
      <Helmet>
        <html lang="es-CL" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="pantallas táctiles, pantallas interactivas, cartelería digital, kioscos interactivos, soluciones digitales, arriendo de pantallas, venta de pantallas, Huawei IdeaHub, integradores, Chile, Santiago, Las Condes, oficinas inteligentes, colaboración, videoconferencia" />
        <link rel="alternate" hrefLang="es-CL" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context":"https://schema.org",
            "@type":"Organization",
            "name":"AISTANA SpA",
            "url":"https://aistana-huawei.vercel.app",
            "logo":"https://aistana-huawei.vercel.app/logo.png",
            "address":{
              "@type":"PostalAddress",
              "streetAddress":"Rosario Norte 532 piso 17",
              "addressLocality":"Las Condes",
              "addressRegion":"RM",
              "addressCountry":"CL"
            },
            "contactPoint":[
              {
                "@type":"ContactPoint",
                "telephone":"+56-9-3292-4865",
                "contactType":"sales",
                "areaServed":"CL",
                "availableLanguage":"es-CL"
              }
            ],
            "sameAs":[]
          })}
        </script>
      </Helmet>
      {/* Navbar */}
      <nav className="navbar" id="navbar">
        <div className="logos">
            <Link to="/" className="logo-partner">
                <img src="/logo.png" alt="AISTANA Logo" style={{ height: '38px', width: 'auto', display: 'block' }} loading="lazy" />
                <span>AISTANA</span>
            </Link>
            <div className="logo-divider"></div>
            <Link to="/" className="logo-huawei">
                <img src="/REFERENCIAS_HUAWEI/huaweilogo-new.png" alt="Huawei Logo" style={{ height: '30px', width: 'auto', display: 'block' }} loading="lazy" />
            </Link>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <div className="dropdown">
              <span className="dropdown-title">Servicios <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.8rem', marginLeft: '5px' }}></i></span>
              <div className="dropdown-content">
                <Link to="/arriendo" onClick={() => setIsMenuOpen(false)}>Arriendo de Pantallas</Link>
                <Link to="/integradores" onClick={() => setIsMenuOpen(false)}>Para Integradores</Link>
              </div>
            </div>
            <Link to="/productos" className={location.pathname === '/productos' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Productos</Link>
            <Link to="/nosotros" className={location.pathname === '/nosotros' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
            <Link to="/contacto" className="btn-primary" style={{ backgroundColor: '#4A7C59', borderColor: '#4A7C59' }} onClick={() => setIsMenuOpen(false)}>
                Contactar Ventas
            </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="footer" id="contacto">
        <div className="footer-grid">
            <div className="footer-about">
                <div className="logos" style={{ marginBottom: '20px' }}>
                    <div className="logo-huawei">
                        <img src="/REFERENCIAS_HUAWEI/huaweilogo-new.png" alt="Huawei Logo" style={{ height: '30px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} loading="lazy" />
                    </div>
                    <div className="logo-divider" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                    <div className="logo-partner">
                        <img src="/logo.png" alt="AISTANA Logo" style={{ height: '30px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} loading="lazy" />
                        <span style={{ color: 'white' }}>AISTANA</span>
                    </div>
                </div>
                <p>Somos el aliado estratégico en Chile para la integración de soluciones de conectividad empresarial, cartelería digital y salas de colaboración inteligente basadas en Huawei eKit.</p>
                <div className="social-links">
                    <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>

            <div className="footer-links">
                <h4>Enlaces Rápidos</h4>
                <ul>
                    <li><Link to="/arriendo">Campaña Arriendo</Link></li>
                    <li><Link to="/integradores">Para Integradores</Link></li>
                    <li><Link to="/productos">Monitores y Pantallas</Link></li>
                    <li><Link to="/soporte-tecnico">Soporte Técnico</Link></li>
                    <li><Link to="/faq">Preguntas Frecuentes</Link></li>
                </ul>
            </div>

            <div className="footer-contact">
                <h4>Contacto</h4>
                <ul className="contact-info">
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Rosario Norte 532 piso 17, Las Condes</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope"></i>
                        <span>ignacio@aistana.cl</span>
                    </li>
                    <li>
                        <i className="fa-brands fa-whatsapp"></i>
                        <a href="https://wa.me/56932924865" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>+56 9 3292 4865</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
                <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Políticas de Privacidad</a>
                <span style={{ color: '#555' }}>|</span>
                <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Términos y Condiciones</a>
                <span style={{ color: '#555' }}>|</span>
                <Link to="/sitemap" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Mapa del Sitio</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} AISTANA SpA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
