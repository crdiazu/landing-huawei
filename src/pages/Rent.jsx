import React from 'react';
import { Helmet } from 'react-helmet-async';

const Rent = () => {
  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#f9f9f9' }}>
      <Helmet>
        <title>Arriendo de Pantallas Interactivas Huawei | Aistana</title>
        <meta name="description" content="Arrienda pantallas interactivas Huawei IdeaHub con Aistana. Instalación rápida, soporte técnico y demos disponibles para tu empresa." />
      </Helmet>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', color: '#4A7C59', marginBottom: '20px' }}>Arriendo de Equipos</h1>
        <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '40px' }}>
          Potencia tus reuniones y eventos con el arriendo de pantallas interactivas Huawei IdeaHub. Ofrecemos planes flexibles adaptados a las necesidades de tu negocio.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>¿Por qué arrendar?</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Baja inversión inicial (OPEX vs CAPEX).</li>
              <li>Equipos siempre actualizados a la última tecnología.</li>
              <li>Instalación y configuración rápida incluida.</li>
              <li>Soporte técnico y mantenimiento durante todo el contrato.</li>
            </ul>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Planes Disponibles</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Arriendo para eventos (por días/semanas).</li>
              <li>Arriendo a corto plazo (1 a 6 meses).</li>
              <li>Arriendo a largo plazo (12 a 36 meses).</li>
              <li>Opción de leasing operativo.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;