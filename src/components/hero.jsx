import React from "react"
{/* HERO */}

const Hero = () => {
  return (

    //ID HERO para linkar no Navbar
    <section id="hero" 
    className="flex flex-col justify-center items-center px-6 py-40">

    <section className="flex flex-col justify-center items-center px-6 py-40">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center leading-tight">
        Seu Próximo Nível <span className="text-red-600">Digital</span> Começa Aqui.
      </h1>

      <p className="text-xl md:text-2xl text-gray-200 max-w-4xl text-center mb-10 mt-6">
        Desenvolvimento de ponta e textos persuasivos para construir sua presença digital.
      </p>

      {/* CTA mais específico e atraente */}
      <a
        href="https://forms.gle/JWzJyzQAiZQ8fwsVA" 
        target="_blank" 
        rel="noopener noreferrer"// usa link que leva para o contato
        className="px-8 py-4 bg-red-600 hover:bg-red-700 transition duration-300 rounded-xl text-lg font-bold shadow-2xl shadow-red-600/50">
          Solicitar Orçamento Personalizado
        </a>
        </section>
    </section>
  );
};

export default Hero;