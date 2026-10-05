let numero = document.createElement("input");
numero.style.width = "150px";
numero.type = "number";
numero.name = "numero";
numero.id = "numero";

let boton = document.createElement("button");
boton.textContent = "CONVERTEIX";
boton.style.width = "100px";
boton.type = "button";
boton.style.margin = "20px";
boton.addEventListener("click", creaTabla);

let formulario = document.createElement("form");
formulario.append(numero);
formulario.append(boton);

let cuerpo = document.getElementsByTagName("body");
cuerpo[0].style.display = 'flex';
cuerpo[0].style.flexDirection = 'column';
cuerpo[0].append(formulario);

function creaTabla() {
    if (document.getElementById("numero").valueAsNumber!=null) {
        let conversion;
        let tipo;
        let binario = document.getElementById("numero").valueAsNumber.toString(2);
        let octal = document.getElementById("numero").valueAsNumber.toString(8);
        let hexadecimal = document.getElementById("numero").valueAsNumber.toString(16);
        let tabla = document.createElement("table");
        tabla.border = "1px solid black";
        tabla.style.width="150px";

        for (let index = 0; index < 3; index++) {
            let fila = document.createElement("tr");
            switch (index) {
                case 0:
                    tipo = document.createElement("td");
                    tipo.style.textAlign="center";
                    tipo.textContent="BINARI";
                    fila.append(tipo);

                    conversion = document.createElement("td");
                    conversion.style.textAlign="center";
                    conversion.textContent=binario;
                    fila.append(conversion);
                    break;
                case 1:
                    tipo = document.createElement("td");
                    tipo.style.textAlign="center";
                    tipo.textContent="OCTAL";
                    fila.append(tipo);

                    conversion = document.createElement("td");
                    conversion.style.textAlign="center";
                    conversion.textContent=octal;
                    fila.append(conversion);
                    break;

                case 2:
                    tipo = document.createElement("td");
                    tipo.style.textAlign="center";
                    tipo.textContent="HEXADECIMAL";
                    fila.append(tipo);

                    conversion = document.createElement("td");
                    conversion.style.textAlign="center";
                    conversion.textContent=hexadecimal;
                    fila.append(conversion);
                    break;
            }
            tabla.append(fila);
        }       
        cuerpo[0].append(tabla);
    }
}