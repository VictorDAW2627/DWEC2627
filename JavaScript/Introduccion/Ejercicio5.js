let titulo = document.createElement("h1");
titulo.textContent = "Escoge tu color";

let boton_rojo = document.createElement("button");
boton_rojo.id = "rojo"
boton_rojo.textContent = "ROJO";
boton_rojo.addEventListener("click", cambiaFondo);

let boton_verde = document.createElement("button");
boton_verde.id = "verde"
boton_verde.textContent = "VERDE";
boton_verde.addEventListener("click", cambiaFondo);

let boton_azul = document.createElement("button");
boton_azul.id = "azul"
boton_azul.textContent = "AZUL";
boton_azul.addEventListener("click", cambiaFondo);

let caja = document.createElement("div");
caja.style.display = 'flex';
caja.style.justifyContent = 'center';
caja.style.alignItems = 'center';
caja.style.columnGap = '25px'; 
caja.append(boton_rojo);
caja.append(boton_verde);
caja.append(boton_azul);


let cuerpo = document.getElementsByTagName("body");
cuerpo[0].style.display = 'flex';
cuerpo[0].style.justifyContent = 'center';
cuerpo[0].style.alignItems = 'center';
cuerpo[0].style.flexDirection = 'column';
cuerpo[0].append(titulo);
cuerpo[0].append(caja);

function cambiaFondo() {
    switch (this.id) {
        case "rojo":
            document.body.style.backgroundColor = 'Red';
            break;

        case "verde":
            document.body.style.backgroundColor = 'Green';
            break;

        case "azul":
            document.body.style.backgroundColor = 'Blue';
            break;
    }
}