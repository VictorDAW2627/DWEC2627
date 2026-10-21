function damePalabras() {
  let input = prompt("Dime una palabra: ");
  let palabras = [];
  while (input != null && input != "") {
    palabras.push(input);
    input = prompt("Dime una palabra: ");
  }
  palabrasRepetidas(palabras);
}

function palabrasRepetidas(palabras) {
  let mapa = new Map();
  let contador = 0;
  for (let index = 0; index < palabras.length; index++) {
    if (!mapa.has(palabras[index])) {
      for (let indice = 0; indice < palabras.length; indice++) {
        if (palabras[index] == palabras[indice]) {
          contador++;
        }
      }
      mapa.set(palabras[index], contador);
    }
    contador = 0;
  }
  creaTabla(mapa);
}

function creaTabla(mapa) {
  let claves = mapa.keys();
  let tabla = document.createElement("table");
  tabla.style = "border: 1px solid black";
  let fila;
  let dato;

  for (let clave of claves) {
    fila = document.createElement("tr");

    dato = document.createElement("td");
    dato.style = "border: 1px solid black";
    dato.textContent = clave;
    fila.appendChild(dato);

    dato = document.createElement("td");
    dato.style = "border: 1px solid black";
    dato.textContent = mapa.get(clave);
    fila.appendChild(dato);

    tabla.appendChild(fila);
  }

  document.getElementsByTagName("body")[0].appendChild(tabla);
}

damePalabras();
