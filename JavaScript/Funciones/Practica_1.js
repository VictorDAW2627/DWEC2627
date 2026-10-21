function damePalabras() {
  let input = prompt("Dime una palabra: ");
  let palabras = [];
  while (input != null && input != "") {
    palabras.push(input);
    input = prompt("Dime una palabra: ");
  }
  ordenaPalabras(palabras);
}

function ordenaPalabras(palabras) {
  palabras.sort().reverse();
  let set = new Set(palabras);
  palabras = [...set];
  let texto = document.createElement("p");
  texto.textContent = palabras.toString();
  document.getElementsByTagName("body")[0].appendChild(texto);
}

damePalabras();