import React from "react";

export default function Hero() {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md rounded-lg">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
        ¡Hola! Soy Mariano
      </h1>
      <p className="text-xl md:text-2xl mb-6">
        Desarrollador Web & Analista de Datos
      </p>
      <a
        href="#contacto"
        className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition"
      >
        Contactame
      </a>
    </div>
  );
}
