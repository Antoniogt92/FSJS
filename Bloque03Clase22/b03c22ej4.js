/*
    Este ejercicio debe correr en Node.

    Cambiando sólo una palabra en el código, haz que el ciclo for imprima el contenido del arreglo palabra por palabra.
    ¿Puedes explicar por qué sucede esto?
*/

//tu código va aquí vvv

function printArray() {

/*  var c; es como si se pasara al inicio y ahora si esta dentro del scope */ 
    if(true) {
/*antes era const*/
    var c = ["hola", "soy", "un", "ejercicio", "sobre", "hoisting"]; //el SCOPE de var aplica para funciones
    }

    for(let i of c) {
        console.log(i);
    }
}

printArray();

//tu código va aquí ^^^

//eof
