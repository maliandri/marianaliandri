// src/components/Contact.jsx

import React from 'react';

// Defines el componente para la sección de contacto
function Contact() {
  return (
    // Usa una etiqueta <section> para agrupar el contenido
    <section id="contact">
      <h2>Contáctame</h2>
      <p>
        Si tienes alguna pregunta o quieres colaborar, no dudes en escribirme.
      </p>
      
      {/* Puedes usar un formulario simple como este */}
      <form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      
      {/* O simplemente puedes poner tus datos de contacto */}
      {/*
      <div>
          <p>Email: tu_email@ejemplo.com</p>
          <p>LinkedIn: linkedin.com/in/tu_perfil</p>
      </div>
      */}
    </section>
  );
}

// Exporta el componente para que pueda ser importado
export default Contact;