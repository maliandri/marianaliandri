// src/components/Proyectos.jsx

// Importas React si lo necesitas
import React from 'react';

// Defines el componente como una función
function Proyectos() {
  // El componente devuelve el código que se mostrará
  return (
    <section id="proyectos">
      <h2>Mis Proyectos</h2>
      <div className="proyecto-item">
        <h3>Nombre del Proyecto 1</h3>
        <p>Descripción corta del proyecto...</p>
      </div>
      <div className="proyecto-item">
        <h3>Nombre del Proyecto 2</h3>
        <p>Descripción corta del proyecto...</p>
      </div>
    </section>
  );
}

// Haces que el componente esté disponible para otros archivos
export default Proyectos;