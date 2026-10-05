let labelT = document.createElement("label");
labelT.for = "texto";
labelT.textContent = "Introduce una cadena de texto:";
let texto = document.createElement("input");
texto.style.width = "200px";
texto.type = "text";
texto.name = "texto";
texto.id = "texto";

let boton = document.createElement("button");
boton.textContent = "Convierte la cadena";
boton.style.width = "180px";
boton.type = "button";
boton.style.margin = "20px";
boton.addEventListener("click", convierteCadena);

let labelI = document.createElement("label");
labelI.for = "inversa";
labelI.textContent = "A LA INVERSA:";
let inversa = document.createElement("input");
inversa.style.width = "200px";
inversa.type = "text";
inversa.name = "inversa";
inversa.id = "inversa";

let labelM = document.createElement("label");
labelM.for = "mayusculas";
labelM.textContent = "EN MAYUSCULAS:";
let mayusculas = document.createElement("input");
mayusculas.style.width = "200px";
mayusculas.type = "text";
mayusculas.name = "mayusculas";
mayusculas.id = "mayusculas";

let labelR = document.createElement("label");
labelR.for = "repetida";
labelR.textContent = "REPETIDA:";
let repetida = document.createElement("input");
repetida.style.width = "200px";
repetida.type = "text";
repetida.name = "repetida";
repetida.id = "repetida";

let labelIM = document.createElement("label");
labelIM.for = "inv_mayus";
labelIM.textContent = "INVERTIDA EN MAYUSCULAS:";
let inv_mayus = document.createElement("input");
inv_mayus.style.width = "200px";
inv_mayus.type = "text";
inv_mayus.name = "inv_mayus";
inv_mayus.id = "inv_mayus";

let formulario = document.createElement("form");
formulario.style.display = 'flex';
formulario.style.flexDirection = 'column';
formulario.append(labelT);
formulario.append(texto);
formulario.append(boton);
formulario.append(labelI);
formulario.append(inversa);
formulario.append(labelM);
formulario.append(mayusculas);
formulario.append(labelR);
formulario.append(repetida);
formulario.append(labelIM);
formulario.append(inv_mayus);

let cuerpo = document.getElementsByTagName("body");
cuerpo[0].style.display = 'flex';
cuerpo[0].style.flexDirection = 'column';
cuerpo[0].append(formulario);

function convierteCadena() {
    cadena = document.getElementById("texto").value;

    document.getElementById("inversa").value = convierteInversa(cadena);
    document.getElementById("mayusculas").value = convierteMayusculas(cadena);
    document.getElementById("repetida").value = convierteRepetida(cadena);
    document.getElementById("inv_mayus").value = convierteInversa(convierteMayusculas(cadena));
    
}

function convierteInversa(cadena) {
    let inversa = "";
    let array = Array.from(cadena);

    for (let index = array.length-1; index >= 0; index--) {
        inversa=inversa.concat(array[index]);
        
    }

    return inversa;
}

function convierteMayusculas(cadena) {
    return cadena.toUpperCase();
}

function convierteRepetida(cadena) {
    return cadena.repeat(3);
}