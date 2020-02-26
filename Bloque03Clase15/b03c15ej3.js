/*
    Este ejercicio debe correr en Node.

    Usa la función getRandomNumber (escrita abajo) para generar un número aleatorio con 9 decimales.
    Inventa un algoritmo para redondearlo, conservando de 1 a 8 decimales.
*/

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max-min+1) ) + min;
}



//tu código va aquí vvv
let a = getRandomNumber(1000000000, 9999999999) / 1000000000;
const n = 6;
let numero= a*(10**n);
numero = Math.round(numero);
numero /= (10**n);

console.log("Número original--: " + a)
console.log("Número redondeado: " + numero)
//tu código va aquí ^^^

//eof
