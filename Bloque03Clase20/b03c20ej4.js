/*
    Este ejercicio debe correr en Node.

    Este ejercicio contiene varios retos, para cada uno deberás usar la función adecuada.
*/

//tu código va aquí vvv

//concatena el contenido de este arreglo en un string para crear la letra de una canción
const rola = ["we","will","we","will","rock","you"];
console.log(rola.join(" "));

//inicializa el siguiente arreglo con valores null
const basura = [3456, 5674567, 564784567, 97695, 3456345, 685468, 452356];
basura.fill(null);

console.log(basura);

//Obtén sólo el alias de esta persona
const nombre = "Roberto 'Chespirito' Gómez";

apodo = nombre.slice(9, 19);

console.log(apodo);

//El siguiente arreglo debe contener sólo los números del 1 al 10 en orden.
//Agrega y borra lo que haga falta.
const serie = [-5, -2, 3, 5, 8, 15, 26];

serie[0]=1;
serie[1]=2;
serie[3]=4;
serie[4]=5;
serie[5]=6;
serie[6]=7;
serie.push(8,9,10);

console.log(serie);
//El siguiente arreglo debe contener sólo las partes de un coche.
//Agrega y borra lo que haga falta, usando sólo una función, una vez.
const coche = ["llantas", "rines", "alas", "velas", "caldera", "parabrisas", "motor", "escape"];

coche.splice(2,3);

console.log(coche);

//Devuelve sólo aquellos elementos de este arreglo que contengan la letra A (mayúscula o minúscula)
const palabras = ["Gokú", "Vegeta", "Pikoro", "Bulma", "Gohan", "Yamcha", "Shen Long", "Freezer", "Ten Shin Han", "Androide 18"];

for(let i of palabras) {
    if(i.includes("a") || i.includes("A")){
        console.log(i);
    }
}

//tu código va aquí ^^^

//eof
