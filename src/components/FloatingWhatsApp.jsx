import React, { useState } from 'react';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '56932924865';
  const defaultMessage = 'Hola AISTANA, quisiera solicitar información y cotización sobre soluciones Huawei IdeaHub.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Contacto por WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}
    >
      {/* Tooltip badge */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          padding: '8px 14px',
          borderRadius: '20px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          fontSize: '0.85rem',
          fontWeight: 700,
          display: isHovered ? 'flex' : 'none',
          alignItems: 'center',
          gap: '6px',
          border: '1px solid #E2E8F0',
          whiteSpace: 'nowrap',
          animation: 'fadeIn 0.2s ease-in-out'
        }}
      >
        <span style={{ color: '#25D366' }}>●</span> ¿Necesitas cotizar? ¡Escríbenos!
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          cursor: 'pointer'
        }}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
