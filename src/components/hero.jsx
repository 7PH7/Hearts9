// src/components/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    // ID da âncora para navegação: #hero
    <section id="hero" className="py-20 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Título Principal (Headline) com destaque de cor */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center leading-tight">
            Seu Próximo Nível 
            <span className="text-red-600">
                Digital
            </span> 
            Começa Aqui.
        </h1>

        {/* Subtítulo (Copy forte) */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto text-center mb-10 mt-6">
            Desenvolvimento de ponta e textos persuasivos para construir sua presença digital.
        </p>
        
        {/* CTA Primário */}
        <a
          href="https://forms.gle/JWzJyzQAiZQ8fwsVA" // URL do Google Forms
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-red-600 hover:bg-red-700 transition duration-300 rounded-xl text-lg font-bold shadow-2xl shadow-red-600/50 inline-block"
        >
          Solicitar Orçamento Personalizado
        </a>
      </div>
    </section>
  );
}

export default Hero;