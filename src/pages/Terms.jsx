import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#fff' }}>
      <Helmet>
        <title>Términos y Condiciones | Aistana</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de Aistana." />
      </Helmet>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="huawei-brand-font" style={{ fontSize: '3rem', color: '#000', marginBottom: '20px', textAlign: 'center' }}>
          Términos y Condiciones
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.8 }}>
          Al acceder y utilizar este sitio web, aceptas estos términos de uso. La información publicada tiene fines informativos y puede cambiar sin previo aviso.
        </p>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Uso del sitio</h2>
        <ul style={{ color: '#444', lineHeight: 1.9, paddingLeft: '18px' }}>
          <li>No usar el sitio con fines ilícitos o que afecten su disponibilidad.</li>
          <li>No intentar acceder a secciones restringidas o sistemas asociados.</li>
        </ul>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Cotizaciones y servicios</h2>
        <p style={{ color: '#444', lineHeight: 1.9 }}>
          Las cotizaciones y condiciones comerciales se confirman a través de los canales oficiales de AISTANA. El envío de formularios o mensajes por WhatsApp no constituye una aceptación automática de servicios.
        </p>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Contacto</h2>
        <p style={{ color: '#444', lineHeight: 1.9 }}>
          Para consultas, escríbenos a <a href="mailto:ventas@aistana.cl" style={{ color: '#1F4E79', textDecoration: 'underline' }}>ventas@aistana.cl</a>.
        </p>
      </div>
    </div>
  );
};

export default Terms;
