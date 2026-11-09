let cuerpo = document.getElementById("imagen");
let mensaje = document.createElement("h1");
mensaje.textContent = "Pulsa Alt+F12 para cambiar la imagen de fondo";
cuerpo.appendChild(mensaje);

window.onkeydown = function (event) {
  if (event.altKey && event.key === "F12") {
    event.preventDefault();
    cuerpo.style.backgroundImage = `url("${imagenAleatoria()}")`;
  }
};

function imagenAleatoria() {                     
   const aleatorioNum = Math.floor(Math.random() * 100);

   return `https://picsum.photos/seed/${aleatorioNum}/1920/1080`;
}
