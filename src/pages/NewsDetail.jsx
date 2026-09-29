import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import newsPosts from '../data/news';
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const post = newsPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="container" style={{ padding: '150px 5%', textAlign: 'center' }}>
        <h2>Noticia no encontrada</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      {/* Hero Header */}
      <section className="news-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${post.thumbnail})` }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="post-category" style={{ backgroundColor: post.categoryColor }}>{post.category}</span>
            <span className="post-date">{post.date}</span>
            <h1>{post.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="news-content-section">
        <div className="container content-grid">
          <motion.article 
            className="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="share-section">
              <hr />
              <p>Compartir esta noticia:</p>
              <div className="share-links">
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a href={`https://wa.me/?text=${post.title}%20${window.location.href}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
            
            <Link to="/#noticias" className="back-link">
              <i className="fa-solid fa-arrow-left"></i> Volver a Noticias
            </Link>
          </motion.article>

          <aside className="sidebar">
            <div className="sidebar-card contact-card">
              <h3>¿Interesado en asistir a nuestros eventos?</h3>
              <p>Suscríbete para recibir invitaciones exclusivas y novedades.</p>
              <Link to="/contacto" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Contactar Ventas</Link>
            </div>

            <div className="sidebar-card other-news">
              <h3>Otras Noticias</h3>
              {newsPosts.filter(p => p.id !== id).map(other => (
                <Link key={other.id} to={`/noticias/${other.id}`} className="other-news-item">
                  <div className="other-img">
                    <img src={other.thumbnail} alt={other.title} />
                  </div>
                  <div className="other-info">
                    <h4>{other.title}</h4>
                    <span>{other.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
