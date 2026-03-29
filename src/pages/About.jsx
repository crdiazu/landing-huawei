import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#fff' }}>
      <Helmet>
        <title>Quiénes Somos | Aistana Partner de Huawei</title>
        <meta name="description" content="Aistana es el aliado estratégico en Chile para la integración de soluciones de conectividad y pantallas Huawei eKit." />
      </Helmet>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#4A7C59', marginBottom: '20px' }}>Quiénes Somos</h1>
        <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '40px', lineHeight: '1.8' }}>
          En <strong>Aistana</strong>, somos líderes en la provisión de soluciones tecnológicas para el entorno corporativo y educativo. 
          Nuestra alianza como <strong>Socio Experto y Distribuidor Oficial de Huawei</strong> nos permite entregar equipos de la más alta calidad, 
          respaldados por un servicio técnico de excelencia en todo Chile.
        </p>
        
        <div style={{ textAlign: 'left', backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Nuestra Misión</h3>
          <p style={{ marginBottom: '30px', color: '#555' }}>
            Acelerar la transformación digital de las empresas e instituciones educativas chilenas mediante la implementación de pantallas interactivas y sistemas de colaboración inteligente de clase mundial.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Por qué elegirnos</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555', lineHeight: '1.8' }}>
            <li>Experiencia comprobada en integración de proyectos audiovisuales.</li>
            <li>Certificación técnica oficial de Huawei.</li>
            <li>Stock local para entregas e instalaciones rápidas.</li>
            <li>Servicio post-venta ágil y resolutivo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;