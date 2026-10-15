let valores = [1, 2, 3, 4, 5];

valores.fill(0);

for (let index = 0; index < 5; index++) {
    valores.push(Math.floor(Math.random()*100));
    
}

console.log(valores);

let set = new Set(valores);
valores = [...set].join(", ");
texto = document.createElement('p');
texto.textContent = valores.toString();
document.body.appendChild(texto);