let cuerpo = document.getElementById("imagen");
let formulario = document.createElement("form");
formulario.style.display = "flex";
formulario.style.flexDirection = "column";
formulario.style.gap = "10px";
formulario.style.width = "200px";
let mail = document.createElement("input");
mail.type = "text";
mail.addEventListener("blur", errorMail);
mail.addEventListener("blur", quitaErrorMail);
formulario.appendChild(mail);
let pass = document.createElement("input");
pass.addEventListener("blur", errorPass);
pass.addEventListener("blur", quitaErrorPass);
pass.type = "password";
//input.minLength=8;
//input.maxLength=10;
formulario.appendChild(pass);
let submit = document.createElement("input");
submit.type = "submit";
submit.disabled = true;
formulario.appendChild(submit);
cuerpo.appendChild(formulario);
let validaMail = false;
let validaPass = false;

function errorMail() {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!regex.test(mail.value)) {
    let mensaje = document.createElement("p");
    mensaje.style.color = "black";
    mensaje.className = "errorMail";
    mensaje.style.backgroundColor = "red";
    mensaje.textContent = "El formato del correo es incorrecto";
    cuerpo.appendChild(mensaje);
    validaMail = false;
  } else{
    validaMail = true;
  }
  validaBoton();
}

function errorPass() {
  if (!(pass.value.length >= 8 && pass.value.length <= 10)) {
    let mensaje2 = document.createElement("p");
    mensaje2.style.color = "black";
    mensaje2.className = "errorPass";
    mensaje2.style.backgroundColor = "red";
    mensaje2.textContent = "La contraseña debe ser entre 8 y 10 caracteres";
    cuerpo.appendChild(mensaje2);
    validaPass = false;
  }else{
    validaPass = true;
  }
  validaBoton();
}

function quitaErrorMail() {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (regex.test(mail.value)) {
    let errorMail = document.querySelectorAll(".errorMail");
    for (let index = 0; index < errorMail.length; index++) {
        errorMail[index].remove();
        
    }
    validaMail = true;
    validaBoton();
  }
}

function quitaErrorPass() {
  if (pass.value.length >= 8 && pass.value.length <= 10) {
    let errorPass = document.querySelectorAll(".errorPass");
    for (let index = 0; index < errorPass.length; index++) {
        errorPass[index].remove();        
    }   
    validaPass = true;
    validaBoton();
  }
}

function validaBoton() {
  if (validaPass && validaMail) {
    submit.disabled = false;
  }else{
    submit.disabled = true;
  }
}
