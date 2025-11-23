// src/App.jsx
import React from 'react';
// Importação de todos os componentes da nossa Landing Page
import Navbar from './components/Navbar'; 
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import CtaFinal from './components/ctafinal';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-black text-white">
      
      {/* Ordem correta dos componentes */}
      <Navbar /> 
      <Hero />
      <About />
      <Services />
      <CtaFinal />
      <Footer />

    </div>
  );
}

export default App;