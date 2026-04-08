import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const pages = [
    { to: '/', label: 'Inicio' },
    { to: '/productos', label: 'Productos' },
    { to: '/arriendo', label: 'Arriendo de Pantallas' },
    { to: '/integradores', label: 'Para Integradores' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
    { to: '/soporte-tecnico', label: 'Soporte Técnico' },
    { to: '/faq', label: 'Preguntas Frecuentes' },
    { to: '/politicas-de-privacidad', label: 'Políticas de Privacidad' },
    { to: '/terminos-y-condiciones', label: 'Términos y Condiciones' }
  ];

  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#fff' }}>
      <Helmet>
        <title>Mapa del Sitio | Aistana</title>
        <meta name="description" content="Mapa del sitio de Aistana: accesos directos a secciones y páginas." />
      </Helmet>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="huawei-brand-font" style={{ fontSize: '3rem', color: '#000', marginBottom: '20px', textAlign: 'center' }}>
          Mapa del Sitio
        </h1>
        <ul style={{ listStyle: 'none', padding: 0, margin: '30px 0 0' }}>
          {pages.map((p) => (
            <li key={p.to} style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <Link to={p.to} style={{ color: '#1F4E79', textDecoration: 'none', fontWeight: 700 }}>
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sitemap;
