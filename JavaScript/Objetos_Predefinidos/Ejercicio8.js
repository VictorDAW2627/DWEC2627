let boton = document.createElement("button");
boton.textContent = "COMPROBAR FECHA";
boton.style.width = "100px";
boton.type = "button";
boton.style.margin = "20px";
boton.addEventListener("click", compruebaFecha);

let fecha = document.createElement("input");
fecha.type = "date";
fecha.id = "fecha";
fecha.name = "fecha";

let formulario = document.createElement("form");
formulario.append(fecha);
formulario.append(boton);

let cuerpo = document.getElementsByTagName("body");
cuerpo[0].append(formulario);



function compruebaFecha() {
    let nacimiento = new Date(document.getElementById("fecha").value);
    let hoy = new Date();

    let milisegundos = Date.now()-nacimiento.getTime();
    let segundos = milisegundos/1000;
    let minutos = segundos/60;
    let horas = minutos/60;
    let dias = horas/24;
    let años = dias/365;

    if (nacimiento.getMonth()<hoy.getMonth()) {
        años++;
    } else if (nacimiento.getMonth()==hoy.getMonth()) {
        if (nacimiento.getDate()>hoy.getDate()) {
            años--;
        }
    }

    alert("Han transcurrido "+Math.trunc(años)+" años, aproximadamente, desde que naciste");
}