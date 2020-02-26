/*
    Este ejercicio debe correr en Node.

    Usa la función getRandomNumber(0,100) para generar 10 números aleatorios.
    A cada uno de ellos, calcúlale su módulo 2.
    imprime en pantalla cada número junto con el resultado del módulo.
    ¿Puedes interpretar estos resultados para saber si cada número es par o impar?
*/

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max-min+1) ) + min;
}

//tu código va aquí vvv
let a = getRandomNumber(0, 100);
let b = getRandomNumber(0, 100);
let c = getRandomNumber(0, 100);
let d = getRandomNumber(0, 100);
let e = getRandomNumber(0, 100);
let f = getRandomNumber(0, 100);
let g = getRandomNumber(0, 100);
let h = getRandomNumber(0, 100);
let i = getRandomNumber(0, 100);
let j = getRandomNumber(0, 100);

console.log("Número: "+a+" Módulo 2: "+(a%2));
console.log("Número: "+b+" Módulo 2: "+(b%2));
console.log("Número: "+c+" Módulo 2: "+(c%2));
console.log("Número: "+d+" Módulo 2: "+(d%2));
console.log("Número: "+e+" Módulo 2: "+(e%2));
console.log("Número: "+f+" Módulo 2: "+(f%2));
console.log("Número: "+g+" Módulo 2: "+(g%2));
console.log("Número: "+h+" Módulo 2: "+(h%2));
console.log("Número: "+i+" Módulo 2: "+(i%2));
console.log("Número: "+j+" Módulo 2: "+(j%2));
//tu código va aquí ^^^

//eof
