import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const miniImages = [
    "/carousel_images/Imagen1.jpg",
    "/carousel_images/Imagen2.jpg",
    "/carousel_images/Imagen3.jpg",
    "/carousel_images/Imagen6.png",
    "/carousel_images/Imagen7.jpg",
    "/carousel_images/Imagen8.jpg",
  ];
  const [miniIndex, setMiniIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const id = setInterval(() => {
      setMiniIndex((i) => (i + 1) % miniImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Calculate fade out percentage (0 to 1)
  const fadeStart = 50;
  const fadeEnd = 500;
  
  let fadeProgress = 0;
  if (scrollY > fadeStart) {
    fadeProgress = Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
  }
  
  const heroOpacity = 1 - fadeProgress;

  return (
    <>
      <Helmet>
        <title>Aistana | Partner Estratégico Huawei IdeaHub</title>
        <meta name="description" content="Distribuidor oficial de Huawei IdeaHub. Pantallas interactivas para colaboración inteligente. Venta, arriendo y soporte técnico para integradores y proyectos." />
      </Helmet>
      
      <div className="hero-scroll-wrapper" style={{ height: '150vh', backgroundColor: '#FFFFFF', position: 'relative', zIndex: 1 }}>
        <section 
          className="hero" 
          id="inicio"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            opacity: heroOpacity,
            transition: 'all 0.3s ease',
            overflow: 'hidden'
          }}
        >
          <div className="hero-pattern"></div>
          <div className="tape-accent-hero" style={{ backgroundColor: '#4A7C59' }}></div>
          <div className="hero-content">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-text"
              >
                  <div className="tag" style={{ background: 'rgba(74, 124, 89, 0.2)', color: 'white', border: '1px solid rgba(74, 124, 89, 0.5)' }}>Canal oficial eKIT HUAWEI</div>
                  <h1>Colaboración Inteligente con <span className="huawei-brand-font" style={{ color: '#4A7C59' }}>Huawei IdeaHub</span></h1>
                  <p>Transforma tus salas de reuniones y cartelería digital con los monitores profesionales y pantallas interactivas de próxima generación. Cotiza con expertos de AISTANA.</p>
                  <div className="hero-buttons">
                      <a href="/productos" className="btn-primary" style={{ backgroundColor: '#4A7C59', borderColor: '#4A7C59' }}>Ver Productos</a>
                      <a href="/contacto" className="btn-secondary" style={{ borderColor: '#4A7C59', color: '#FFFFFF' }}>Hablar con un Asesor</a>
                  </div>
              </motion.div>
          </div>
        </section>
      </div>

      {/* Feature section */}
      <section className="features-section" style={{ 
        padding: '100px 5%', 
        position: 'relative', 
        zIndex: 10, 
        boxShadow: '0 -10px 30px rgba(0,0,0,0.05)',
        backgroundImage: 'url("/carousel_images/Imagen6.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Dark overlay for better text readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.85)', zIndex: 1 }}></div>
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '20px', color: '#1A1A1A' }}>Soluciones B2B Integrales</h2>
              <p style={{ textAlign: 'center', color: '#444', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.2rem', textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
                En Aistana, transformamos espacios de trabajo y aulas con tecnología de vanguardia. 
                Nuestras soluciones están diseñadas para maximizar la colaboración y productividad.
              </p>
              <div style={{ width: '60px', height: '4px', backgroundColor: '#4A7C59', margin: '0 auto 60px' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
              <motion.div whileHover={{ y: -10 }} className="feature-card" style={{ padding: '40px 30px', border: '1px solid rgba(255,255,255,0.5)', borderTop: '4px solid #4A7C59', borderRadius: '12px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(74, 124, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <i className="fa-solid fa-handshake" style={{ color: '#4A7C59', fontSize: '2rem' }}></i>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '15px' }}>Arriendo de Pantallas</h3>
                  <p style={{ color: '#555', lineHeight: '1.6' }}>Planes flexibles de arriendo mensual para empresas y eventos. Equipamiento de última generación siempre actualizado con soporte y mantenimiento preventivo incluido. Ideal para optimizar tu flujo de caja (OPEX).</p>
                  <a href="/arriendo" style={{ display: 'inline-block', marginTop: '25px', fontWeight: 'bold', color: '#4A7C59', textDecoration: 'none', padding: '10px 20px', border: '2px solid #4A7C59', borderRadius: '6px', transition: 'all 0.3s' }}>Conocer más →</a>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="feature-card" style={{ padding: '40px 30px', border: '1px solid rgba(255,255,255,0.5)', borderTop: '4px solid #4A7C59', borderRadius: '12px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(74, 124, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <i className="fa-solid fa-network-wired" style={{ color: '#4A7C59', fontSize: '2rem' }}></i>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '15px' }}>Para Integradores</h3>
                  <p style={{ color: '#555', lineHeight: '1.6' }}>Programa exclusivo para partners tecnológicos. Accede a precios preferenciales, protección de proyectos, stock local garantizado, demos disponibles y acompañamiento técnico especializado en preventa y postventa.</p>
                  <a href="/integradores" style={{ display: 'inline-block', marginTop: '25px', fontWeight: 'bold', color: '#4A7C59', textDecoration: 'none', padding: '10px 20px', border: '2px solid #4A7C59', borderRadius: '6px', transition: 'all 0.3s' }}>Área de Partners →</a>
              </motion.div>
              
              <motion.div whileHover={{ y: -10 }} className="feature-card" style={{ padding: '40px 30px', border: '1px solid rgba(255,255,255,0.5)', borderTop: '4px solid #4A7C59', borderRadius: '12px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(74, 124, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <i className="fa-solid fa-chalkboard-user" style={{ color: '#4A7C59', fontSize: '2rem' }}></i>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '15px' }}>Venta Directa Corporativa</h3>
                  <p style={{ color: '#555', lineHeight: '1.6' }}>Equipa tus salas de directorio y espacios educativos con la línea completa IdeaHub. Asesoría experta para elegir el tamaño y modelo adecuado, con instalación profesional y capacitación para tus usuarios.</p>
                  <a href="/productos" style={{ display: 'inline-block', marginTop: '25px', fontWeight: 'bold', color: '#4A7C59', textDecoration: 'none', padding: '10px 20px', border: '2px solid #4A7C59', borderRadius: '6px', transition: 'all 0.3s' }}>Ver Catálogo →</a>
              </motion.div>
          </div>
        </div>
      </section>

      {/* About Huawei IdeaHub Section */}
      <section style={{ padding: '100px 5%', backgroundColor: '#F9F9F9', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#333', marginBottom: '20px' }}>¿Qué es <span style={{ color: '#4A7C59' }}>Huawei IdeaHub</span>?</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
              Huawei IdeaHub es un endpoint de productividad para la oficina inteligente que integra múltiples funciones en un solo dispositivo: pizarra interactiva, proyector inalámbrico, equipo de videoconferencia profesional y aplicaciones de oficina nativas.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'flex-start' }}>
              <div style={{ flex: '1 1 300px' }}>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                  <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4A7C59', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className="fa-solid fa-video"></i>
                    </div>
                    <span style={{ fontSize: '1.1rem', color: '#444', fontWeight: '500' }}>Videoconferencias 4K con encuadre inteligente</span>
                  </li>
                  <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4A7C59', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className="fa-solid fa-pen-nib"></i>
                    </div>
                    <span style={{ fontSize: '1.1rem', color: '#444', fontWeight: '500' }}>Escritura natural con latencia ultra baja (16ms)</span>
                  </li>
                  <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4A7C59', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className="fa-solid fa-wifi"></i>
                    </div>
                    <span style={{ fontSize: '1.1rem', color: '#444', fontWeight: '500' }}>Proyección inalámbrica BYOM rápida y segura</span>
                  </li>
                </ul>
                <a href="/productos" className="btn-primary" style={{ backgroundColor: '#4A7C59', borderColor: '#4A7C59', padding: '12px 30px', fontSize: '1.1rem', display: 'inline-block' }}>Descubrir Modelos</a>
              </div>
              
              <div style={{ flex: '1 1 400px', position: 'relative' }}>
                {/* Image Carousel for IdeaHub */}
                <div style={{ width: '100%', height: '300px', backgroundColor: '#e0e0e0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(230,0,18,0.15)', border: '2px solid #E60012', display: 'grid', gridTemplateColumns: '1fr 80px' }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={miniImages[miniIndex]}
                      alt="IdeaHub preview"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <button
                      onClick={() => setMiniIndex((miniIndex - 1 + miniImages.length) % miniImages.length)}
                      aria-label="Anterior"
                      style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 10px', cursor: 'pointer' }}
                    >‹</button>
                    <button
                      onClick={() => setMiniIndex((miniIndex + 1) % miniImages.length)}
                      aria-label="Siguiente"
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 10px', cursor: 'pointer' }}
                    >›</button>
                  </div>
                  <div style={{ background: '#f7f7f7', padding: '6px', overflowY: 'auto' }}>
                    {miniImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Thumbnail ${i+1}`}
                        onClick={() => setMiniIndex(i)}
                        style={{ width: '100%', height: '42px', objectFit: 'cover', borderRadius: '6px', marginBottom: '6px', cursor: 'pointer', border: i === miniIndex ? '2px solid #E60012' : '2px solid transparent' }}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', backgroundColor: '#fff', padding: '10px 15px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', zIndex: 5 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-award" style={{ color: '#4A7C59', fontSize: '1.2rem' }}></i>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Premio Red Dot</h4>
                      <span style={{ fontSize: '0.7rem', color: '#666' }}>Diseño Excepcional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section style={{ padding: '80px 5%', backgroundColor: '#1A1A1A', color: 'white', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '40px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h3 style={{ fontSize: '3.5rem', color: '#4A7C59', margin: '0 0 10px 0', fontWeight: '800' }}>+500</h3>
            <p style={{ fontSize: '1.1rem', color: '#ccc' }}>Salas Equipadas</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 style={{ fontSize: '3.5rem', color: '#4A7C59', margin: '0 0 10px 0', fontWeight: '800' }}>99%</h3>
            <p style={{ fontSize: '1.1rem', color: '#ccc' }}>Satisfacción B2B</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 style={{ fontSize: '3.5rem', color: '#4A7C59', margin: '0 0 10px 0', fontWeight: '800' }}>24/7</h3>
            <p style={{ fontSize: '1.1rem', color: '#ccc' }}>Soporte Especializado</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h3 style={{ fontSize: '3.5rem', color: '#4A7C59', margin: '0 0 10px 0', fontWeight: '800' }}>Socio</h3>
            <p style={{ fontSize: '1.1rem', color: '#ccc' }}>Experto Huawei eKit</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '100px 5%', backgroundColor: '#FFFFFF', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px' }}>Casos de Éxito</h2>
            <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Lo que dicen nuestros clientes corporativos y educacionales sobre la implementación de Huawei IdeaHub.</p>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#4A7C59', margin: '20px auto 0' }}></div>
          </div>
          
          <div style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '20px', snapType: 'x mandatory' }}>
            {[
              { text: "La transición a salas híbridas fue perfecta. La pantalla IdeaHub S2 ha mejorado significativamente la comunicación entre nuestras sucursales.", author: "Director de TI, Sector Financiero" },
              { text: "El arriendo operativo nos permitió equipar 15 salas de clases sin afectar nuestro CAPEX. El soporte de Aistana ha sido impecable.", author: "Vicerrector, Institución Educativa" },
              { text: "Como integradores, trabajar con Aistana nos da la tranquilidad de contar con stock local y un respaldo técnico nivel experto de Huawei.", author: "Gerente General, Partner Tecnológico" }
            ].map((testimonial, i) => (
              <motion.div key={i} style={{ flex: '0 0 350px', backgroundColor: '#F9F9F9', padding: '40px 30px', borderRadius: '12px', snapAlign: 'start', position: 'relative' }} whileHover={{ y: -5 }}>
                <i className="fa-solid fa-quote-left" style={{ fontSize: '2rem', color: '#4A7C59', opacity: 0.2, position: 'absolute', top: '30px', left: '30px' }}></i>
                <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.6', marginBottom: '30px', marginTop: '20px', position: 'relative', zIndex: 1 }}>"{testimonial.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
                  <span style={{ fontWeight: 'bold', color: '#333' }}>{testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Form Section */}
      <section style={{ padding: '100px 5%', backgroundColor: '#F5F5F5', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div style={{ flex: '1 1 400px', backgroundColor: '#4A7C59', color: 'white', padding: '50px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Hablemos de tu proyecto</h3>
            <p style={{ marginBottom: '40px', lineHeight: '1.6', opacity: 0.9 }}>Un especialista en soluciones Huawei se pondrá en contacto contigo para asesorarte en la mejor opción para tu empresa.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}><i className="fa-solid fa-location-dot"></i> Rosario Norte 532 piso 17, Las Condes</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}><i className="fa-solid fa-envelope"></i> ignacio@aistana.cl</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}><i className="fa-brands fa-whatsapp"></i> +56 9 3292 4865</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 400px', padding: '50px' }}>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const message = `Hola Aistana, solicito información desde la web:\nNombre: ${formData.get('name')}\nEmail: ${formData.get('email')}\nEmpresa: ${formData.get('company')}`;
              window.open(`https://wa.me/56932924865?text=${encodeURIComponent(message)}`, '_blank');
            }}>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>Nombre Completo *</label>
                <input type="text" id="name" name="name" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>Email Corporativo *</label>
                <input type="email" id="email" name="email" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
              </div>
              <div style={{ marginBottom: '30px' }}>
                <label htmlFor="company" style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>Empresa</label>
                <input type="text" id="company" name="company" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#4A7C59', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s' }}>
                Solicitar Asesoría por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
