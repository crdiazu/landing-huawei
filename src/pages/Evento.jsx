import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';

const Evento = () => {
  const [formData, setFormData] = useState({ name: '', company: '', role: '', email: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    const msg = `Hola AISTANA, confirmo mi interés en asistir al After Office: Intelligent Collaboration:\nNombre: ${formData.name}\nEmpresa: ${formData.company}\nCargo: ${formData.role}\nEmail: ${formData.email}`;
    window.open(`https://wa.me/56932924865?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="subpage-container bg-about" style={{ backgroundImage: "url('/bg_images/Huawei_IdeaHub_classroom.webp')", backgroundPosition: 'center', backgroundSize: 'cover', minHeight: '100vh', padding: '120px 5% 80px' }}>
      <div className="subpage-overlay" style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)' }}></div>
      <div className="subpage-content" style={{ position: 'relative', zIndex: 2 }}>
        <Helmet>
          <title>After Office Intelligent Collaboration | Evento Oficial AISTANA</title>
          <meta name="description" content="Acompáñanos a explorar el potencial de Intelligent Collaboration de Huawei en nuestro exclusivo evento After Office. Demos en vivo de IdeaHub." />
        </Helmet>
        
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(31, 78, 121, 0.1)', color: '#1F4E79', padding: '6px 18px', borderRadius: '20px', fontWeight: 800, marginBottom: '20px', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            <i className="fa-solid fa-star"></i> Evento Exclusivo para Partners & TI
          </div>
          
          <h1 className="huawei-brand-font" style={{ fontSize: '3.6rem', color: '#1A202C', marginBottom: '14px', lineHeight: '1.15', fontWeight: 900 }}>
            After Office:<br/>
            <span style={{ color: '#1F4E79' }}>Intelligent Collaboration</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: '#4A5568', marginBottom: '45px', marginTop: '16px', lineHeight: '1.7', maxWidth: '800px', margin: '16px auto 45px' }}>
            Únete a nosotros para explorar de primera mano el portafolio <strong>Huawei IdeaHub</strong>. Si tu empresa busca integrar soluciones de videoconferencia de vanguardia y rentabilizar proyectos corporativos, este encuentro es para ti.
          </p>
          
          <div style={{ textAlign: 'left', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '20px', boxShadow: '0 20px 45px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', border: '1px solid #E2E8F0' }}>
            {/* Left Column: What to expect */}
            <div>
              <h2 className="huawei-brand-font" style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#1A202C', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800 }}>
                <span style={{ color: '#4A7C59' }}>📍</span> ¿Qué te espera?
              </h2>
              
              <ul style={{ listStyleType: 'none', padding: '0', margin: '0', color: '#4A5568', lineHeight: '1.8', fontSize: '1.05rem' }}>
                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#4A7C59', marginTop: '4px', flexShrink: 0 }}></i>
                  <div><strong>Demostraciones en vivo</strong> de las series Huawei IdeaHub S3, S2 y B3.</div>
                </li>
                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#4A7C59', marginTop: '4px', flexShrink: 0 }}></i>
                  <div><strong>Networking estratégico</strong> con especialistas certificados de Huawei y directores TI.</div>
                </li>
                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#4A7C59', marginTop: '4px', flexShrink: 0 }}></i>
                  <div><strong>Cóctel & Catering prémium</strong> para una jornada distendida y de alto valor.</div>
                </li>
                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#4A7C59', marginTop: '4px', flexShrink: 0 }}></i>
                  <div>Precios y beneficios exclusivos de lanzamiento para integradores y empresas registradas.</div>
                </li>
              </ul>
            </div>
            
            {/* Right Column: RSVP Quick Form */}
            <div style={{ backgroundColor: '#F8FAFC', padding: '30px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <h3 className="huawei-brand-font" style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1A202C', fontWeight: 800 }}>Reserva tu Cupo</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px', fontSize: '0.9rem' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <span style={{ color: '#718096', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Lugar</span>
                  <span style={{ color: '#1A202C', fontWeight: 700 }}>Showroom AISTANA</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <span style={{ color: '#718096', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Ubicación</span>
                  <span style={{ color: '#1A202C', fontWeight: 700 }}>Providencia, Stgo.</span>
                </div>
              </div>
              
              <form onSubmit={handleRegister}>
                <div style={{ marginBottom: '12px' }}>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#4A5568', marginBottom: '4px' }}>Nombre Completo *</label>
                  <input 
                    type="text" 
                    id="name"
                    required 
                    placeholder="Tu nombre" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E0', fontSize: '0.95rem' }} 
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                  <div>
                    <label htmlFor="company" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#4A5568', marginBottom: '4px' }}>Empresa *</label>
                    <input 
                      type="text" 
                      id="company"
                      required 
                      placeholder="Empresa" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E0', fontSize: '0.95rem' }} 
                    />
                  </div>
                  <div>
                    <label htmlFor="role" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#4A5568', marginBottom: '4px' }}>Cargo</label>
                    <input 
                      type="text" 
                      id="role"
                      placeholder="Ej: Gerente TI" 
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E0', fontSize: '0.95rem' }} 
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#4A5568', marginBottom: '4px' }}>Email Corporativo *</label>
                  <input 
                    type="email" 
                    id="email"
                    required 
                    placeholder="ejemplo@empresa.cl" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E0', fontSize: '0.95rem' }} 
                  />
                </div>
                
                <button 
                  type="submit" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '10px', 
                    width: '100%', 
                    padding: '14px', 
                    backgroundColor: '#1F4E79', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '8px', 
                    fontWeight: 800, 
                    fontSize: '1.05rem', 
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(31, 78, 121, 0.3)',
                    transition: 'background-color 0.2s'
                  }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }}></i> Confirmar Asistencia vía WhatsApp
                </button>
              </form>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#718096', marginTop: '12px', marginBottom: 0 }}>* Cupos limitados por aforo de sala.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evento;
