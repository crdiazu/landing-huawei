import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#fff' }}>
      <Helmet>
        <title>Políticas de Privacidad | Aistana</title>
        <meta name="description" content="Políticas de privacidad de AISTANA SpA: datos personales, finalidades, derechos y canales de contacto." />
      </Helmet>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="huawei-brand-font" style={{ fontSize: '3rem', color: '#000', marginBottom: '20px', textAlign: 'center' }}>
          Políticas de Privacidad
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.8 }}>
          En AISTANA SpA nos comprometemos a proteger la privacidad y el tratamiento responsable de los datos personales. Esta política explica qué información recopilamos, cómo la usamos y cuáles son tus derechos cuando navegas por este sitio o nos contactas por formularios, correo o WhatsApp.
        </p>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Responsable del tratamiento</h2>
        <p style={{ color: '#444', lineHeight: 1.9 }}>
          El responsable del tratamiento es <strong>AISTANA SpA</strong>. Para consultas relacionadas con privacidad o datos personales, puedes escribirnos a{' '}
          <a href="mailto:ventas@aistana.cl" style={{ color: '#1F4E79', textDecoration: 'underline' }}>ventas@aistana.cl</a>.
        </p>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Datos que podemos recopilar</h2>
        <ul style={{ color: '#444', lineHeight: 1.9, paddingLeft: '18px' }}>
          <li>Identificación y contacto: nombre, correo, teléfono, empresa y cargo (si corresponde).</li>
          <li>Información comercial: interés (compra/arriendo/integradores/soporte) y detalles del proyecto.</li>
          <li>Mensajes y comunicaciones: contenido de formularios, correos y conversaciones iniciadas por WhatsApp.</li>
          <li>Datos técnicos: información básica de navegación y uso del sitio (por ejemplo, páginas visitadas), mediante herramientas analíticas.</li>
        </ul>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Cómo obtenemos la información</h2>
        <ul style={{ color: '#444', lineHeight: 1.9, paddingLeft: '18px' }}>
          <li>Cuando completas formularios en el sitio o nos contactas por correo.</li>
          <li>Cuando haces clic en “WhatsApp” y decides enviarnos un mensaje.</li>
          <li>Cuando navegas por el sitio (datos de uso/analítica).</li>
        </ul>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Finalidades del tratamiento</h2>
        <ul style={{ color: '#444', lineHeight: 1.9, paddingLeft: '18px' }}>
          <li>Gestionar solicitudes: responder consultas, coordinar demos, visitas a showroom y cotizaciones.</li>
          <li>Relación comercial: seguimiento de oportunidades, propuestas y soporte asociado a proyectos.</li>
          <li>Mejora del servicio: analizar el uso del sitio para mejorar contenidos, experiencia y rendimiento.</li>
          <li>Cumplimiento normativo: atender requerimientos legales o de autoridades competentes.</li>
        </ul>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Base de legitimación</h2>
        <p style={{ color: '#444', lineHeight: 1.9 }}>
          Tratamos datos personales principalmente en base a tu consentimiento (por ejemplo, al completar formularios o iniciar contacto), y/o para gestionar solicitudes y comunicaciones relacionadas con cotizaciones, demos y soporte. Cuando corresponda, también podremos tratar datos para cumplir obligaciones legales aplicables.
        </p>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Compartición de datos</h2>
        <p style={{ color: '#444', lineHeight: 1.9 }}>
          No vendemos tus datos personales. Podremos compartir información con proveedores que nos ayuden a operar el sitio y gestionar comunicaciones (por ejemplo, servicios de analítica o mensajería), bajo obligaciones de confidencialidad y únicamente para los fines descritos en esta política.
        </p>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Conservación y seguridad</h2>
        <p style={{ color: '#444', lineHeight: 1.9 }}>
          Conservamos los datos por el tiempo necesario para responder tu solicitud, mantener la relación comercial y/o cumplir obligaciones legales. Implementamos medidas razonables de seguridad para proteger la información frente a accesos no autorizados, pérdida o uso indebido. Sin embargo, ningún sistema es completamente infalible.
        </p>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Derechos de las personas</h2>
        <p style={{ color: '#444', lineHeight: 1.9 }}>
          Puedes solicitar acceso, rectificación, actualización o eliminación de tus datos personales, así como realizar consultas sobre su tratamiento. Para ejercer tus derechos, contáctanos en{' '}
          <a href="mailto:ventas@aistana.cl" style={{ color: '#1F4E79', textDecoration: 'underline' }}>ventas@aistana.cl</a>.
        </p>

        <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', margin: '28px 0 12px', color: '#000' }}>Cambios a esta política</h2>
        <p style={{ color: '#444', lineHeight: 1.9 }}>
          Podemos actualizar esta política para reflejar mejoras del sitio o cambios regulatorios. Te recomendamos revisarla periódicamente.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
