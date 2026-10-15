function creaPrimitiva() {
  let num = new Array();
  num.push(Math.floor(Math.random() * (49 - 1 + 1) + 1));

  for (let index = 0; index < 5; index++) {
    random = Math.floor(Math.random() * (49 - 1 + 1) + 1);
    if (!num.includes(random)) {
      num.push(random);
    } else {
      index--;
    }
  }

  return num.join(" ");
}

tabla = document.createElement("table");

for (let index = 0; index < 50; index++) {
  fila = document.createElement("tr");
  dato = document.createElement("td");
  dato.textContent = (index+1)+"º";
  fila.appendChild(dato);
  dato = document.createElement("td");
  dato.textContent = creaPrimitiva();
  fila.appendChild(dato);
  tabla.appendChild(fila);
}

document.body.appendChild(tabla);
