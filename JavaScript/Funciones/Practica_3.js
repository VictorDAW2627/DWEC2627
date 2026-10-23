let numeros = [1, 2, 3, 4, 5];
let palabras = ["Hola", "adios", "Buenos dias", "buenas noches", "javascrypt"];

function filtroMultiplica(numeros, callback) {
    callback(numeros);
}

function filtroMayusculas(palabras, callback) {
    callback(palabras);
}

function filtroFactorial(numeros, callback) {
    callback(numeros);
}

function multiplicar(numeros) {
    for (let index = 0; index < numeros.length; index++) {
        numeros[index] *= 2;
        
    }
}

function mayusculas(palabras) {
    for (let index = 0; index < palabras.length; index++) {
        palabras[index] = palabras[index].toUpperCase();
        
    }
}

function factorial(numeros) {
    let factorial = 1;
    for (let index = 0; index < numeros.length; index++) {
        while (numeros[index]!=0) {
            factorial *= numeros[index] 
            numeros[index]--; 
        }
        numeros[index] = factorial
        factorial = 1;
    }
}

function mostrarConsola(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
        
    }
}

filtroMultiplica(numeros, multiplicar);
mostrarConsola(numeros)

filtroMayusculas(palabras, mayusculas);
mostrarConsola(palabras)

filtroFactorial(numeros, factorial);
mostrarConsola(numeros)