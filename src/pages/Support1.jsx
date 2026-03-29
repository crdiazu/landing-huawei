import React from 'react';
import { Helmet } from 'react-helmet-async';

const Support1 = () => {
  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#f9f9f9' }}>
      <Helmet>
        <title>Soporte Técnico | Aistana</title>
        <meta name="description" content="Portal de soporte técnico de Aistana para pantallas interactivas Huawei IdeaHub." />
      </Helmet>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#4A7C59', marginBottom: '20px' }}>Soporte Técnico Especializado</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Nuestro equipo de ingenieros certificados por Huawei está listo para ayudarte con la instalación, configuración y mantenimiento de tus equipos.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'left' }}>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', borderTop: '4px solid #4A7C59', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Asistencia Remota</h3>
            <p style={{ color: '#555' }}>Diagnóstico y resolución de problemas de software, actualización de firmware y configuración de red a distancia.</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', borderTop: '4px solid #4A7C59', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Soporte en Terreno</h3>
            <p style={{ color: '#555' }}>Visitas técnicas para revisión de hardware, instalación de soportes y calibración de equipos en tus instalaciones.</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', borderTop: '4px solid #4A7C59', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Garantías</h3>
            <p style={{ color: '#555' }}>Gestión directa de garantías con la marca, reemplazo de partes y equipos de respaldo (según SLA contratado).</p>
          </div>
        </div>
        
        <div style={{ marginTop: '50px' }}>
          <a href="/contacto" style={{ display: 'inline-block', padding: '15px 30px', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Abrir Ticket de Soporte</a>
        </div>
      </div>
    </div>
  );
};

export default Support1;