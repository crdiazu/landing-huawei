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
      </div>
    </div>
  );
};

export default Contact;