import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      name: 'Huawei IdeaHub S2',
      tag: 'Profesional',
      description: 'Colaboración sin límites basada en HarmonyOS. Pizarra interactiva y videoconferencia 4K UHD integradas.',
      specs: ['Video 4K', 'Pizarra 16ms', 'Cámara Inteligente', 'Wi-Fi 6'],
      image: '🖥️' // Placeholder for actual image
    },
    {
      name: 'Huawei IdeaHub B2',
      tag: 'Empresarial',
      description: 'El punto de inicio perfecto para oficinas digitales. Interfaz simplificada y alta compatibilidad con BYOM.',
      specs: ['1080p / 4K', 'Proyección Inalámbrica', 'Altavoces integrados', 'BYOM'],
      image: '📺' // Placeholder for actual image
    },
    {
      name: 'Pantallas Comerciales eKit',
      tag: 'Retail & Cartelería',
      description: 'Displays de alto brillo y operación 24/7 diseñados específicamente para impactar en tiendas y espacios públicos.',
      specs: ['Brillo 500 nits', 'Operación 24/7', 'Bordes ultra delgados', 'Gestión Remota'],
      image: '📱' // Placeholder for actual image
    }
  ];

  return (
    <section id="displays" className="section section-dark products-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Portafolio <span className="red-text">Destacado</span></h2>
          <p className="section-subtitle">
            Conoce la gama de soluciones visuales que AISTANA trae a Chile, perfectas para corporativos, educación y retail.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-tag">{product.tag}</div>
              <div className="product-image-container">
                <div className="product-image-placeholder">{product.image}</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                
                <div className="product-specs">
                  {product.specs.map((spec, i) => (
                    <span className="spec-item" key={i}>{spec}</span>
                  ))}
                </div>
                
                <button className="btn btn-secondary product-btn">Cotizar Modelo</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
