/*
    Este ejercicio debe correr en Chrome.

    La variable calif representa la calificación de un alumno en una materia.
    Debe ser un número de 0 a 100.

    Realiza un programa que califique de la siguiente manera:
        de  0 a   9: vete a turismo
        de 10 a  59: tronaste
        de 60 a  69: panzaste
        de 70 a  89: ya eres libre
        de 90 a 100: nerd

    Si la calificación tiene decimales, contrólalos de alguna manera que te parezca adecuada.
*/

let calif = document.getElementById("term1");
let r = document.getElementById("divresultados");

function messageClick() {

    calif.value = parseFloat(term1.value);

    //usa calif.value para obtener el texto dentro del input
    //usa r.innerHTML para colocar el resultado en pantalla

    //tu código va aquí vvv
    r.innerHTML = (calif.value<0) ? "escribe algo"
    : (calif.value<10) ? "Vete a Turismo"
    : (calif.value<60) ? "Tronaste"
    : (calif.value<70) ? "Panzaste"
    : (calif.value<90) ? "Ya eres libre"
    : (calif.value<=100) ? "Nerd" : "escribe algo válido";
    //tu código va aquí ^^^
}

//eof
