import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css";

// El componente principal de la aplicación, el cual renderiza los demás componentes
export default function App() {
  return (
    <main className="font-sans min-h-screen text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <div className="max-w-5xl mx-auto p-4 space-y-20">
        <Hero />
        <Proyectos />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
