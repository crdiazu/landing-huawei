import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';
import { Calendar, CheckCircle, Handshake, Monitor, PenTool, Users, Video, Wifi } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ParallaxBackground from '../components/ParallaxBackground';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  useIntersectionObserver();
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
  const [isOfficeMapInfoOpen, setIsOfficeMapInfoOpen] = useState(false);

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
      
      <div className="hero-scroll-wrapper" style={{ height: '120vh', backgroundColor: '#FFFFFF', position: 'relative', zIndex: 1 }}>
        <section 
          className="hero" 
          id="inicio"
          style={{
            position: 'sticky',
            top: 0,
            height: '70vh',
            opacity: heroOpacity,
            transition: 'all 0.3s ease',
            overflow: 'hidden'
          }}
        >
          <div className="hero-pattern"></div>
          <div className="tape-accent-hero" style={{ backgroundColor: '#1F4E79' }}></div>
          <div className="hero-content">
              <Motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-text"
              >
                  <div className="tag" style={{ background: 'rgba(31, 78, 121, 0.14)', color: '#1F4E79', border: '1px solid rgba(31, 78, 121, 0.35)' }}>Canal oficial eKIT HUAWEI</div>
                  <h1 className="huawei-brand-font" style={{ fontSize: '4.2rem' }}>Colaboración Inteligente con <span style={{ color: '#1F4E79' }}>Huawei IdeaHub</span></h1>
                  <p style={{ fontSize: '1.4rem' }}>Transforma los espacios colaborativos de tus clientes con pantallas interactivas de última generación. Cotiza con expertos de AISTANA.</p>
                  <div className="hero-buttons">
                      <a href="/productos" className="btn-primary" style={{ backgroundColor: '#1F4E79', borderColor: '#1F4E79' }}>Ver Productos</a>
                      <a href="mailto:ventas@aistana.cl" className="btn-secondary" style={{ borderColor: '#4A7C59', backgroundColor: '#4A7C59', color: '#FFFFFF' }}>Hablar con un Asesor</a>
                  </div>
              </Motion.div>
          </div>
        </section>
      </div>

      {/* Feature section */}
      <section className="parallax-section features-section" style={{ 
        padding: '100px 5%', 
        position: 'relative', 
        zIndex: 10, 
        boxShadow: '0 -10px 30px rgba(0,0,0,0.05)'
      }}>
        <ParallaxBackground 
          webpSrc="/bg_images/hybrid.webp" 
          fallbackSrc="/bg_images/hybrid.jpg" 
          overlayColor="rgba(255, 255, 255, 0.85)"
        />
        
        <div className="parallax-content" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
              <h2 className="huawei-brand-font" style={{ fontSize: '3.2rem', fontWeight: 800, textAlign: 'center', marginBottom: '20px', color: '#1A1A1A' }}>Soluciones B2B Integrales</h2>
              <p style={{ textAlign: 'center', color: '#444', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.4rem', textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
                En Aistana, te apoyamos a transformar espacios de trabajo y aulas con tecnología de vanguardia. 
                Nuestros productos y soluciones están diseñados para maximizar la colaboración y productividad de tus clientes.
              </p>
              <div style={{ width: '60px', height: '4px', backgroundColor: '#4A7C59', margin: '0 auto 60px' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
              <Motion.div whileHover={{ y: -10 }} className="feature-card" style={{ padding: '20px 24px', border: '1px solid rgba(255,255,255,0.5)', borderTop: '4px solid #1F4E79', borderRadius: '16px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(31, 78, 121, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <Calendar size={34} color="#4A7C59" strokeWidth={2} />
                  </div>
                  <h3 className="huawei-brand-font" style={{ fontSize: '2rem', color: '#333', marginBottom: '15px' }}>Arriendo de Pantallas</h3>
                  <p style={{ color: '#555', lineHeight: '1.6' }}>Planes flexibles de arriendo mensual para empresas y eventos. Equipamiento de última generación siempre actualizado con soporte y mantenimiento preventivo incluido. Ideal para optimizar tu flujo de caja (OPEX).</p>
                  <a href="/arriendo" style={{ display: 'inline-block', marginTop: 'auto', fontWeight: 'bold', color: '#4A7C59', textDecoration: 'none', padding: '10px 20px', border: '2px solid #4A7C59', borderRadius: '6px', transition: 'all 0.3s' }}>Conocer más →</a>
              </Motion.div>

              <Motion.div whileHover={{ y: -10 }} className="feature-card" style={{ padding: '20px 24px', border: '1px solid rgba(255,255,255,0.5)', borderTop: '4px solid #1F4E79', borderRadius: '16px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(31, 78, 121, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <Handshake size={34} color="#4A7C59" strokeWidth={2} />
                  </div>
                  <h3 className="huawei-brand-font" style={{ fontSize: '2rem', color: '#333', marginBottom: '15px' }}>Para Integradores</h3>
                  <p style={{ color: '#555', lineHeight: '1.6' }}>Programa exclusivo para partners tecnológicos. Accede a precios preferenciales, protección de proyectos, stock local garantizado, demos disponibles y acompañamiento técnico especializado en preventa y postventa.</p>
                  <a href="/integradores" style={{ display: 'inline-block', marginTop: 'auto', fontWeight: 'bold', color: '#4A7C59', textDecoration: 'none', padding: '10px 20px', border: '2px solid #4A7C59', borderRadius: '6px', transition: 'all 0.3s' }}>Conocer más →</a>
              </Motion.div>
              
              <Motion.div whileHover={{ y: -10 }} className="feature-card" style={{ padding: '20px 24px', border: '1px solid rgba(255,255,255,0.5)', borderTop: '4px solid #1F4E79', borderRadius: '16px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(31, 78, 121, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <Users size={34} color="#4A7C59" strokeWidth={2} />
                  </div>
                  <h3 className="huawei-brand-font" style={{ fontSize: '2rem', color: '#333', marginBottom: '15px' }}>Programa Resellers</h3>
                  <p style={{ color: '#555', lineHeight: '1.6' }}>programa exclusivo para partners Elite DP. Accede a compra de stock y precios preferenciales para tu cadena de distribucion.</p>
                  <a href="/productos" style={{ display: 'inline-block', marginTop: 'auto', fontWeight: 'bold', color: '#4A7C59', textDecoration: 'none', padding: '10px 20px', border: '2px solid #4A7C59', borderRadius: '6px', transition: 'all 0.3s' }}>Conocer más →</a>
              </Motion.div>
          </div>
        </div>
      </section>

      {/* About Huawei IdeaHub Section */}
      <section style={{ padding: '100px 5%', backgroundColor: '#F9F9F9', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 className="huawei-brand-font" style={{ fontSize: '3.2rem', fontWeight: 800, color: '#333', marginBottom: '20px' }}>¿Qué es <span style={{ color: '#1F4E79' }}>Huawei IdeaHub</span>?</h2>
            <p style={{ fontSize: '1.3rem', color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
              Huawei IdeaHub es un endpoint que aumenta la productividad y eficiencia, para una oficina inteligente, que integra múltiples funciones en un solo dispositivo: Pizarra interactiva, equipo de videoconferencia profesional y aplicaciones de oficina modernas.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'flex-start' }}>
              <div style={{ flex: '1 1 300px' }}>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                  <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#4A7C59', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Video size={18} color="#fff" strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: '1.1rem', color: '#444', fontWeight: '500' }}>Videoconferencias 4K con encuadre inteligente</span>
                  </li>
                  <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#4A7C59', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <PenTool size={18} color="#fff" strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: '1.1rem', color: '#444', fontWeight: '500' }}>Escritura natural con latencia ultra baja (16ms)</span>
                  </li>
                  <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#4A7C59', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Wifi size={18} color="#fff" strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: '1.1rem', color: '#444', fontWeight: '500' }}>Proyección inalámbrica BYOM rápida y segura</span>
                  </li>
                </ul>
                <a href="/productos" className="btn-primary" style={{ backgroundColor: '#1F4E79', borderColor: '#1F4E79', padding: '12px 30px', fontSize: '1.1rem', display: 'inline-block' }}>Descubrir Modelos</a>
              </div>
              
              <div style={{ flex: '1 1 400px', position: 'relative' }}>
                {/* Image Carousel for IdeaHub */}
                <div className="custom-carousel-container" style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(31,78,121,0.18)', border: '1px solid #1F4E79' }}>
                  <div style={{ position: 'relative', minHeight: '300px' }}>
                    <img
                      src={miniImages[miniIndex]}
                      alt="IdeaHub preview"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                      loading="lazy"
                    />
                    <button
                      onClick={() => setMiniIndex((miniIndex - 1 + miniImages.length) % miniImages.length)}
                      aria-label="Anterior"
                      style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 10px', cursor: 'pointer', zIndex: 2 }}
                    >‹</button>
                    <button
                      onClick={() => setMiniIndex((miniIndex + 1) % miniImages.length)}
                      aria-label="Siguiente"
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 10px', cursor: 'pointer', zIndex: 2 }}
                    >›</button>
                  </div>
                  <div className="custom-carousel-thumbnails" style={{ background: '#f7f7f7', padding: '6px', overflowY: 'auto' }}>
                    {miniImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Thumbnail ${i+1}`}
                        onClick={() => setMiniIndex(i)}
                        style={{ width: '100%', height: '42px', objectFit: 'cover', borderRadius: '6px', cursor: 'pointer', border: i === miniIndex ? '2px solid #1F4E79' : '2px solid transparent' }}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', backgroundColor: '#fff', padding: '10px 15px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', zIndex: 5 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-award" style={{ color: '#1F4E79', fontSize: '1.2rem' }}></i>
                    <div>
                      <h4 className="huawei-brand-font" style={{ margin: 0, fontSize: '1rem' }}>Premio Red Dot</h4>
                      <span style={{ fontSize: '0.8rem', color: '#666' }}>Diseño Excepcional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section className="parallax-section" style={{ padding: '80px 5%', color: 'white', position: 'relative', zIndex: 10 }}>
        <ParallaxBackground 
          webpSrc="/bg_images/fondo1_.webp" 
          fallbackSrc="/bg_images/fondo1_.png" 
          overlayColor="rgba(0,0,0,0.85)"
        />
        <div className="parallax-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: '1 1 520px', minWidth: '280px' }}>
                <div className="huawei-brand-font" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 14px', borderRadius: '999px', backgroundColor: 'rgba(74,124,89,0.14)', border: '1px solid rgba(74,124,89,0.35)', color: '#c9ffd9', fontWeight: 800, letterSpacing: '0.06em' }}>
                  VISITA NUESTRO SHOWROOM
                </div>
                <h2 className="huawei-brand-font" style={{ fontSize: '3.2rem', color: '#4A7C59', margin: '14px 0 10px', fontWeight: 900, lineHeight: 1.1 }}>
                  Vive la experiencia completa de Huawei IdeaHub
                </h2>
                <p style={{ fontSize: '1.18rem', color: 'rgba(255,255,255,0.86)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
                  Te esperamos en nuestro showroom físico con <strong>todos los modelos disponibles</strong> para prueba inmediata. Agenda una demo y comprueba en vivo la fluidez, la calidad de videoconferencia y las funciones BYOM.
                </p>
                <div style={{ marginTop: '18px', display: 'grid', gap: '10px' }}>
                  {[
                    'Prueba inmediata con acompañamiento experto',
                    'Comparación de modelos y tamaños en el mismo lugar',
                    'Demo guiada para tu caso de uso (empresa / educación)'
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle size={20} color="#4A7C59" strokeWidth={2} style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '26px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <a
                    href="https://wa.me/56932924865"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary huawei-brand-font"
                    style={{ display: 'inline-block', backgroundColor: '#1F4E79', border: '2px solid #1F4E79', color: '#fff', padding: '12px 22px', borderRadius: '10px', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 900 }}
                  >
                    Agendar visita por WhatsApp
                  </a>
                  <a
                    href="https://www.google.com/maps?q=Av.%20Pedro%20de%20Valdivia%20273%2C%20Providencia%2C%20Santiago%2C%20Chile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary huawei-brand-font"
                    style={{ display: 'inline-block', backgroundColor: 'transparent', border: '2px solid rgba(255,255,255,0.55)', color: '#fff', padding: '12px 22px', borderRadius: '10px', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 900 }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>

              <div style={{ flex: '1 1 420px', minWidth: '280px', maxWidth: '520px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 18px 50px rgba(0,0,0,0.35)' }}>
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 6500, disableOnInteraction: false }}
                    loop={false}
                    style={{ width: '100%' }}
                  >
                    <SwiperSlide>
                      <div style={{ padding: '14px' }}>
                        <img
                          src="/carousel_images/Imagen7.jpg"
                          alt="Showroom AISTANA"
                          style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '14px', display: 'block' }}
                          loading="lazy"
                        />
                        <div style={{ height: '10px' }} />
                        <img
                          src="/carousel_images/Imagen3.jpg"
                          alt="Huawei IdeaHub en demostración"
                          style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '14px', display: 'block' }}
                          loading="lazy"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="parallax-section" style={{ padding: '100px 5%', position: 'relative', zIndex: 10 }}>
        <ParallaxBackground 
          webpSrc="/bg_images/Huawei_IdeaHub_classroom.webp" 
          fallbackSrc="/bg_images/Huawei_IdeaHub_classroom.png" 
          overlayColor="rgba(255,255,255,0.92)"
        />
        <div className="parallax-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="huawei-brand-font" style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '20px' }}>Casos de Éxito</h2>
            <p style={{ color: '#666', fontSize: '1.4rem', maxWidth: '700px', margin: '0 auto' }}>Lo que dicen nuestros clientes corporativos y educacionales sobre la implementación de Huawei IdeaHub.</p>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#4A7C59', margin: '20px auto 0' }}></div>
          </div>
          
          <div style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '20px', snapType: 'x mandatory' }}>
            {[
              { text: "La transición a salas híbridas fue perfecta. La pantalla IdeaHub S2 ha mejorado significativamente la comunicación entre nuestras sucursales.", author: "Director de TI, Sector Financiero" },
              { text: "El arriendo operativo nos permitió equipar 15 salas de clases sin afectar nuestro CAPEX. El soporte de Aistana ha sido impecable.", author: "Vicerrector, Institución Educativa" },
              { text: "Como integradores, trabajar con Aistana nos da la tranquilidad de contar con stock local y un respaldo técnico nivel experto de Huawei.", author: "Gerente General, Partner Tecnológico" }
            ].map((testimonial, i) => (
              <Motion.div key={i} style={{ flex: '0 0 350px', backgroundColor: '#F9F9F9', padding: '20px 24px', borderRadius: '16px', snapAlign: 'start', position: 'relative' }} whileHover={{ y: -5 }}>
                <i className="fa-solid fa-quote-left" style={{ fontSize: '2rem', color: '#4A7C59', opacity: 0.2, position: 'absolute', top: '30px', left: '30px' }}></i>
                <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.6', marginBottom: '30px', marginTop: '20px', position: 'relative', zIndex: 1 }}>"{testimonial.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span title="Pantallas interactivas" style={{ display: 'inline-flex' }}>
                      <Monitor size={24} color="#4A7C59" strokeWidth={2} />
                    </span>
                    <span title="Videoconferencias" style={{ display: 'inline-flex' }}>
                      <Video size={24} color="#4A7C59" strokeWidth={2} />
                    </span>
                    <span title="Conectividad inalámbrica" style={{ display: 'inline-flex' }}>
                      <Wifi size={24} color="#4A7C59" strokeWidth={2} />
                    </span>
                  </div>
                  <span className="huawei-brand-font" style={{ color: '#333' }}>{testimonial.author}</span>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Form Section */}
      <section className="parallax-section" style={{ padding: '100px 5%', position: 'relative', zIndex: 10 }}>
        <ParallaxBackground 
          webpSrc="/bg_images/Huawei_IdeaHub_small_room.webp" 
          fallbackSrc="/bg_images/Huawei_IdeaHub_small_room.jpg" 
          overlayColor="rgba(245, 245, 245, 0.85)"
        />
        <div className="parallax-content" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div style={{ flex: '1 1 400px', backgroundColor: '#4A7C59', color: 'white', padding: '50px' }}>
            <h3 className="huawei-brand-font" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Hablemos de tu proyecto</h3>
            <p style={{ marginBottom: '40px', lineHeight: '1.6', opacity: 0.9, fontSize: '1.1rem' }}>Un especialista en soluciones Huawei se pondrá en contacto contigo para asesorarte en la mejor opción para tu empresa.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: '1 1 240px', minWidth: '240px' }}>
                  <i className="fa-solid fa-location-dot"></i>
                  <a
                    href="https://www.google.com/maps?q=Av.%20Pedro%20de%20Valdivia%20273%2C%20Providencia%2C%20Santiago%2C%20Chile"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                  >
                    Av. Pedro de Valdivia 273, Of. 607, Providencia
                  </a>
                </div>
                <div style={{ flex: '1 1 400px', minWidth: '280px', maxWidth: '400px' }}>
                  <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.18)' }}>
                    <iframe
                      title="Mapa AISTANA - Pedro de Valdivia"
                      src="https://www.google.com/maps?q=Av.%20Pedro%20de%20Valdivia%20273%2C%20Providencia%2C%20Santiago%2C%20Chile&z=16&output=embed"
                      width="100%"
                      height="300"
                      style={{ border: 0, display: 'block' }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <button
                      type="button"
                      onClick={() => setIsOfficeMapInfoOpen((v) => !v)}
                      aria-label="Ver información de ubicación"
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -100%)',
                        width: '44px',
                        height: '44px',
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
                      <img src="/logo.png" alt="AISTANA" style={{ width: '26px', height: '26px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} loading="lazy" />
                    </button>
                    {isOfficeMapInfoOpen && (
                      <div
                        role="dialog"
                        aria-label="Información de ubicación AISTANA"
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -155%)',
                          width: '260px',
                          backgroundColor: '#fff',
                          color: '#333',
                          borderRadius: '12px',
                          padding: '10px 12px',
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
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <i className="fa-solid fa-envelope" style={{ width: '18px', textAlign: 'center' }}></i>
                <a href="mailto:ventas@aistana.cl" style={{ color: 'inherit', textDecoration: 'underline' }}>ventas@aistana.cl</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <i className="fa-brands fa-whatsapp" style={{ width: '18px', textAlign: 'center' }}></i>
                <a href="https://wa.me/56932924865" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  +56 9 3292 4865
                </a>
              </li>
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
              <button type="submit" className="huawei-brand-font" style={{ width: '100%', padding: '15px', backgroundColor: '#1F4E79', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1.2rem', cursor: 'pointer', transition: 'background 0.3s' }}>
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
