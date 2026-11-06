let arrastrable = document.getElementById("capa1")
arrastrable.draggable=true;
arrastrable.addEventListener("drag", arrastrando)
arrastrable.addEventListener("dragend", soltar)
let destino = document.getElementById("capa2")
destino.addEventListener("dragover", encima)
destino.addEventListener("dragleave", salir)
destino.addEventListener("drop", soltando)

function arrastrando() {
    arrastrable.style.opacity="50%";
}

function soltar() {
    arrastrable.style.opacity="100%";
}

function salir() {
    destino.style.backgroundColor="white";
}

function encima(evento) {
    evento.preventDefault();
    destino.style.backgroundColor="red";
}

function soltando(evento) {
    evento.preventDefault();
    destino.style.backgroundColor="red";
    destino.textContent="Lo has logrado"
    arrastrable.remove();
}