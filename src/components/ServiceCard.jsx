import React from "react";

const ServiceCard = ({title, description, isComingSoon = false}) => {
    return(
        <div className={`p-8 border rounded-xl shadow-lg transition duration-300
            ${isComingSoon ? 'bg-zinc-800 border-dashed border-gray-600 opacity-70': 'bg-zinc-900 border-red-600 hover:bg-zinc-800 hover:shadow-red-600/20'}`}>
                <h3 className="text-2xl font-bold mb-3 flex items-center justify-center md:justify-start">
                    {title}
                    {isComingSoon && <span className="ml-3 text-xs font-semibold py-1 px-2 bg-red-600 rounded-full">Em Breve</span>}
                </h3>
                <p className="text-gray-300 text-center md:text-left">
                    {description}
                    </p>
            </div>
    );
};
export default ServiceCard;