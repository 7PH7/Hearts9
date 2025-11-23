import React from "react"

 {/* ABOUT */}
const About = () => {
  return (
    //ID ABOUT para linkar no Navbar
    <section id="about" className="py-24 px-6 bg-zinc-900 border-t border-b border-gray-800">
      
      <section className="py-24 px-6 bg-zinc-900 border-t border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">

        {/* Usando um Span para dar um Sub-título ou "Tagline" */}
          <span className="text-red-600 font-semibold uppercase text-sm tracking-widest block mb-2">
            Nossa Fundação
          </span>

          <h2 className="text-4xl md:text-5xl font extrabold mb-6 leading-tight">
            Código Afiado encontra Copy que Converte.
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Somos a união estratégica de **Programação de Alta Performance** e **Copywriting Persuasivo**.
            Não apenas construímos websites; criamos máquinas de vendas digitais customizadas para o seu sucesso
          </p>
          {/*adicionando enfase na dupla de especialistas*/}
          <div className="flex justify-center gap-10 mt-10">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-red-600 mb-1">O Coder</h3>
              <p className="text-gray-400">Especialista em automação e performance.</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-red-600 mb-1">O Copywriter</h3>
              <p className="text-gray-400">Especialista em gatilhos mentais e conversão.</p>
          </div>
        </div>
      </div>
      </section>
    </section>
  )
}
export default About