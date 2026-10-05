let palabra = "HOLA";
let array = Array.from(palabra);
let width = 30*array.length;
let letra;

let fila = document.createElement("tr");


for (let index = 0; index < array.length; index++) {
    letra = document.createElement("td");
    letra.style.textAlign="center";
    letra.textContent=array[index];
    fila.append(letra);
}

let tabla = document.createElement("table");
tabla.border = "1px solid black";
tabla.style.width=width+"px";
tabla.append(fila);

let cuerpo = document.getElementsByTagName("body");
cuerpo[0].style.display = 'flex';
cuerpo[0].style.flexDirection = 'column';
cuerpo[0].append(tabla);