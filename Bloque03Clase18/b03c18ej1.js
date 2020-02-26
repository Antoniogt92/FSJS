/*
    Este ejercicio debe correr en Chrome.

    Realiza un programa que compare las variables a y b (que obtienes de los inputs).
    Si a fuera mayor, imprimir que a es mayor.
    Si b fuera mayor, imprimir que b es mayor.
    Si a y b son iguales, imprimir que son iguales.
    ¿Puedes controlar también si son de tipo distinto?
    ¿Puedes controlar si no son números?
*/

let term1 = document.getElementById("term1");
let term2 = document.getElementById("term2");
let r = document.getElementById("divresultados");

function messageClick() {

    a = parseFloat(term1.value);
    b = parseFloat(term2.value);

    //asigna r.innerHTML al valor que quieras imprimir en pantalla.

    //tu código va aquí vvv
    /*if(a>b) {
        r.innerHTML = "A es mayor"
    }else if (a<b) {
        r.innerHTML = "B es mayor"
    }else if (a===b) {
        r.innerHTML = "Son iguales"
    }*/

    r.innerHTML = (a>b) ? "A es mayor"
    : (a<b) ? "B es mayor"
    : "Son iguales"

    //tu código va aquí ^^^
}

//eof
