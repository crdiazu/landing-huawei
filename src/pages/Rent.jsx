import React from 'react';
import { Helmet } from 'react-helmet-async';

const Rent = () => {
  return (
    <div className="subpage-container bg-rent">
      <div className="subpage-overlay" style={{ backgroundColor: 'rgba(249, 249, 249, 0.92)' }}></div>
      <div className="subpage-content">
        <Helmet>
          <title>Arriendo de Pantallas Interactivas Huawei | Aistana</title>
          <meta name="description" content="Arrienda pantallas interactivas Huawei IdeaHub con Aistana. Instalación rápida, soporte técnico y demos disponibles para tu empresa." />
        </Helmet>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="huawei-brand-font" style={{ fontSize: '3.6rem', color: '#4A7C59', marginBottom: '20px' }}>Arriendo de Equipos</h1>
          <p style={{ fontSize: '1.4rem', color: '#333', marginBottom: '40px', lineHeight: '1.6' }}>
            Potencia tus reuniones y eventos con el arriendo de pantallas interactivas Huawei IdeaHub. Ofrecemos planes flexibles adaptados a las necesidades de tu negocio.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', backdropFilter: 'blur(10px)' }}>
              <h3 className="huawei-brand-font" style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#1A1A1A' }}>¿Por qué arrendar?</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8', color: '#555', fontSize: '1.1rem' }}>
                <li>Baja inversión inicial (OPEX vs CAPEX).</li>
                <li>Equipos siempre actualizados a la última tecnología.</li>
                <li>Instalación y configuración rápida incluida.</li>
                <li>Soporte técnico y mantenimiento durante todo el contrato.</li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', backdropFilter: 'blur(10px)' }}>
              <h3 className="huawei-brand-font" style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#1A1A1A' }}>Planes Disponibles</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8', color: '#555', fontSize: '1.1rem' }}>
                <li>Arriendo para eventos (por días/semanas).</li>
                <li>Arriendo a corto plazo (1 a 6 meses).</li>
                <li>Arriendo a largo plazo (12 a 36 meses).</li>
                <li>Opción de leasing operativo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;