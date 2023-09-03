"use strict";

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: "John Doe" });
      }
    }, 2000);
  });
}

async function getUser() {
  const user = await obtenerUsuario(1);
  console.log(user);
  return user;
}

const usuario = getUser();
