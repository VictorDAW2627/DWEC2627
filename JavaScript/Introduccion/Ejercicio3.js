let texto = window.prompt("Introduce una cadena de texto");
texto = texto.toLowerCase();
let letra;
let contador = 0;

for (let index = 0; index < texto.length; index++) {
    letra = texto.charAt(index);
    
    if (letra == 'a') {
        contador++;
    }
}

window.alert("La cadena tiene un total de "+contador+" letras 'a'");