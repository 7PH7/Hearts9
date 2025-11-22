      {/* CTA FINAL */}
const CtaFinal = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-r from-black to-zinc-900">
      <div className="max-w-4xl mx-auto text-center p-10 border border-red-600/50 rounded bg-zinc-900/50 shadow-2xl shadow-red-600/10">
      
      {/* 2. Copy mais direta e focada no resultado final */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 leading-tight">
        Chegou a hora de Dominar o Mundo Digital.
      </h2>

      <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        Transforme visitantes curiosos em clientes fiéis. Converse diretamente com nossos especialistas.
      </p>
      {/* 3. Botão com estilo de "poder" (Power Button) */}
      <a
        href="#contact"// assume-se que este link leva a um formulario ou wpp
        className="inline-block px-10 py-4 bg-red-600 hover:bg-red-700 transition duration-300 rounded-full text-lg font-bold uppercase tracking-wider transform hover:scale-105 active:scale-95 shadow-red-600/50 shadow-2xl">
          Iniciar Minha Jornada Agora
        </a>
      </div>
    </section>
  )
}
export default CtaFinal;