import React from 'react';
import './Alliance.css';
import { ShieldCheck, Zap, Handshake } from 'lucide-react';

const Alliance = () => {
  return (
    <section id="alliance" className="section section-light alliance-section">
      <div className="container">
        <div className="alliance-grid">
          <div className="alliance-text">
            <h2 className="section-title">El Poder de una <span className="red-text">Gran Alianza</span></h2>
            <p className="alliance-desc">
              Como distribuidores oficiales de Huawei en Chile, AISTANA garantiza el acceso directo a la tecnología de vanguardia en pantallas comerciales e interactivas (IdeaHub).
            </p>
            <p className="alliance-desc">
              Nuestro compromiso es entregar soluciones integrales que impulsen la transformación digital de tu negocio, con el respaldo técnico y la garantía de una marca líder mundial.
            </p>
            <ul className="alliance-benefits">
              <li><ShieldCheck className="icon red-text" size={24} /> Garantía Oficial Huawei</li>
              <li><Zap className="icon red-text" size={24} /> Soporte Técnico Especializado</li>
              <li><Handshake className="icon red-text" size={24} /> Asesoría B2B Personalizada</li>
            </ul>
          </div>
          <div className="alliance-visual">
            <div className="visual-card">
              <div className="visual-logo-huawei">
                <span className="icon-huawei large"></span>
                HUAWEI
              </div>
              <div className="visual-cross">X</div>
              <img src="/logo-aistana-full.png" alt="AISTANA Logo" className="visual-logo-aistana-img" />
              <div className="visual-tape-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alliance;
