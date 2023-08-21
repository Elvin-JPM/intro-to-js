"use strict";

const calcularPromedio = (numeros) => {
  let sumaTotal = 0;

  for (let i = 0; i <= numeros.length - 1; i++) {
    sumaTotal += numeros[i];
  }
  console.log("Despues del for: ", sumaTotal);

  const promedio = sumaTotal / numeros.length;
  return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

// El error se encontraba en la declaracion del bucle for
// ya que iteraba hasta el indice 5 que esta fuera de rango
// Al final Javascript hacia la operacion 15 + Nan que arroja NaN como resultado
console.log(15 + NaN);

// De igual forma con el promedio, la operacion a realizar era NaN / 5
console.log(NaN / 5);
