import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rent from './pages/Rent';
import Integrators from './pages/Integrators';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Support1 from './pages/Support1';
import Support2 from './pages/Support2';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arriendo" element={<Rent />} />
            <Route path="/integradores" element={<Integrators />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/soporte-tecnico" element={<Support1 />} />
            <Route path="/faq" element={<Support2 />} />
            <Route path="/politicas-de-privacidad" element={<Privacy />} />
            <Route path="/terminos-y-condiciones" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
