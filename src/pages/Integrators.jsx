import React from 'react';
import { Helmet } from 'react-helmet-async';

const Integrators = () => {
  return (
    <div className="subpage-container bg-integrators">
      <div className="subpage-overlay" style={{ backgroundColor: 'rgba(26, 26, 26, 0.9)' }}></div>
      <div className="subpage-content" style={{ color: 'white' }}>
        <Helmet>
          <title>Programa para Integradores Huawei | Aistana</title>
          <meta name="description" content="Únete al programa de integradores de Aistana. Accede a precios especiales, stock local, demos de equipos Huawei y soporte técnico especializado." />
        </Helmet>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(230,0,18,0.2)', color: '#4A7C59', padding: '8px 20px', borderRadius: '20px', marginBottom: '20px', fontWeight: 'bold', border: '1px solid rgba(230,0,18,0.5)' }}>
            Programa de Partners B2B
          </div>
          <h1 className="huawei-brand-font" style={{ fontSize: '3.6rem', marginBottom: '20px' }}>Integradores de Tecnología</h1>
          <p style={{ fontSize: '1.4rem', color: '#ccc', marginBottom: '50px', lineHeight: '1.6' }}>
            En Aistana, buscamos formar alianzas estratégicas a largo plazo. Como distribuidor oficial de Huawei eKit, te proporcionamos las herramientas y el respaldo para que ganes más proyectos.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left' }}>
            <div style={{ backgroundColor: 'rgba(42, 42, 42, 0.8)', padding: '40px 30px', borderRadius: '16px', backdropFilter: 'blur(10px)', borderTop: '4px solid #E60012', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <i className="fa-solid fa-tags" style={{ fontSize: '2.5rem', color: '#E60012', marginBottom: '20px' }}></i>
              <h3 className="huawei-brand-font" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Precios y Stock</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '1.1rem' }}>Acceso a precios preferenciales de distribución, protección de proyectos y disponibilidad de stock local para entregas rápidas.</p>
            </div>
            <div style={{ backgroundColor: 'rgba(42, 42, 42, 0.8)', padding: '40px 30px', borderRadius: '16px', backdropFilter: 'blur(10px)', borderTop: '4px solid #E60012', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <i className="fa-solid fa-display" style={{ fontSize: '2.5rem', color: '#E60012', marginBottom: '20px' }}></i>
              <h3 className="huawei-brand-font" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Equipos Demo</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '1.1rem' }}>Disponemos de equipos demo para que puedas presentar las soluciones de Huawei directamente a tus clientes finales.</p>
            </div>
            <div style={{ backgroundColor: 'rgba(42, 42, 42, 0.8)', padding: '40px 30px', borderRadius: '16px', backdropFilter: 'blur(10px)', borderTop: '4px solid #E60012', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <i className="fa-solid fa-headset" style={{ fontSize: '2.5rem', color: '#E60012', marginBottom: '20px' }}></i>
              <h3 className="huawei-brand-font" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Soporte Especializado</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '1.1rem' }}>Acompañamiento en preventa, dimensionamiento de proyectos y soporte técnico post-venta garantizado.</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <a href="/contacto" className="btn-primary huawei-brand-font" style={{ display: 'inline-block', padding: '15px 40px', backgroundColor: '#E60012', border: '2px solid #E60012', color: 'white', textDecoration: 'none', borderRadius: '8px', fontSize: '1.2rem', transition: 'all 0.3s' }}>
              Registrarse como Integrador
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrators;