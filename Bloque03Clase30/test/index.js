/*
    Este ejercicio debe correr en Node.

    Revisa la documentación en:
    https://www.chaijs.com/api/assert/#method_assert

    Elige 10 tests que aparezcan en esa página.

    Inventa alguna función para la cual los 10 tests sean aplicables.

    Realiza una test suite para tu función con sus 10 tests.
*/

//tu código va aquí vvv
const assert = require ("chai").assert;
const index = require ("../index.js");

describe("Suite para ejemplos", () => {
    it("Sumar funciona", () => {
        const resultado = index.sumar(5,3);
        assert.equal(resultado, 8);
    });
    it("Sumar devuelve un Number", () => {
        const resultado = index.sumar(5,3);
        assert.typeOf(resultado, "number");
    });
    it("Sumar no es un Nan", () => {
        const resultado = index.sumar(5,3);
        assert.isNotNaN(resultado, "no es nan");
    });
    it("Sumar es un Nan", () => {
        const resultado = index.sumar("hola","uno");
        assert.isNaN(Number(resultado), "es nan");
    });
    it("Sumar es un Existe", () => {
        const resultado = index.sumar(5,3);
        assert.exists(resultado, "existe");
    });
});

//tu código va aquí ^^^

//eof
