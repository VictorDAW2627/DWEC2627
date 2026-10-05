let regExp = new RegExp("\^\\d{1,2}\/\\d{1,2}\/(\\d{2}|\\d{4})\$");

let boton = document.createElement("button");
boton.textContent = "COMPROBAR FECHA";
boton.style.width = "100px";
boton.type = "button";
boton.style.margin = "20px";
boton.addEventListener("click", compruebaFecha);

let fecha = document.createElement("input");
fecha.type = "text";
fecha.id = "fecha";
fecha.name = "fecha";

let formulario = document.createElement("form");
formulario.append(fecha);
formulario.append(boton);

let cuerpo = document.getElementsByTagName("body");
cuerpo[0].append(formulario);

function compruebaFecha() {
    if (regExp.test(document.getElementById("fecha").value)) {
        alert("Gracies per introduir la data");
    }else{
        alert("El format de data no es correcte");
    }
}