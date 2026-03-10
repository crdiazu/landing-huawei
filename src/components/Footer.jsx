import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-content">
        <div className="footer-grid">
          
          <div className="footer-info">
            <div className="footer-logos">
              <img src="/logo-aistana-full-nav.png" alt="AISTANA Logo" className="footer-logo-aistana-img" />
              <span className="footer-divider">|</span>
              <span className="footer-brand huawei">Huawei Distributor</span>
            </div>
            <p className="footer-desc"></p>
            <div className="company-details" style={{ fontSize: '0.85rem', color: '#888', marginBottom: '25px', lineHeight: '1.5' }}>
              <div><strong>RUT:</strong> 78.187.108-7</div>
              <div><strong>Giro:</strong> Comercialización de Insumos Materiales de Computadores y Artículos Electrónicos</div>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Contacto Comercial</h4>
            <ul className="contact-info">
              <li>
                <Mail className="contact-icon" size={18} />
                <span>contacto@aistana.cl</span>
              </li>
              <li>
                <Phone className="contact-icon" size={18} />
                <span>+56 9 3292 4865</span>
              </li>
              <li>
                <MapPin className="contact-icon" size={18} />
                <span>Pedro de Valdivia 273, Of. 607, Providencia</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <ul className="quick-links">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#alliance">La Alianza</a></li>
              <li><a href="#features">Tecnología</a></li>
              <li><a href="#displays">Productos Huawei</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AISTANA. Distribuidor Oficial Huawei. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
