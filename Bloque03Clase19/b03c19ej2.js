/*
    Este ejercicio debe correr en Node.

    Repite el ejercicio 1.
    Pero esta vez, imprime sólo los números nones.
*/

//tu código va aquí vvv
let n=0;
while(true) {
    n++;
    if (n>20) {
        break;
    }
    else if(n%2) {
        console.log("Número "+n);
    }else {
        continue;
    }
}
//tu código va aquí ^^^

// OTRA SOLUCION

/*
let n=0;
while(n<20) {
    n++;
    if(n%2) {
        console.log("Número "+n);
    }
}*/


//eof
