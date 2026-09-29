import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import newsPosts from '../data/news';

const NewsArchive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-archive-page" style={{ padding: '120px 5% 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="huawei-brand-font" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '20px', color: '#1A1A1A' }}>Noticias y Eventos</h1>
          <p style={{ color: '#666', fontSize: '1.4rem', maxWidth: '700px', margin: '0 auto' }}>Descubre lo último en innovación, eventos y capacitaciones de AISTANA.</p>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#4A7C59', margin: '20px auto 0' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
          {newsPosts.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -8 }}
              style={{ backgroundColor: '#F9F9F9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <Link to={`/noticias/${post.id}`} style={{ textDecoration: 'none' }}>
                <div style={{ height: '240px', backgroundColor: '#eaeaea', position: 'relative' }}>
                  <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: post.categoryColor, color: 'white', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.85rem' }}>
                    {post.category}
                  </div>
                </div>
                <div style={{ padding: '30px' }}>
                  <span style={{ color: '#4A7C59', fontSize: '0.9rem', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>{post.date}</span>
                  <h3 className="huawei-brand-font" style={{ fontSize: '1.5rem', color: '#333', marginBottom: '15px', lineHeight: '1.3' }}>{post.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px', fontSize: '1rem' }}>{post.excerpt}</p>
                  <span style={{ color: '#1F4E79', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Leer más <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArchive;
