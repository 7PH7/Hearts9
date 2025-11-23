{/* SERVICES */}
import React from "react"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    //ID SERVICES para linkar no Navbar
    <section id="services" className="py-24 px-6 bg-black">

    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nossas Soluções</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ServiceCard
            title="Programação Afiada"
            description="Desenvolvimento de sites, landing pages de alta conversão, automações e aplicativos sob medida com código limpo e moderno."
          />
          <ServiceCard
            title="Copywriting Persuasivo"
            description="Textos estrategicamente elaborados para captar atenção, engajar seu público e converter visitantes em clientes fiéis."
          />
          <ServiceCard
            title="Serviços Criativos"
            description="Em breve, expandiremos nossa oferta para incluir edição profissional de vídeo e design gráfico para complementar sua estratégia digital."
            isComingSoon={true} //usando a prop para o estilo "Em Breve"
          />
        </div>
      </div>
    </section>
    </section>
  );
};

export default Services;