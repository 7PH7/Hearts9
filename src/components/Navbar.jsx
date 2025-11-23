import React, { useState } from 'react';

const Navbar = () => {
    // Array de links para reutilização (corrigido para usar IDs em português)
    const navLinks =[
        { title: 'Home', href: '#hero'},      
        { title: 'About', href: '#about'},    
        { title: 'Services', href: '#services'}, 
    ];

    // Variavel para Controlar se o mobile está aberto
    const [isOpen, setIsOpen] = useState(false);
    
    // Função para fechar o menu ao clicar em um link
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return(
        // FIXAÇÃO: fixed top-0 w-full e z-50
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 transition-all duration-300 border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* 1. Logo (Branding) */}
                <a href="#hero" className="text-4xl font-extrabold ">
                    Hearts<span className="text-red-600">9</span>
                </a>

                {/* 2. Links de navegação (Desktop) */}
                <ul className="hidden md:flex space-x-12">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-gray-300 hover:text-red-600 transition font-medium">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 3. CTA Secundário (Desktop) */}
                <a
                    href="https://forms.gle/JWzJyzQAiZQ8fwsVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block px-4 py-2 bg-red-600 hover:bg-red-700 transition rounded-lg font-semibold text-sm shadow-md ">
                    Orçamento
                </a>
                
                {/* BOTÃO HAMBURGUER PARA MOBILE */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl text-2xl z-50 focus:outline-none">
                    {isOpen ? '✖' : '☰'} 
                </button>
            </div>

            {/* 5. MENU MOBILE */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute w-full top-full`}>
                <ul className="px-6 py-4 space-y-3 bg-zinc-950 border-5 border-gray-800 shadow-xl">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={handleLinkClick}
                                className="block text-gray-300 hover:text-red-600 transition font-medium text-lg">
                                {link.title}
                            </a>
                        </li>
                    ))}
                    
                    {/* CTA no Menu Mobile */}
                    <li>
                        <a
                            href="https://forms.gle/JWzJyzQAiZQ8fwsVA"
                            onClick={handleLinkClick}
                            className="block w-full text-center px-4 py-3 mt-2 bg-red-600 hover:bg-red-700 transition rounded-lg font-bold"
                            target="_blank"
                            rel="noopener noreferrer">
                            Orçamento
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;