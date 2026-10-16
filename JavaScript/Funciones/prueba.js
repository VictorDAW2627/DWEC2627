num = 5

alert(cuadrado(num))

//console.log(contador);

function cuadrado(num) {
    return num *= num;
}

(function() {
    let contador = 0;
    contador++;
    console.log("Dentro de la funcion:", contador)
})();

(function (cadena, numero) {
    console.log(cadena+numero)
})("Edad: ", 25);

const esPar = (numero) =>{
    if (numero%2==0) {
        return true;
    } else {
        return false;
    }
} 

console.log(esPar(2));