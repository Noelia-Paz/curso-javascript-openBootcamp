let lista = ['papa', 'azucar', 'huevos', 'pan', 'tomate'];

lista.push('aceite de girasol');
lista.pop();

let peliculas = [
  { titulo: 'Las flores', director: 'Juan Perez', fecha: new Date(1990, 3, 5) },
  {
    titulo: 'La muerte',
    director: 'Sol Fuentes',
    fecha: new Date(2015, 10, 5),
  },
  {
    titulo: 'Los dias de enero',
    director: 'Maria Ruiz',
    fecha: new Date(2000, 3, 7),
  },
];

const peliculas_posteriores = peliculas.filter(
  pelicula => pelicula.fecha > new Date(2010, 0, 1)
);

const directores = peliculas.map(pelicula => {
  return pelicula.director;
});

const titulos = peliculas.map(pelicula => {
  return pelicula.titulo;
});

const directores_titulos = directores.concat(titulos);

const directores_titulos_prop = [...directores, ...titulos];
