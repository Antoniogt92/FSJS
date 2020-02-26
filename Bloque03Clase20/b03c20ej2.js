/*
    Este ejercicio debe correr en Node.

    Imprime las letras contenidas en el arreglo a, una sí y una no.
    ¿puedes realizar esto de dos formas distintas?
    Debes usar algún ciclo.
*/

const a = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//tu código va aquí vvv

let i = 0;
while(i<a.length) {
    if((i%2)===1) {
        console.log("Letra "+a[i]);
    }
    i++;
}
//tu código va aquí ^^^

//eof
