export function temporizador(milisegundos) {
  const cuerpo = document.getElementsByTagName("body")[0];
  let texto = document.createElement("p");
  const promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => resolver("Tiempo concluido"), milisegundos);
    setTimeout(() => rechazar("El tiempo no va bien"), milisegundos * 2);
  });
  promesa
    .then((resultado) => {
      texto.textContent = resultado;
    })
    .catch((error) => {
      texto.textContent = error;
    });
  cuerpo.appendChild(texto);
}

export async function cuenta(
  inicio,
  contenedor = document.getElementsByTagName("body")[0],
  intervalo = 1000,
  callback,
) {
    let texto = document.createElement("p");
    contenedor.appendChild(texto);
    let milisegundos = intervalo<=10 ? intervalo*1000:intervalo;

    for (let index = inicio; index >= 0; index--) {
        texto.textContent=index;
        if (index > 0) {
            await new Promise(resolver=>setTimeout(resolver, milisegundos));
        }
    }

    if (typeof callback === "function") {
        callback(texto);
    }
}
