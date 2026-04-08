import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Venta',
    message: ''
  });
  const [isLocationInfoOpen, setIsLocationInfoOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '56932924865';
    const message = `Hola Aistana, me interesa cotizar:\n\nNombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nInterés: ${formData.interest}\nMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#fff' }}>
      <Helmet>
        <title>Contacto y Cotizaciones | Aistana</title>
        <meta name="description" content="Contacta a Aistana para cotizar pantallas Huawei IdeaHub. Venta, arriendo y soporte para integradores." />
      </Helmet>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', color: '#000', marginBottom: '20px', textAlign: 'center' }}>Hablemos de tu Proyecto</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px', textAlign: 'center' }}>
          Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo a la brevedad.
        </p>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <a
            href="https://wa.me/56932924865"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#1F4E79', border: '2px solid #1F4E79', color: '#fff', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 'bold' }}
          >
            Hablemos de tu proyecto
          </a>
        </div>

        <form onSubmit={handleSubmit} style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Nombre Completo</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Empresa</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email Corporativo</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Teléfono</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} />
            </div>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Tipo de Consulta</label>
            <select name="interest" value={formData.interest} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="Venta">Cotización de Compra</option>
              <option value="Arriendo">Cotización de Arriendo</option>
              <option value="Integrador">Programa de Integradores</option>
              <option value="Soporte">Soporte Técnico</option>
            </select>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Mensaje o Detalles del Proyecto</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
          </div>

          <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#4A7C59', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Enviar Mensaje por WhatsApp
          </button>
        </form>

        <div style={{ marginTop: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ color: '#888', letterSpacing: '0.2em', fontSize: '0.9rem', fontWeight: 700 }}>UBICACIÓN</div>
            <h2 className="huawei-brand-font" style={{ fontSize: '2.4rem', margin: '8px 0 10px', color: '#000' }}>Dónde estamos</h2>
            <p style={{ color: '#666', margin: 0 }}>Av. Pedro de Valdivia 273, Providencia, Santiago, Chile</p>
          </div>
          <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.12)', position: 'relative' }}>
            <iframe
              title="Mapa AISTANA - Pedro de Valdivia"
              src="https://www.google.com/maps?q=Av.%20Pedro%20de%20Valdivia%20273%2C%20Providencia%2C%20Santiago%2C%20Chile&z=16&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <button
              type="button"
              onClick={() => setIsLocationInfoOpen((v) => !v)}
              aria-label="Ver información de ubicación"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -100%)',
                width: '48px',
                height: '48px',
                borderRadius: '999px',
                backgroundColor: '#4A7C59',
                border: '2px solid rgba(255,255,255,0.95)',
                boxShadow: '0 10px 22px rgba(0,0,0,0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: 0
              }}
            >
              <img src="/logo.png" alt="AISTANA" style={{ width: '28px', height: '28px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} loading="lazy" />
            </button>
            {isLocationInfoOpen && (
              <div
                role="dialog"
                aria-label="Información de ubicación AISTANA"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -165%)',
                  width: '280px',
                  backgroundColor: '#fff',
                  color: '#333',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  boxShadow: '0 14px 34px rgba(0,0,0,0.22)',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ fontWeight: 900, marginBottom: '4px' }}>AISTANA</div>
                <div style={{ fontSize: '0.95rem', lineHeight: 1.35 }}>
                  Av. Pedro de Valdivia 273, Of. 607<br />
                  Providencia, Santiago, Chile
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
