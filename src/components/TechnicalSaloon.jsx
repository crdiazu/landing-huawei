import React, { useState } from 'react';
import './TechnicalSaloon.css';

const TechnicalSaloon = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    position: '',
    honeypot: '' // Spam protection
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        
        // WhatsApp Redirect
        const phoneNumber = '56932924865';
        const message = `Hola, me acabo de registrar en el Technical Saloon Huawei.\n\nMis datos:\nNombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp in a new tab after a short delay to show success message
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1500);

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            position: '',
            honeypot: ''
          });
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(data.error || 'Error en el servidor');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Hubo un problema al enviar tu registro. Por favor, intenta nuevamente o contáctanos directamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="technical-saloon" className="technical-saloon-section">
      <div className="technical-saloon-bg">
        <div className="technical-saloon-glow"></div>
        <div className="technical-saloon-particles"></div>
      </div>
      
      <div className="brand-header-white">
        <div className="container brand-header-content">
          <img src="/huawei-vertical-logo.png" alt="Huawei" className="brand-logo-huawei-vertical" />
          <div className="brand-divider"></div>
          <img src="/logo-aistana-full.png" alt="Aistana" className="brand-logo-aistana" />
        </div>
      </div>

      <div className="container technical-saloon-content">
        <div className="event-header text-center">
          <div className="event-tag animate-fade-in">
            HUAWEI | Technical Saloon
          </div>
          
          <h1 className="event-title animate-fade-in delay-1">
            Technical Saloon
            <span className="red-text"> 18 de Marzo</span>
          </h1>
          
          <p className="event-subtitle animate-fade-in delay-2">
            Únete a nosotros para una experiencia exclusiva donde exploraremos las últimas innovaciones 
            en tecnología Huawei y soluciones empresariales de vanguardia.
          </p>
          
          <div className="event-details animate-fade-in delay-3">
            <div className="detail-item">
              <h3>📅 Fecha</h3>
              <p>18 de Marzo, 2026</p>
            </div>
            <div className="detail-item">
              <h3>⏰ Horario</h3>
              <p>10:00 AM - 12:00 PM</p>
            </div>
            <div className="detail-item">
              <h3>📍 Ubicación</h3>
              <p>Rosario Norte 532, Piso 17, Las Condes</p>
            </div>
          </div>
        </div>

        <div className="registration-section">
          <div className="registration-content">
            <h2 className="registration-title">Regístrate Ahora</h2>
            <p className="registration-description">
              Completa el formulario para asegurar tu participación en este evento exclusivo. 
              Cupos limitados.
            </p>
            
            {isSubmitted ? (
              <div className="success-message">
                <h3>¡Registro Exitoso!</h3>
                <p>Tu registro ha sido enviado correctamente. Te contactaremos pronto con más detalles.</p>
              </div>
            ) : (
              <form className="registration-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ingresa tu nombre completo"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Corporativo</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu.email@empresa.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="position">Cargo</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Tu cargo en la empresa"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono de Contacto</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+56 9 1234 5678"
                  />
                </div>

                {/* Honeypot field - hidden from real users */}
                <div style={{ display: 'none' }}>
                  <label htmlFor="honeypot">No llenar esto</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>
                
                {errorMessage && (
                  <div className="error-message" style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '15px' }}>
                    {errorMessage}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isLoading}
                  style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'wait' : 'pointer' }}
                >
                  {isLoading ? 'Enviando...' : 'Confirmar Registro'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSaloon;
