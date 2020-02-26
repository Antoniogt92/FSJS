/*
    Este ejercicio debe correr en Node.

    Realiza la siguiente operación en código:
    84 + 96 - 25 * 79 ** 2 * 59 % 69 + 21 / 53

    Antes de ejecutarlo, trata de hacer el cálculo (una operación a la vez) en el orden correcto.
    Así verás si comprendes bien el orden de operadores de JS.
    Recuerda leer el orden correcto en la documentación.

    Finalmente, imprime el resultado de la operación truncado a 2 decimales.
*/

//tu código va aquí vvv
let mi_var = 79 ** 2;
mi_var = 25 * mi_var * 59;
mi_var = mi_var % 69;

let mi_var2 = 21 / 53;
mi_var = 84 + 96 - mi_var;

let resultado = mi_var + mi_var2;

console.log(resultado)
console.log(84 + 96 - 25 * 79 ** 2 * 59 % 69 + 21 / 53);
//tu código va aquí ^^^

//eof
