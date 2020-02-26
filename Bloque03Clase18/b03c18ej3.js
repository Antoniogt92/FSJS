/*
    Este ejercicio debe correr en Chrome.

    Realiza el mismo reto del ejercicio 2, pero esta vez usando sólo expresiones ternarias anidadas.
*/

let calif = document.getElementById("term1");
let r = document.getElementById("divresultados");

function messageClick() {

    calif.value = parseFloat(term1.value);

    //usa calif.value para obtener el texto dentro del input
    //usa r.innerHTML para colocar el resultado en pantalla

    //tu código va aquí vvv
    r.innerHTML = (calif.value<0) ? "escribe algo válido"
    : (calif.value<10) ? "Vete a Turismo"
    : (calif.value<60) ? "Tronaste"
    : (calif.value<70) ? "Panzaste"
    : (calif.value<90) ? "Ya eres libre"
    : (calif.value<=100) ? "Nerd" : "escribe algo válido";
}



//eof
