let palabra = document.createElement("input");
palabra.style.width = "150px";
palabra.type = "text";
palabra.name = "palabra";
palabra.id = "palabra";

let boton = document.createElement("button");
boton.textContent = "REPETIR";
boton.style.width = "80px";
boton.type = "button";
boton.style.margin = "20px";
boton.addEventListener("click", creaTabla);

let formulario = document.createElement("form");
formulario.append(palabra);
formulario.append(boton);

let cuerpo = document.getElementsByTagName("body");
cuerpo[0].style.display = 'flex';
cuerpo[0].style.flexDirection = 'column';
cuerpo[0].append(formulario);

function creaTabla() {
    if (document.getElementById("palabra").value!="") {
        let palabra = document.getElementById("palabra").value.toUpperCase();
        let array = Array.from(palabra);
        let letra;
        const width = 30*array.length;

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

        cuerpo[0].append(tabla);
    }
}