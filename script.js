//////////////////////////////////////////////////////////////////

/*
// Creación mediante objeto Array
const meses = new Array('Enero', 'Febrero', 'Marzo');

// Array todo tipo de datos
const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Juan', trabajo: 'Programador' }, [1, 2, 3]];

// Array multidimensional.
const numeros = [10, 20, 30, 40, 50, [1, 2, 3, 4, 5, 6, 7, 8]];
console.log(numeros[2]);
console.log(numeros[5][1]);

// Recorrido
deTodo.forEach(elemento => {
  console.log(elemento);
});


//////////////////////////////////////////////////////////////////

// Formas imperativas (modifican el array original).
// Añadir elementos a un array.
//   array.push(elem) para añadir al final del array.
//   array.unshift(elem) para añadir al inicio del array.
//   array.splice(posicion,0,elem) Añade un elemento en la posición dada y elimina si es necesario.


const carrito = [];

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const producto1 = new Producto("Monitor 32 pulgadas", 400);
const producto2 = new Producto("Smartphone", 800);
carrito.push(producto1);
carrito.push(producto2);
console.table(carrito);



console.log("Eliminar 1 elemento a partir de index 0");
carrito.splice(0, 1); /// tiene tres parámetros (posicion,elimina,agrega)
console.table(carrito);


//////////////////////////////////////////////////////////////////

// Formas declarativas (NO modifican el array original).
// Añadir elementos a un array.
// Spread operator (...).


let resultado;
const producto3 = new Producto("Teclado", 50);
// Resultado es un nuevo array que contiene a carrito más producto1.
resultado = [...carrito, producto3];
console.table(resultado);
// No hay forma de añadir elementos en el medio con la forma declarativa.


//////////////////////////////////////////////////////////////////

// Eliminar elementos de un array.
// array.shift() Elimina el primer elemento del array.
// array.pop() Elimina el último elemento del array.
// array.splice(3,1) Elimina el tercer elemento del array.
// array.splice(2,3) Elimina 3 elementos del array desde la posición 2.
// array.splice(2,0,elemento) Añade un elemento en la posición 2.
// array.splice(3,4,elemento) Elimina 4 elementos desde la posición 3 y añade un nuevo elemento.


carrito.pop();
console.log("Eliminamos el último elemento: ");
console.table(carrito);

//////////////////////////////////////////////////////////////////


// .map crea un nuevo array.
const nuevoArray = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log("Nuevo array");
console.table(nuevoArray);

// .forEach NO crea un nuevo array. Al salir no tendrá nada.
const nuevoArray2 = carrito.forEach(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log("Nuevo array 2");
console.table(nuevoArray2);
*/

//////////////////////////////////////////////////////////////////


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// array.includes(valor) -> Comprueba si valor existe en el array. Devuelve true o false.
let resultado = meses.includes('Diciembre');
console.log("includes: " + resultado);

// array.findIndex() -> Devuelve el índice del elemento encontrado.
resultado = meses.findIndex(mes => mes === 'Abril');
console.log("findIndex: " + resultado);

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Móvil', precio: 700 },
]

// array.findIndex() -> Encontrar un indice de un array de objetos
resultado = carrito.findIndex(producto => producto.precio === 100);
console.log("findIndex: " + resultado);

// array.filter() -> Filtrar elementos de un array. (Devuelve un array con los resultados del filtrado).
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

// array.find() -> Buscar elementos de un array.
resultado = carrito.find(producto => producto.nombre === 'Tablet');
console.log(resultado);

// array.some() -> Comprueba si algún elemento del array cumple la condición.
resultado = carrito.some(producto => producto.nombre === 'Monitor Curvo');
console.log("some: " + resultado);

// array.every() -> Comprueba si todos los elementos del array cumplen la condición.
resultado = carrito.every(producto => producto.precio < 1000);
console.log("every: " + resultado)