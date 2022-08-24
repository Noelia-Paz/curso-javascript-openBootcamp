const datos_personales = {
  nombre: 'noelia',
  apellido: 'paz',
  edad: 29,
  altura: 1.64,
  eresDesarrolladora: true,
};

let edad = datos_personales.edad;

const lista = [
  {
    ...datos_personales,
  },
  {
    nombre: 'maxi',
    apellido: 'arr',
    edad: 30,
    altura: 1.7,
    eresDesarrollador: true,
  },
  {
    nombre: 'sol',
    apellido: 'ruiz',
    edad: 25,
    altura: 1.68,
    eresDesarrollador: false,
  },
];

const lista_ordenada = lista.sort((a, b) => b.edad - a.edad);
