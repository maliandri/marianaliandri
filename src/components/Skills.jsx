// src/components/Skills.jsx

import React from 'react';

// Defines el componente para la sección de habilidades
function Skills() {
  return (
    // Usa una etiqueta <section> para agrupar el contenido
    // Le asignamos un 'id' para poder enlazarlo desde un menú de navegación si lo deseas
    <section id="skills">
      <h2>Mis Habilidades</h2>
      {/* Aquí puedes usar una lista desordenada (<ul>) para tus habilidades */}
      <ul>
        <li>CIENCIA DE DATOS</li>
        <li>EXCEL</li>
        <li>MACROS EN EXCEL</li>
        <li>POWER PIVOT "" </li>
        <li>POWER QUERY ""</li>
        <li>POWER BI</li>
        <li>PYTHON</li>
        <li>WEB DEVELOPMENT</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Git & GitHub</li>
      </ul>
      {/* También podrías usar una cuadrícula (grid) con iconos,
          dependiendo del diseño que prefieras */}
    </section>
  );
}

// Exporta el componente para que pueda ser importado y usado en otros archivos
export default Skills;