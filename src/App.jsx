import React from "react";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
// Importar otros componentes que crees

export default function App() {
  return (
    <main className="max-w-4xl mx-auto p-4 space-y-16">
      <Hero />
      <Proyectos/>
      <Skills />
      <Contact />
      {/* Puedes agregar aquí otros componentes, como la sección de CV */}
    </main>
  );
}