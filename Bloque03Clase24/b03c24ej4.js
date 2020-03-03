/*
    Crea una clase que represente algún medio de transporte.
    Utiliza la sintáxis de class y constructor.
    Debe tener al menos 5 propiedades y 3 métodos.

	Después, crea un objeto de esa clase y comprueba que sus propiedades son accesibles
	También comprueba que sus métodos funcionan.
*/

//tu código va aquí vvv
class Auto {
    constructor(color, modelo, llanta, placas, asientos){
        this.color = color;
        this.modelo = modelo;
        this.llanta = llanta;
        this.placas = placas;
        this.asientos = asientos;
    }

    trasladar (){
        return "me estoy moviendo.";
    }
    acelerar (){
        return "acelero";
    }
    frenar (){
        return "freno";
    }
}

const a = new Auto("rojo",2015,"r14","FDS5252",5);

console.log(a);

console.log(a.trasladar());
console.log(a.acelerar());
console.log(a.frenar());

const b = new Auto("azul",2019,"r15","ABC1234",4);

console.log(b);

console.log(b.trasladar());
console.log(b.acelerar());
console.log(b.frenar());
//tu código va aquí ^^^

//eof
