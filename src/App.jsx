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
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
