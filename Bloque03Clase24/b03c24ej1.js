/*
	Utilizando sólo objetos literales:
    Haz un objeto que contenga las partes de tu nombre completo (nombres y apellidos)
    Haz un objeto que contenga las partes de tu domicilio (calle, número, cp, colonia...)
    Haz un objeto que contenga los detalles de tu carrera (escuela, ciudad, carrera, fecha de egreso...)
    Haz un objeto que contenga los 3 objetos anteriores.
    Imprime el objeto.
*/

//tu código va aquí vvv
const nombres = {
    nombre : "Antonio",
    apellidos : "Gomez"
}
const domicilio = {
    calle : "Himalayas",
    numero : 13,
    cp : 45601,
    colonia : "Olivos"
}
const carrera = {
    escuela : "UV",
    ciudad : "Boca del Rio",
    career : "Contaduria",
    egreso : "Julio 2015"
}
const datos = {
    "nombres" : nombres,
    "domicilio" : domicilio,
    "carrera" : carrera
}

console.log(datos);

const mi_string=JSON.stringify(datos);

console.log(mi_string);

//tu código va aquí ^^^

//eof
