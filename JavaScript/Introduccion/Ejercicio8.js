let titulo = document.createElement("h1");
titulo.textContent = "EL MAYOR DE LOS TRES";

let primero = document.createElement("input");
primero.type = "number";
primero.name = "primero";
primero.id = "primero";

let segundo = document.createElement("input");
segundo.type = "number";
segundo.name = "segundo";
segundo.id = "segundo";

let tercero = document.createElement("input");
tercero.type = "number";
tercero.name = "tercero";
tercero.id = "tercero";

let boton = document.createElement("button");
boton.textContent = "Numero mayor";
boton.style.width = "180px";
boton.addEventListener("click", calculaMayor);

let formulario = document.createElement("form");
formulario.style.display = 'flex';
formulario.style.flexDirection = 'column';
formulario.style.width = "250px";
formulario.append(primero);
formulario.append(segundo);
formulario.append(tercero);
formulario.append(boton);

let cuerpo = document.getElementsByTagName("body");
cuerpo[0].style.display = 'flex';
cuerpo[0].style.flexDirection = 'column';
cuerpo[0].style.rowGap = '50px';
cuerpo[0].append(titulo);
cuerpo[0].append(formulario);

function calculaMayor() {
    let primer_num = document.getElementById("primero");
    let segundo_num = document.getElementById("segundo");
    let tercer_num = document.getElementById("tercero");

    if (isNaN(primer_num.valueAsNumber)|| isNaN(segundo_num.valueAsNumber) || isNaN(tercer_num.valueAsNumber)) {
        window.alert("Alguno de los campos esta en blanco. Por favor rellenelos todos");
    } else {
        if (primer_num.valueAsNumber>segundo_num.valueAsNumber && primer_num.valueAsNumber>tercer_num.valueAsNumber ) {
            window.alert("El primer numero es el mayor ("+primer_num.valueAsNumber+")");
        } else if (segundo_num.valueAsNumber>tercer_num.valueAsNumber){
            window.alert("El segundo numero es el mayor ("+segundo_num.valueAsNumber+")");
        } else {
            window.alert("El tercer numero es el mayor ("+tercer_num.valueAsNumber+")");
        }
    }
}

