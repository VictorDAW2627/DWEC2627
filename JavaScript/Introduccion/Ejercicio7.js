let caja = document.createElement("div");
caja.style.display = 'flex';
caja.style.justifyContent = 'center';
caja.textContent = "ENTRA AQUI.";
caja.addEventListener("mouseenter", entraDiv)
caja.addEventListener("mouseleave", saleDiv)

let cuerpo = document.getElementsByTagName("body");
cuerpo[0].style.display = 'flex';
cuerpo[0].style.justifyContent = 'center';
cuerpo[0].style.alignItems = 'center'
cuerpo[0].append(caja);

function entraDiv(){
    this.style.backgroundColor = "Gold";
}

function saleDiv(){
    this.style.backgroundColor = "White";
}