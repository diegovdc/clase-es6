import {sum, double} from './modulo1'
import * as math2 from './modulo2'
import * as _ from 'lodash'
import
  MyGallery,
  { unHelperDeMiGaleria } from './modulo-con-default'

// console.log("MyGallery ", MyGallery);
// console.log(math2.sum(2, 5))
// console.log(double(2))
// console.log(_.partition([1, 2, 3, 4], n => n % 2))
// unHelperDeMiGaleria()





//nuevas declaraciones de simbolos
const cuatro = 4
// // console.log(cuatro)


let fruit = 'banana'
// // console.log("fruit ", fruit);

fruit = 'apple'
// // console.log("fruit ", fruit);

if(true) { // let  y const sólo existe dentro de las `{ }`, "block scope", var existe aun afuera
  const holaConst = "mundo"
  let hola = "mundo"
  var adios = 'mundo cruel'
  // console.log("holaConst ", holaConst);
  // console.log("hola ", hola);
  // console.log("adios dentro", adios);
}
// console.log("holaConst ", holaConst); // manda error
// console.log("hola ", hola); // manda error
// console.log("adios fuera", adios); // imprime adios


// //desestructuración
const person = {
  age: 20,
  name:'Diego'
}



const {name, age}= person // esto equivale a lo siguiente
// const age = person.age
// const name = person.name
// // console.log("age ", age);
// // console.log("name ", name);

// desestructuración de los argumentos de las funciones
function printName({name, age}) {
  console.log("printName", name)
}

const person2 = {
  age: 20,
  name:'juanito'
}
const perro = {name: "firu"}
// printName(person)
// printName(person2)
// printName(perro)


// desestructuración de Arrays
const list = [1,2,3,4,5]
const [a,b] = list
// console.log("a ", a);
// console.log("b ", b);
const [head, ...tail] = list // tail tiene el resto del array, y head el primer elemento
// console.log("head ", head);
// console.log("tail ", tail);


// arrow functions
// sintaxis 1
const printName2 = (person) => {
  // cuerpo de la función
  // puede realizar un montón de operaciones
  return person.name // return explícito
}
// sintaxis 2, tiene return implícito,. y la función debe contener un sólo statement en el cuerpo
const printName3 = (person) => person.name

// console.log(printName2(person))
// console.log('printName3', printName3(person))

// uso típico, como función anónima (https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions) en métodos cómo `.map` y `.filter`
// cf.
// Array.prototype.map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// Array.prototype.filter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
// Array.prototype.reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
const names = [person, person2]
.map(person => person.name)

//equivale a:
const names2 = [person, person2]
.map(function({name}) {return name})

//  console.log("names", names);
//  console.log("names2 ", names2);
