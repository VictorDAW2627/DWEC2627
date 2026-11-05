let cuerpo = document.getElementById("imagen");
let mensaje = document.createElement("h1");
mensaje.textContent = "Pulsa Alt+F12 para cambiar la imagen de fondo";
cuerpo.appendChild(mensaje);

window.onkeydown = function (event) {
  if (event.altKey && event.key === "F12") {
    event.preventDefault();
    cuerpo.style.backgroundImage = "url(prueba.jpg)";
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundPosition = "center";
  }
};
