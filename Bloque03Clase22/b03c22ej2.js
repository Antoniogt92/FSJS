/*
    Este ejercicio debe correr en Node.

    Realiza dos copias del arreglo a.
    Una de ellas debe cambiar su contenido a la vez que el de a.
    La otra debe ser independiente de a.
*/

let a = ["aserejé", "ja", "dejé", "dejébetu", "dejébede", "sebinoua", "majabi", "andebugui", "andebuididipi"];
let b = a; //b es un clon de a

console.log("a: ["+a+"]");
console.log("b: ["+b+"]");

b.push("hola"); //modificar b (y por lo tanto también a)

console.log("a: ["+a+"]");
console.log("b: ["+b+"]");

let c = []; //inicializamos c como un arreglo vacío

console.log("a: ["+a+"]");
console.log("c: ["+c+"]");

for(let i of a) {
    c.push(i);
}

console.log("a: ["+a+"]");
console.log("c: ["+c+"]");

a.push("adios");

console.log("a: ["+a+"]");
console.log("b: ["+b+"]");
console.log("c: ["+c+"]");

//tu código va aquí vvv

//tu código va aquí ^^^

//eof
