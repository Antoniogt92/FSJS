/*
    Repite el ejercicio 4, pero
    Esta vez usa una función constructora en vez de class.
*/

//tu código va aquí vvv
function Auto(color, modelo, llanta, placas, asientos) {
    this.color = color;
    this.modelo = modelo;
    this.llanta = llanta;
    this.placas = placas;
    this.asientos = asientos;

    this.trasladar = function() {
        return "me estoy moviendo.";
    }
    this.acelerar = function() {
        return "acelero";
    }
    this.frenar = function() {
        return "freno";
    }
}

const a = new Auto("rojo",2015,"r14","FDS5252",5);

console.log(a);

console.log(a.trasladar());
console.log(a.acelerar());
console.log(a.frenar());
//tu código va aquí ^^^

//eof
