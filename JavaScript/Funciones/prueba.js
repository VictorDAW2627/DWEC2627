num = 5

alert(cuadrado(num))

alert(incrementar());

function cuadrado(num) {
    return num *= num;
}

const incrementar = (function () {
    let contador = 0
    return function () {
        contador++;
        return contador;
    }
})