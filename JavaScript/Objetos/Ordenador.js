let ordenador = new Object();
ordenador.marca = "AMD";
ordenador.modelo = "Ryzen";
ordenador.ram = 4;
ordenador.almacenamiento = 512;
ordenador.pulgadas = 17;
ordenador.toString=function() {
    let detalles="";
    detalles+="Este ordenador es de marca "+this.marca+", modelo "+this.modelo+". ";
    detalles+="Tiene "+this.ram+"GB de RAM y "+this.almacenamiento+"GB de disco duro. ";
    detalles+="Su pantalla tiene "+this.pulgadas+" pulgadas.";
    return detalles;
}

let body = document.getElementsByTagName("body")[0];
let parrafo = document.createElement("p");
parrafo.textContent = ordenador.toString();
body.appendChild(parrafo);

let portatil = Object.create(ordenador);
portatil.marca = "MSI";
portatil.modelo = "CreatorPro";
portatil.ram = 4;
portatil.almacenamiento = 256;
portatil.pulgadas = 12;
portatil.autonomia = 4;

portatil.toString = function () {
    let detalles = "";
    detalles+=ordenador.toString.call(this)+" Tiene "+this.autonomia+" horas de autonomia";
    return detalles;
}

parrafo = document.createElement("p");
parrafo.textContent = portatil.toString();
body.appendChild(parrafo);