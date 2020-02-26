/*
    Este ejercicio debe correr en Chrome.

    Realiza todas las comparaciones posibles entre los 2 valores que recibes.
    Después coloca el resultado de cada comparación en el div "resultados"
*/

let term1 = document.getElementById("term1");
let term2 = document.getElementById("term2");

let resultados = "";
let divresultados = document.getElementById("divresultados");

function messageClick() {

    //usa term1.value y term2.value para obtener lo que escribes en los input.
    //el string resultados debe describir todas las comparaciones que realices.

    //tu código va aquí vvv
    resultados =  "Mayor que: "+(term1.value>term2.value).toString()+"<br>";
    resultados += "Menor que: "+(term1.value<term2.value).toString()+"<br>";
    resultados += "Mayor o Igual que: "+(term1.value>=term2.value).toString()+"<br>";
    resultados += "Menor o Igual que: "+(term1.value<=term2.value).toString()+"<br>";
    resultados += "Igual que(coerción): "+(term1.value==term2.value).toString()+"<br>";
    resultados += "Igual que(sin coerción): "+(term1.value===term2.value).toString()+"<br>";
    resultados += "Diferente de(coerción): "+(term1.value!=term2.value).toString()+"<br>";
    resultados += "Diferente de(sin coerción): "+(term1.value!==term2.value).toString()+"<br>";

    //tu código va aquí ^^^

    divresultados.innerHTML = resultados;
}

//eof
