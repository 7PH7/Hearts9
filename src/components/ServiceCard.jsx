// src/components/ServiceCard.jsx

import React from 'react';
import { FaCode, FaPenSquare, FaVideo } from 'react-icons/fa'; 

const ServiceCard = ({ title, description, isComingSoon = false }) => {
  
  const getIcon = () => {
    switch (title) {
      case "Programação Afiada":
        // COM O AJUSTE mt-1 para alinhamento vertical perfeito
        return <FaCode className="text-red-600 text-3xl mr-3 flex-shrink-0 mt-1" />;
      case "Copywriting Persuasivo":
        // COM O AJUSTE mt-1
        return <FaPenSquare className="text-red-600 text-3xl mr-3 flex-shrink-0 mt-1" />;
      case "Serviços Criativos":
        // COM O AJUSTE mt-1
        return <FaVideo className="text-gray-500 text-3xl mr-3 flex-shrink-0 mt-1" />;
      default:
        return null;
    }
  };

  return (
    <div className={`p-8 border rounded-xl shadow-lg transition duration-300 
      ${isComingSoon ? 'bg-zinc-800 border-dashed border-gray-600 opacity-70' : 'bg-zinc-900 border-red-600 hover:bg-zinc-800 hover:shadow-red-600/20'}`}
    >
      <h3 className="text-2xl font-bold mb-3 flex items-center"> 
        {getIcon()} 
        <span className="flex-grow">{title}</span> 
        {isComingSoon && <span className="ml-3 text-xs font-semibold py-1 px-2 bg-red-600 rounded-full flex-shrink-0">Em Breve</span>}
      </h3>
      <p className="text-gray-300 text-left">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;