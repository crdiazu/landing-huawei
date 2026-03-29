import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="subpage-container bg-about">
      <div className="subpage-overlay" style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)' }}></div>
      <div className="subpage-content">
        <Helmet>
          <title>Quiénes Somos | Aistana Partner de Huawei</title>
          <meta name="description" content="Aistana es el aliado estratégico en Chile para la integración de soluciones de conectividad y pantallas Huawei eKit." />
        </Helmet>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="huawei-brand-font" style={{ fontSize: '3.6rem', color: '#4A7C59', marginBottom: '20px' }}>Quiénes Somos</h1>
          <p style={{ fontSize: '1.4rem', color: '#333', marginBottom: '40px', lineHeight: '1.8' }}>
            En <strong>Aistana</strong>, somos líderes en la provisión de soluciones tecnológicas para el entorno corporativo y educativo. 
            Nuestra alianza como <strong>Socio Experto y Distribuidor Oficial de Huawei</strong> nos permite entregar equipos de la más alta calidad, 
            respaldados por un servicio técnico de excelencia en todo Chile.
          </p>
          
          <div style={{ textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backdropFilter: 'blur(10px)' }}>
            <h3 className="huawei-brand-font" style={{ fontSize: '2rem', marginBottom: '15px', color: '#1A1A1A' }}>Nuestra Misión</h3>
            <p style={{ marginBottom: '30px', color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Acelerar la transformación digital de las empresas e instituciones educativas chilenas mediante la implementación de pantallas interactivas y sistemas de colaboración inteligente de clase mundial.
            </p>
            
            <h3 className="huawei-brand-font" style={{ fontSize: '2rem', marginBottom: '15px', color: '#1A1A1A' }}>Por qué elegirnos</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <li>Experiencia comprobada en integración de proyectos audiovisuales.</li>
              <li>Certificación técnica oficial de Huawei.</li>
              <li>Stock local para entregas e instalaciones rápidas.</li>
              <li>Servicio post-venta ágil y resolutivo.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;