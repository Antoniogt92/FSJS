/*
    Este ejercicio debe correr en Node.

    Crea cualquier objeto.
    Agrégale algunas propiedades (con cualquier contenido).
    Imprime el descriptor de cada una de sus propiedades.
*/

//tu código va aquí vvv
class Barcelona {
    constructor(Messi, Suarez){
        this.player1 = Messi;
        this.player2 = Suarez;
    }
}

const equipo_actual = new Barcelona("Messi", "Suárez");
const equipo_2000 = new Barcelona("Deco", "Rivaldo");

let props = Object.getOwnPropertyDescriptors(equipo_actual);
console.log(props);
props = Object.getOwnPropertyDescriptors(equipo_2000);
console.log(props);


//tu código va aquí ^^^

//eof
