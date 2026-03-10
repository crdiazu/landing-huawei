import React from 'react';
import './Features.css';
import { Layers, Cloud, Activity, Lock, Maximize, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Layers size={36} />,
      title: 'Pizarra Interactiva',
      description: 'Latencia ultra baja para escribir tan natural como en papel.'
    },
    {
      icon: <Maximize size={36} />,
      title: 'Calidad 4K UHD',
      description: 'Resolución superior para presentaciones más nítidas y colores vibrantes.'
    },
    {
      icon: <Activity size={36} />,
      title: 'Cámara Inteligente',
      description: 'Seguimiento de voz automático y encuadre perfecto en videollamadas.'
    },
    {
      icon: <Smartphone size={36} />,
      title: 'Proyección Inalámbrica',
      description: 'Comparte pantalla desde cualquier dispositivo con un solo toque.'
    },
    {
      icon: <Cloud size={36} />,
      title: 'Gestión en la Nube',
      description: 'Administración centralizada vía eKit para toda la flota de pantallas.'
    },
    {
      icon: <Lock size={36} />,
      title: 'Seguridad Empresarial',
      description: 'Protección de datos y cifrado nivel corporativo en cada sesión.'
    }
  ];

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Tecnología diseñada para <span className="red-text">impresionar</span></h2>
          <p className="section-subtitle">
            Cada pantalla comercial Huawei IdeaHub incorpora las últimas innovaciones para facilitar la colaboración, ya sea en salas de reuniones directivas o en aulas modernas.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
