import React from 'react';
import { Helmet } from 'react-helmet-async';

const Integrators = () => {
  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#1A1A1A', color: 'white' }}>
      <Helmet>
        <title>Programa para Integradores Huawei | Aistana</title>
        <meta name="description" content="Únete al programa de integradores de Aistana. Accede a precios especiales, stock local, demos de equipos Huawei y soporte técnico especializado." />
      </Helmet>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(230,0,18,0.2)', color: '#4A7C59', padding: '5px 15px', borderRadius: '20px', marginBottom: '20px', fontWeight: 'bold' }}>
          Programa de Partners B2B
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Integradores de Tecnología</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '40px' }}>
          En Aistana, buscamos formar alianzas estratégicas a largo plazo. Como distribuidor oficial de Huawei eKit, te proporcionamos las herramientas y el respaldo para que ganes más proyectos.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ backgroundColor: '#2a2a2a', padding: '30px', borderRadius: '8px' }}>
            <i className="fa-solid fa-tags" style={{ fontSize: '2rem', color: '#4A7C59', marginBottom: '15px' }}></i>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Precios y Stock</h3>
            <p style={{ color: '#aaa' }}>Acceso a precios preferenciales de distribución, protección de proyectos y disponibilidad de stock local para entregas rápidas.</p>
          </div>
          <div style={{ backgroundColor: '#2a2a2a', padding: '30px', borderRadius: '8px' }}>
            <i className="fa-solid fa-display" style={{ fontSize: '2rem', color: '#4A7C59', marginBottom: '15px' }}></i>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Equipos Demo</h3>
            <p style={{ color: '#aaa' }}>Disponemos de equipos demo para que puedas presentar las soluciones de Huawei directamente a tus clientes finales.</p>
          </div>
          <div style={{ backgroundColor: '#2a2a2a', padding: '30px', borderRadius: '8px' }}>
            <i className="fa-solid fa-headset" style={{ fontSize: '2rem', color: '#4A7C59', marginBottom: '15px' }}></i>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Soporte Especializado</h3>
            <p style={{ color: '#aaa' }}>Acompañamiento en preventa, dimensionamiento de proyectos y soporte técnico post-venta garantizado.</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a href="/contacto" className="btn-primary" style={{ display: 'inline-block', padding: '15px 30px', backgroundColor: '#4A7C59', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
            Registrarse como Integrador
          </a>
        </div>
      </div>
    </div>
  );
};

export default Integrators;