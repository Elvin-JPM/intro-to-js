"use strict";

const datos = [
  {
    id: 1,
    nombre: "Juan",
    habilidades: ["Javascript", "HTML", "CSS"],
    proyectos: [
      { id: 1, nombre: "Proyecto 1" },
      { id: 2, nombre: "Proyecto 2" },
    ],
  },

  {
    id: 2,
    nombre: "Maria",
    habilidades: ["Python", "SQL", "DJango"],
    proyectos: [
      { id: 3, nombre: "Proyecto 3" },
      { id: 4, nombre: "Proyecto 4" },
    ],
  },

  {
    id: 3,
    nombre: "Pedro",
    habilidades: ["Java", "Spring", "Hibernate"],
    proyectos: [
      { id: 5, nombre: "Proyecto 5" },
      { id: 6, nombre: "Proyecto 6" },
    ],
  },
];

// DESARROLLADORES JAVASCRIPT
const desarrolladoresJavascript = datos.filter((el) =>
  el.habilidades.includes("Javascript")
);
console.log(desarrolladoresJavascript);

// LISTA DE PROYECTOS
const nombresProyectos = datos
  .flatMap((el) => el.proyectos)
  .map((el) => el.nombre);
console.log(nombresProyectos);
