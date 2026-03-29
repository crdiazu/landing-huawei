import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      title: "Huawei IdeaHub S3",
      category: "Alta Gama & Salas de Directorio",
      desc: "El buque insignia de la colaboración inteligente. Rendimiento excepcional, cámara dual 4K y la mejor experiencia de videoconferencia para corporaciones exigentes.",
      features: ["Cámara Dual 4K con encuadre de voz", "Rendimiento de hardware superior", "Experiencia BYOM avanzada"],
      pdf: "/pdfs/IdeaHub S3 Datasheet-for reading - Spanish_Latin America_.pdf",
      image: "/carousel_images/Imagen1.jpg"
    },
    {
      title: "Huawei IdeaHub S2",
      category: "Corporativo & Salas de Reuniones",
      desc: "Diseñada para la colaboración sin límites, integra BYOM, cámara 4K dedicada y sistema operativo dual para adaptarse a cualquier flujo de trabajo.",
      features: ["BYOM (Bring Your Own Meeting)", "Wi-Fi 6 de última generación", "Pizarra de latencia ultra baja (16ms)"],
      pdf: "/pdfs/HUAWEI IdeaHub S2 Datasheet(Spanish).pdf",
      image: "/carousel_images/Imagen3.jpg"
    },
    {
      title: "Huawei IdeaHub B3",
      category: "Oficinas & Espacios Colaborativos",
      desc: "La nueva generación para espacios de trabajo modernos. Videoconferencia en la nube integrada, pantalla 4K y herramientas de colaboración fluidas.",
      features: ["Videoconferencia HD en la nube", "Interacción multitáctil de precisión", "Compartición de pantalla en 1 clic"],
      pdf: "/pdfs/HUAWEI IdeaHub B3 Datasheet(Spanish).pdf",
      image: "/carousel_images/Imagen2.jpg"
    },
    {
      title: "Huawei IdeaHub Board 3 Pro",
      category: "Educación & Formación",
      desc: "La evolución de la enseñanza interactiva. Diseñada para aulas conectadas con protección ocular certificada y una experiencia de escritura natural inigualable.",
      features: ["Protección óptica de luz azul TUV", "Escritura fluida para múltiples usuarios", "Ecosistema de aplicaciones educativas"],
      pdf: "/pdfs/IdeaHub Board 3 Pro 24.0.0-Technical Presentation(25H2)-Spanish(Latin America) (1).pdf",
      image: "/carousel_images/Imagen7.jpg"
    },
    // Nueva ficha OPS (Operaciones)
    {
      title: "Ficha OPS (Operaciones)",
      category: "OPS (Operaciones)",
      desc: "Servicios de implementación, puesta en marcha, soporte proactivo y operación continua de soluciones Huawei IdeaHub en entornos corporativos.",
      features: [
        "Instalación y configuración certificada",
        "SLA de soporte y mantenimiento preventivo",
        "Monitoreo y operación 24/7"
      ],
      pdf: null,
      image: null
    },
    // Nueva ficha Accesorios
    {
      title: "Ficha Accesorios IdeaHub",
      category: "Accesorios",
      desc: "Periféricos y complementos oficiales para potenciar la experiencia IdeaHub: soportes, stylus, módulos de conectividad y más.",
      features: [
        "Soportes móviles y de pared certificados",
        "Stylus y consumibles originales",
        "Módulos, cables y adaptadores oficiales"
      ],
      pdf: null,
      image: null
    }
  ];

  return (
    <div style={{ padding: '120px 5%', minHeight: '80vh', backgroundColor: '#F5F5F5' }}>
      <Helmet>
        <title>Catálogo de Pantallas Huawei IdeaHub | Aistana</title>
        <meta name="description" content="Descubre la línea completa de pantallas interactivas Huawei IdeaHub S2, B2 y Board 2. Compra y arriendo en Chile." />
      </Helmet>
      
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', color: '#000', marginBottom: '20px' }}>Monitores y Pantallas Interactivas</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
          Descubre la línea completa de pantallas de colaboración inteligente de Huawei, diseñadas para potenciar tu productividad.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {products.map((product, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
          >
            {product.pdf ? (
              <a href={product.pdf} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                <div style={{ height: '250px', backgroundColor: '#eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  {product.image ? (
                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="product-image-hover" />
                  ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5', border: '2px dashed #cccccc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontWeight: 600 }}>
                      Imagen pendiente
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', color: '#4A7C59', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <i className="fa-solid fa-file-pdf"></i> Ver Datasheet
                  </div>
                </div>
              </a>
            ) : (
              <div style={{ height: '250px', backgroundColor: '#eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                {product.image ? (
                  <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="product-image-hover" />
                ) : (
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5', border: '2px dashed #cccccc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontWeight: 600 }}>
                    Espacio reservado para imagen
                  </div>
                )}
                <div style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', color: '#E08A00' }}>
                  PDF pendiente
                </div>
              </div>
            )}
            <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#4A7C59', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{product.category}</span>
              <h3 style={{ fontSize: '1.5rem', margin: '10px 0', color: '#333' }}>{product.title}</h3>
              <p style={{ color: '#666', marginBottom: '20px', fontSize: '0.95rem', lineHeight: '1.6' }}>{product.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', flex: 1 }}>
                {product.features.map((f, i) => (
                  <li key={i} style={{ color: '#444', marginBottom: '10px', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <i className="fa-solid fa-check" style={{ color: '#4A7C59', marginTop: '3px' }}></i> 
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <a href="/contacto" className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '12px 10px', backgroundColor: '#4A7C59', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.9rem', transition: 'all 0.3s' }}>Cotizar Venta</a>
                <a href="/contacto" className="btn-secondary" style={{ flex: 1, textAlign: 'center', padding: '12px 10px', backgroundColor: 'transparent', color: '#4A7C59', border: '2px solid #4A7C59', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.9rem', transition: 'all 0.3s' }}>Cotizar Arriendo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
