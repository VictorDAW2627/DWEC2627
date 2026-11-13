inicioSesion();

function obtenerValorCookie(nombre) {
    const cookies = document.cookie.split(";");
    for (let index = 0; index < cookies.length; index++) {
        let cookie = cookies[index].trim();
        if (cookie.indexOf(nombre+"=")===0) {
            return cookie.substring(nombre.length+1);
        }
    }
    return null;
}

function inicioSesion() {
    const cuerpo = document.getElementsByTagName("body")[0];
    let texto = document.createElement("p");
    const nombre = "inicios";
    let inicios = obtenerValorCookie(nombre);
    let contador = 1;

    if (inicios!==null) {
        contador = parseInt(inicios, 10)+1;
        if (isNaN(contador)) {
            contador = 1;
        }
    }

    if (contador >= 10) {
        document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        texto.textContent = `Has alcanzado 10 inicios de sesion, la cookie ha sido eliminada`;
    }else{
        const fechaExpiracion = new Date();
        fechaExpiracion.setMonth(fechaExpiracion.getMonth()+1)
        document.cookie = `${nombre}=${contador}; expires=${fechaExpiracion.toUTCString()}; path=/`;
        texto.textContent = `Has iniciado sesion, llevas ${contador} sesiones iniciadas`;
    }

    cuerpo.appendChild(texto);
}