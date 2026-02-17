// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-10 px-6 border-t border-gray-800">
      
      {/* ID da âncora para navegação: #contato */}
      <div id="contato" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
        
        {/* Coluna 1: Branding e Direitos Autorais */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-3">Hearts9</h3>
          <p className="text-sm mb-2">Assessoria Criativa & Tech</p>
          <p className="text-xs mt-4">© 2025 Hearts9. Todos os direitos reservados.</p>
        </div>

        {/* Coluna 2: Navegação (Links Úteis) */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navegação Rápida</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-red-600 transition">Início</a></li>
            <li><a href="#sobre" className="hover:text-red-600 transition">Quem Somos</a></li>
            <li><a href="#servicos" className="hover:text-red-600 transition">Serviços</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Fale Conosco</h4>
          <p className="text-sm">E-mail: contato@9cups.com</p>
          <p className="text-sm">WhatsApp: (XX) 9XXXX-XXXX</p>
          <div className="flex space-x-4 mt-3">
             <a href="#" className="hover:text-red-600 transition">🏠</a>
          </div>
        </div>
      </div>
      
      {/* Linha de Assinatura/Política de Privacidade */}
      <div className="text-center text-xs mt-10 border-t border-gray-800 pt-6">
        <p>Desenvolvido com ☕️ e Código. <a href="#" className="underline hover:text-red-600">Política de Privacidade</a></p>
      </div>
    </footer>
  );
}

export default Footer;