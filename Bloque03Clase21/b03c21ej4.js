/*
    Este ejercicio debe correr en Node.

    Realiza un arreglo de 4 elementos, donde en cada elemento guardes una función.
    Estas funciones serán suma, resta, multiplicación y división.
    Debe ser posible llamar a las funciones usando el índice del arreglo.
*/

//tu código va aquí vvv

let sum = function sumar (n,o){
    return (n+o);
}
let res = function restar (n,o){
    return(n-o)
}
let mul = function multiplicar (n,o){
    return(n*o)
}
let div = function division (n,o){
    return(n/o)
}

const ope = [sum, res, mul, div];

console.log(   ope[0](6, 2)   );// siempre va de izquierda a derecha, se resume a la funcion y a sus argumentos

//tu código va aquí ^^^

//eof
