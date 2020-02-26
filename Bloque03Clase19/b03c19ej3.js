/*
    Este ejercicio debe correr en Chrome.

    Colocar un número del 1 al 10 en la variable num.
    Imprimir la tabla de multiplicar (del 0 al 10) de ese número.
*/

let num = document.getElementById("term1");
let res = document.getElementById("divresultados");

function messageClick() {

    //asigna a res.innerHTML el texto que contiene la tabla de multiplicar ya resuelta

    let n = parseFloat(num.value);

    //tu código va aquí vvv
    res.innerHTML = "";
    for(let a=0 ; a<=10 ; a++) {
        res.innerHTML += "<br>"+n+" x "+a+" = "+(n*a);
    }
    //tu código va aquí ^^^
}

//eof
