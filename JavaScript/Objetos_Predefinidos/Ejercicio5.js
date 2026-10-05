let tabla = document.createElement("table");

for (let i = 0; i < 3; i++) {
    let fila = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
        let celda = document.createElement("td");
        let numero = document.createElement("input");
        numero.type = "number";
        celda.append(numero);
        fila.append(celda);
    }
    tabla.append(fila);
}

let boton = document.createElement("button");
boton.textContent = "MAJOR";
boton.style.width = "100px";
boton.type = "button";
boton.style.margin = "20px";
boton.addEventListener("click", getMajor);

let formulario = document.createElement("form");
formulario.append(tabla);
formulario.append(boton);

let cuerpo = document.getElementsByTagName("body");
cuerpo[0].append(formulario);

function getMajor() {
    let vacio = false;
    let major;
    let numeros = [];

    let filas = tabla.querySelectorAll("tr");

    filas.forEach(fila => {
        let celdas = fila.querySelectorAll("td");
        celdas.forEach(celda =>{
            let numero = celda.querySelector("input");
            if (Number.isNaN(numero.valueAsNumber) && vacio == false) {
                alert ("Algun campo esta vacio");
                vacio = true;
            } else {
                numeros.push(numero.valueAsNumber);
            }
            
        });
    });

    if (vacio == false) {
    for (let index = 0; index < numeros.length; index++) {
        if (index == 0) {
            major = numeros[index]; 
        }else if (numeros[index]>major) {
            major = numeros[index];
        }        
    }    
    alert("El major numero es "+major);
    }
}