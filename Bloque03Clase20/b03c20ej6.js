/*
    Este ejercicio debe correr en Node.

    Crea un map que incluya un elemento por cada compañero(a) de clase.
    Su primer nombre será la llave.
    El valor de esa llave debe contener otro map, que tendrá:
    	edad,
    	profesión,
    	tacos favoritos
*/

//tu código va aquí vvv

const antonio = new Map();
antonio.set("edad", 27);
antonio.set("profesion", "contador");
antonio.set("taco", "pastor");

const jorge = new Map();
jorge.set("edad", 30);
jorge.set("profesion", "técnico");
jorge.set("taco", "pastor");

const sharon = new Map();
sharon.set("edad", 27);
sharon.set("profesion", "ingeniera");
sharon.set("taco", "pastor");

const mapa = new Map();
mapa.set("Antonio", antonio);
mapa.set("Jorge", jorge);
mapa.set("Sharon", sharon);

console.log(mapa);

//tu código va aquí ^^^

//eof

