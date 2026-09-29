import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      id: "ideahub-s3",
      title: "Huawei IdeaHub S3",
      category: "Alta Gama & Salas de Directorio",
      desc: "El buque insignia de la colaboración inteligente. Rendimiento excepcional de hardware, cámara dual 4K con encuadre acústico por IA y la mejor experiencia BYOM para corporaciones exigentes.",
      features: [
        "Cámara Dual 4K con encuadre de voz y seguimiento inteligente",
        "Rendimiento de procesamiento de última generación",
        "Experiencia BYOM (Bring Your Own Meeting) inalámbrica 4K",
        "Pizarra colaborativa interactiva de latencia ultra baja (16ms)"
      ],
      pdf: "/pdfs/IdeaHub S3 Datasheet-for reading - Spanish_Latin America_.pdf",
      image: "/carousel_images/IMG_9285.jpg",
      badge: "Nuevo Flagship 2026",
      badgeColor: "#1F4E79",
      isDisplay: true
    },
    {
      id: "ideahub-s2",
      title: "Huawei IdeaHub S2",
      category: "Corporativo & Salas de Reuniones",
      desc: "Diseñada para la colaboración sin límites en el trabajo híbrido moderno. Integra BYOM, cámara 4K dedicada, Wi-Fi 6 y sistema operativo dual para una integración corporativa total.",
      features: [
        "BYOM completo para Teams, Zoom, Webex y Meet",
        "Wi-Fi 6 de alta velocidad y proyección directa en 1 toque",
        "Pizarra digital ultra fluida y reconocimiento óptico inteligente",
        "Algoritmos acústicos de cancelación de ruido ambiental"
      ],
      pdf: "/pdfs/HUAWEI IdeaHub S2 Datasheet(Spanish).pdf",
      image: "/carousel_images/IMG_9286.jpg",
      badge: "Más Vendido",
      badgeColor: "#4A7C59",
      isDisplay: true
    },
    {
      id: "ideahub-b3",
      title: "Huawei IdeaHub B3",
      category: "Oficinas & Espacios Colaborativos",
      desc: "La nueva generación para espacios de trabajo ágiles y huddles. Videoconferencia en la nube integrada, pantalla 4K antirreflejo y herramientas de colaboración sumamente intuitivas.",
      features: [
        "Videoconferencia HD en la nube sin hardware adicional",
        "Interacción multitáctil de alta precisión (hasta 20 puntos)",
        "Compartición de pantalla inalámbrica ultrarrápida",
        "Excelente relación costo-rendimiento para despliegues masivos"
      ],
      pdf: "/pdfs/HUAWEI IdeaHub B3 Datasheet(Spanish).pdf",
      image: "/carousel_images/IMG_9291.jpg",
      badge: "Alta Productividad",
      badgeColor: "#1F4E79",
      isDisplay: true
    },
    {
      id: "ideahub-board-3-pro",
      title: "Huawei IdeaHub Board 3 Pro",
      category: "Educación & Centros de Formación",
      desc: "La evolución de la enseñanza interactiva y capacitaciones. Diseñada para aulas conectadas con protección ocular certificada TUV y una experiencia de escritura natural inigualable.",
      features: [
        "Protección óptica contra luz azul certificada TÜV Rheinland",
        "Escritura fluida simultánea para múltiples usuarios",
        "Ecosistema abierto para aplicaciones educativas y de diseño",
        "Pantalla 4K con tecnología antirreflejo y ángulo de visión de 178°"
      ],
      pdf: "/pdfs/IdeaHub Board 3 Pro 24.0.0-Technical Presentation(25H2)-Spanish(Latin America) (1).pdf",
      image: "/carousel_images/IMG_9383.jpg",
      badge: "Educación & Training",
      badgeColor: "#2B6CB0",
      isDisplay: true
    },
    {
      id: "ops-operaciones",
      title: "Módulos OPS & Operaciones Continuas",
      category: "OPS & Mantenimiento Proactivo",
      desc: "Módulos informáticos estándar OPS compatibles con Windows y servicios integrales de soporte proactivo, monitoreo y mantenimiento preventivo para continuidad operacional.",
      features: [
        "Módulos OPS Intel Core certificados para Huawei IdeaHub",
        "Puesta en marcha, configuración de dominios y políticas IT",
        "SLA corporativo de soporte presencial y remoto prioritario",
        "Monitoreo de estado y actualizaciones de firmware programadas"
      ],
      pdf: null,
      image: "/carousel_images/IMG_9377.jpg",
      badge: "SLA Garantizado",
      badgeColor: "#4A7C59",
      isDisplay: false
    },
    {
      id: "accesorios",
      title: "Accesorios Oficiales IdeaHub",
      category: "Periféricos & Montaje",
      desc: "Complementos oficiales Huawei para enriquecer la experiencia colaborativa: pedestales rodantes de diseño prémium, soportes de pared articulados, stylus y llaves IdeaShare.",
      features: [
        "Pedestales móviles oficiales y soportes de pared certificados",
        "Dongles IdeaShare Key Tipo-C para proyección inalámbrica instantánea",
        "Stylus ópticos originales de baja latencia",
        "Cables HDMI 2.0 y adaptadores de red de alta fiabilidad"
      ],
      pdf: null,
      image: "/carousel_images/IMG_9295.jpg",
      badge: "Stock Local Inmediato",
      badgeColor: "#1F4E79",
      isDisplay: false
    },
    {
      id: "instalacion-capacitacion",
      title: "Instalación Certificada & Capacitación",
      category: "Servicios Llave en Mano",
      desc: "Servicio integral de instalación física de las pantallas, integración a la infraestructura de red corporativa y jornadas de adopción para equipos directivos y usuarios.",
      features: [
        "Montaje seguro estructural en muro o pedestal por técnicos certificados",
        "Configuración y calibración acústico-visual de la sala",
        "Capacitación presencial y material didáctico para los usuarios",
        "Certificado de entrega y protocolo de puesta en servicio"
      ],
      pdf: null,
      image: "/carousel_images/IMG_9381.jpg",
      badge: "Servicio Llave en Mano",
      badgeColor: "#2D3748",
      isDisplay: false
    }
  ];

  return (
    <div className="subpage-container bg-products" style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '120px 5% 80px' }}>
      <Helmet>
        <title>Catálogo Oficial Huawei IdeaHub en Chile | AISTANA</title>
        <meta name="description" content="Descubre la línea completa de pantallas interactivas Huawei IdeaHub S3, S2, B3 y Board 3 Pro. Disponibles para venta, arriendo y proyectos con soporte oficial en Chile." />
      </Helmet>
      
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', backgroundColor: 'rgba(31, 78, 121, 0.1)', color: '#1F4E79', fontWeight: 800, fontSize: '0.9rem', marginBottom: '16px', letterSpacing: '0.05em' }}>
            <i className="fa-solid fa-award"></i> PORTAFOLIO OFICIAL HUAWEI eKIT
          </div>
          <h1 className="huawei-brand-font" style={{ fontSize: '3.4rem', color: '#1A202C', marginBottom: '18px', fontWeight: 900 }}>
            Pantallas Interactivas Huawei IdeaHub
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#4A5568', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Equipa tus salas de directorio, oficinas modernas y espacios educativos con la tecnología de colaboración más avanzada del mercado. Venta directa y planes de arriendo mensual con stock local en Chile.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '35px' }}>
          {products.map((product, index) => (
            <Motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.06)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              whileHover={{ y: -8, boxShadow: '0 20px 35px rgba(0, 0, 0, 0.1)' }}
            >
              {/* Product Visual Header */}
              <div style={{ height: '240px', backgroundColor: '#EDF2F7', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  className="product-image-hover" 
                  loading="lazy"
                />
                
                {/* Badge Status */}
                <div style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: product.badgeColor || '#1F4E79', color: '#FFFFFF', padding: '6px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                  {product.badge}
                </div>

                {/* PDF Datasheet button if available */}
                {product.pdf && (
                  <a 
                    href={encodeURI(product.pdf)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      position: 'absolute', 
                      bottom: '15px', 
                      right: '15px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      backdropFilter: 'blur(4px)',
                      padding: '6px 12px', 
                      borderRadius: '8px', 
                      fontSize: '0.8rem', 
                      fontWeight: 800, 
                      color: '#1F4E79', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '6px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    <i className="fa-solid fa-file-pdf" style={{ color: '#E53E3E' }}></i> Ficha Técnica (PDF)
                  </a>
                )}
              </div>

              {/* Product Info */}
              <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#4A7C59', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px', display: 'block' }}>
                  {product.category}
                </span>
                
                <h2 className="huawei-brand-font" style={{ fontSize: '1.65rem', margin: '0 0 12px 0', color: '#1A202C', fontWeight: 800 }}>
                  {product.title}
                </h2>
                
                <p style={{ color: '#4A5568', marginBottom: '22px', fontSize: '0.98rem', lineHeight: '1.6', flexGrow: 0 }}>
                  {product.desc}
                </p>

                {/* Features List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px 0', flex: 1 }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ color: '#2D3748', marginBottom: '10px', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.45 }}>
                      <i className="fa-solid fa-circle-check" style={{ color: '#4A7C59', marginTop: '2px', fontSize: '0.95rem', flexShrink: 0 }}></i> 
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: 'auto' }}>
                  <a 
                    href={`https://wa.me/56932924865?text=${encodeURIComponent(`Hola AISTANA, quisiera cotizar la venta de: ${product.title}`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary" 
                    style={{ 
                      textAlign: 'center', 
                      padding: '12px 10px', 
                      backgroundColor: '#1F4E79', 
                      border: '2px solid #1F4E79', 
                      color: 'white', 
                      textDecoration: 'none', 
                      borderRadius: '8px', 
                      fontWeight: 800, 
                      fontSize: '0.88rem', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <i className="fa-brands fa-whatsapp"></i> {product.isDisplay ? 'Cotizar Venta' : 'Cotizar'}
                  </a>
                  
                  <a 
                    href={`https://wa.me/56932924865?text=${encodeURIComponent(`Hola AISTANA, quisiera consultar arriendo / disponibilidad de: ${product.title}`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary" 
                    style={{ 
                      textAlign: 'center', 
                      padding: '12px 10px', 
                      backgroundColor: 'transparent', 
                      color: '#4A7C59', 
                      border: '2px solid #4A7C59', 
                      textDecoration: 'none', 
                      borderRadius: '8px', 
                      fontWeight: 800, 
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    {product.isDisplay ? 'Arriendo OPEX' : 'Consultar'}
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Bottom Banner Demo CTA */}
        <div style={{ marginTop: '70px', padding: '40px', backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid #CBD5E0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '25px', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
          <div style={{ maxWidth: '650px' }}>
            <h3 className="huawei-brand-font" style={{ fontSize: '1.8rem', color: '#1A202C', margin: '0 0 10px 0', fontWeight: 800 }}>
              ¿Quieres probar los equipos antes de decidir?
            </h3>
            <p style={{ color: '#4A5568', margin: 0, fontSize: '1.05rem', lineHeight: 1.5 }}>
              Visita nuestro showroom corporativo en Providencia, Santiago. Tenemos pantallas IdeaHub S3, S2, B3 y pedestales interactivos listos para demostración en vivo.
            </p>
          </div>
          <a 
            href="https://wa.me/56932924865?text=Hola%20AISTANA%2C%20quisiera%20agendar%20una%20demostraci%C3%B3n%20en%20el%20Showroom." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              padding: '14px 28px', 
              backgroundColor: '#4A7C59', 
              color: '#FFFFFF', 
              borderRadius: '10px', 
              textDecoration: 'none', 
              fontWeight: 800, 
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 6px 15px rgba(74, 124, 89, 0.3)'
            }}
          >
            <i className="fa-regular fa-calendar-check"></i> Agendar Demostración
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
