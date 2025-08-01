// src/components/Skills.jsx

import React from 'react';
function Skills() {
  return (
    <section id="skills">
      <h2>Mis Habilidades</h2>
      {/* Aquí puedes usar una lista desordenada (<ul>) para tus habilidades */}
<ul class="skills-list">
  <li class="skill-item">Ciencia de Datos</li>
  <li class="skill-item">Excel</li>
  <li class="skill-item">Macros en Excel</li>
  <li class="skill-item">Power Pivot</li>
  <li class="skill-item">Power Query</li>
  <li class="skill-item">Power BI</li>
  <li class="skill-item">Python</li>
  <li class="skill-item">Desarrollo Web</li>
  <li class="skill-item">HTML5</li>
  <li class="skill-item">CSS3</li>
  <li class="skill-item">JavaScript (ES6+)</li>
  <li class="skill-item">React</li>
  <li class="skill-item">Node.js</li>
  <li class="skill-item">Git & GitHub</li>
</ul>
      {/* También podrías usar una cuadrícula (grid) con iconos,
          dependiendo del diseño que prefieras */}
    </section>
  );
}

// Exporta el componente para que pueda ser importado y usado en otros archivos
export default Skills;