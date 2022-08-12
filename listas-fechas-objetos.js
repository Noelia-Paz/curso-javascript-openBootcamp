//listas, array o arreglo
//una lista es un conjunto de variables puestas en orden.

const lista = [1, 'string', true, null];
console.log(lista);

const lista2 = new Array(2, true);
console.log(lista2);

const lista3 = new Array(3);
lista3[0] = 'soy el primer elemento, index 0';
console.log(lista3);

const lista4 = [lista, lista2, lista3];
console.log(lista4);

// objetos
// javascript es un lenguaje orientado a objetos, es decir son representaciones de datos de objetos de la vida real Ej: el celular
const movil = {
  altura: 10,
  marca: 'xiaomi',
  linea: {
    marca: 'claro',
  },
};

console.log(movil.linea);

//creo un nuevo atributo para el movil
movil.año = 2019;
console.log(movil.año);

//podemos editar un atributo pero no podemos cambiar la constante movil pero si sus atributos.
movil.marca = 'samsung';
console.log(movil.marca);

//fechas
//librerias de apoyo moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milisegundos = new Date(10);
console.log(fecha_milisegundos);

const fecha_cadena = new Date('march 25 2020'); //debe estar en ingles
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 1, 5); //los meses en las fechas van igual que los arrays 0= enero , 1=febrero
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const año = ahora.getFullYear();

console.log(dia, mes, año);
