/*
    Este ejercicio debe correr en Node.

    Realiza un sondeo entre tus compañeros.
    Cada uno deberá decir 3 películas que le gusten.
    No importa si se repiten.
    Crea un Set que las incluya todas.

    Después, usando la función has()
    escribe código para verificar
    si alguna película está entre las favoritas del salón.
*/

//tu código va aquí vvv

const antonio = new Set();
antonio.add("LOTR 1");
antonio.add("LOTR 2");
antonio.add("LOTR 3");

const jorge = new Set();
jorge.add("Rocky 1");
jorge.add("Rocky 2");
jorge.add("Rocky 3");

const sharon = new Set();
sharon.add("HP 1");
sharon.add("HP 2");
sharon.add("HP3");

const conjunto = new Set();
conjunto.add(antonio);
conjunto.add(jorge);
conjunto.add(sharon);

console.log (conjunto);

const test = "Rocky 1";

if(jorge.has(test)) {
    console.log("¡¡"+test+" es una de sus favoritas!!");
}else {
    console.log("¡¡"+test+" no es una de sus favoritas!!");
}
//tu código va aquí ^^^

//eof

