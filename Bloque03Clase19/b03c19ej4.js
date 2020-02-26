/*
    Este ejercicio debe correr en Chrome.

    Simular una calculadora en la terminal.
    Debe hacer suma, resta, multiplicación, división y módulo.
    Debe operar sólo con dos números.
    Prohibido utilizar if, switch o expresiones ternarias.
    Colocar los números y la operación en las variables
    Imprimir en pantalla el resultado.
*/

function messageClick() {
    const op1 =   Number(document.getElementById("term1").value);
    const op2 =   Number(document.getElementById("term2").value);
    const signo = document.getElementById("sign").value;
    
    const r = document.getElementById("divresultados");
    
    //tu código va aquí vvv
    r.innerHTML = "";
    
    while(signo==="+") {
        r.innerHTML = `${op1} + ${op2} = ${op1+op2}`;
        break;
    }
    while(signo==="-") {
        r.innerHTML = `${op1} - ${op2} = ${op1-op2}`;
        break;
    }
    while(signo==="*") {
        r.innerHTML = `${op1} * ${op2} = ${op1*op2}`;
        break;
    }
    while(signo==="/") {
        r.innerHTML = `${op1} / ${op2} = ${op1/op2}`;
        break;
    }
    while(signo==="%") {
        r.innerHTML = `${op1} % ${op2} = ${op1%op2}`;
        break;
    }
}
//tu código va aquí ^^^

//eof
