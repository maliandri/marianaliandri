import React from "react";

export default function App() {
  return (
    <main className="max-w-4xl mx-auto p-4 space-y-16">
      <section id="hero" className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Mariano Aliandri</h1>
        <p className="text-lg">
          Analista Inteligencia de Negocios | Ciencia de Datos | Desarrollador Full Stack
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          POWER BI - POWER PIVOT - POWER QUERY - DAX - SQL - PYTHON - REACT JS - NEXT JS - TAILWIND CSS - FRAMER MOTION
        </p>
      </section>

      <section id="proyectos" className="space-y-4">
        <h2 className="text-2xl font-semibold">Proyectos destacados</h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <h3 className="font-semibold">Proyecto de muestra</h3>
            <p className="text-sm">Descripción breve del trabajo. Puede incluir visualizaciones, PDF, o enlaces externos.</p>
            <a href="/pdf/ejemplo.pdf" className="text-blue-500 underline mt-2 inline-block">Ver PDF</a>
          </li>
        </ul>
      </section>

      <section id="cv">
        <h2 className="text-2xl font-semibold">Experiencia profesional</h2>
        <p className="text-sm mt-2">Aquí podés incluir un resumen de tu experiencia o un enlace para descargar tu CV completo.</p>
      </section>

      <section id="habilidades">
        <h2 className="text-2xl font-semibold">Habilidades</h2>
        <ul className="flex flex-wrap gap-2 mt-2">
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Excel</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Power Query</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Power BI</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Sql</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">React</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Python</li>
        </ul>
      </section>

      <section id="contacto">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <p className="text-sm mt-2">Podés contactarme por <a href="mailto:maliandri@gmail.com" className="text-blue-500 underline">email</a> o en <a href="https://www.linkedin.com" className="text-blue-500 underline">LinkedIn</a>.</p>
      </section>
    </main>
  );
}
