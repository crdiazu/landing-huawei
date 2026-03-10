import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        {/* Placeholder for dynamic animated background */}
        <div className="hero-glow"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className="container hero-content text-center">
        <div className="brand-tag animate-fade-in">AISTANA | Distribuidor Oficial Huawei</div>
        
        <h1 className="hero-title animate-fade-in delay-1">
          La Siguiente Generación de <br />
          <span className="red-text">Pantallas Inteligentes</span>
        </h1>
        
        <p className="hero-subtitle animate-fade-in delay-2">
          Colaboración sin límites. Descubre cómo las pantallas comerciales y Huawei IdeaHub transforman tus espacios de trabajo y educación en entornos hiperconectados.
        </p>
        
        <div className="hero-actions animate-fade-in delay-3">
          <a href="#displays" className="btn btn-primary">Ver Modelos</a>
          <a href="#contact" className="btn btn-secondary">Asesoría Gratuita</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
