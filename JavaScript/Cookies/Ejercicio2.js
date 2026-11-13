temporizador(5000);

function temporizador(milisegundos) {
    const cuerpo = document.getElementsByTagName("body")[0]
    let texto = document.createElement("p");
    const promesa = new Promise((resolver, rechazar) => {
        setTimeout(()=>resolver("Tiempo concluido"), milisegundos);
        setTimeout(()=>rechazar("El tiempo no va bien"), milisegundos*2);
    });
    promesa.then((resultado)=>{
        texto.textContent = resultado;
    }).catch((error)=>{
        texto.textContent = error;
    })
    cuerpo.appendChild(texto);
}