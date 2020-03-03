/*
	Utilizando sólo objetos literales y arreglos:
    Comparte con tus compañeros el objeto generado en el ejercicio 1.
    Haz un arreglo que contenga todos los objetos, tanto el tuyo como los de tus compañeros.
    Imprime el arreglo.
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

const nombregaby={
    nombre : 'Gaby', 
    apellido: 'RoEs' 
}

const domiciliogaby ={
    calle: 'Fermin Riestra',
    numero: '1343',
    cp : '44190',
    colonia: 'La Moderna'
}

const carreragaby = {
    escuela: 'Tec de Monterrey', 
    Campus: 'Monterrey', 
    Carrera: 'ITIC' 
}

const gaby = {
    'nombregaby' : nombregaby,
    'domiciliogaby' : domiciliogaby,
    'carreragaby' : carreragaby
}

const compañeros = [datos, gaby];

console.log (compañeros);


//tu código va aquí ^^^

//eof
