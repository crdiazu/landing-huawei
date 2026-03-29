import React from 'react';
import { Helmet } from 'react-helmet-async';

const Support2 = () => {
  const faqs = [
    { q: "¿Qué incluye el servicio de arriendo?", a: "El arriendo incluye el equipo (Huawei IdeaHub), soporte de pedestal o pared, instalación inicial, inducción de uso y soporte técnico remoto durante todo el contrato." },
    { q: "¿Es compatible con Zoom, Teams y Google Meet?", a: "Sí, todos los modelos de Huawei IdeaHub (S2, B2 y Board 2) son compatibles con las principales plataformas de videoconferencia mediante BYOM o integración nativa." },
    { q: "¿Cuáles son los requisitos para ser integrador?", a: "Debes ser una empresa del rubro tecnológico (TI, Audiovisual, Seguridad), tener RUT comercial vigente y llenar el formulario de registro en nuestra sección de Integradores." },
    { q: "¿Hacen despachos a regiones?", a: "Sí, despachamos a todo Chile. Los costos y tiempos de envío varían según la región y el volumen del pedido." }
  ];

  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#fff' }}>
      <Helmet>
        <title>Preguntas Frecuentes (FAQ) | Aistana</title>
        <meta name="description" content="Encuentra respuestas a las dudas más comunes sobre la venta, arriendo y soporte de pantallas interactivas Huawei." />
      </Helmet>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', color: '#4A7C59', marginBottom: '20px', textAlign: 'center' }}>Preguntas Frecuentes</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px', textAlign: 'center' }}>
          Encuentra respuestas rápidas a las consultas más habituales de nuestros clientes.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ backgroundColor: '#f9f9f9', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #4A7C59' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#333' }}>{faq.q}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{faq.a}</p>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '50px', textAlign: 'center', padding: '30px', backgroundColor: '#F5F5F5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '10px' }}>¿No encontraste lo que buscabas?</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>Escríbenos directamente y resolveremos tus dudas.</p>
          <a href="/contacto" className="btn-primary" style={{ display: 'inline-block', padding: '10px 25px', backgroundColor: '#4A7C59', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Contactar Soporte</a>
        </div>
      </div>
    </div>
  );
};

export default Support2;