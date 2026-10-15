let personas=new Map(); 
personas.set("Elver", 40); 
personas.set("Deborah", 67); 
personas.set("Rosa", 18); 
personas.set("Marcelo", 12);

console.log(personas);

personas.set("Marcelo", 13);

console.log(personas);

tabla = document.createElement('table');
fila = document.createElement('tr');
dato = document.createElement('td');
dato.textContent = "Nombre";
fila.appendChild(dato);
dato = document.createElement('td');
dato.textContent = "Edad";
fila.appendChild(dato);
tabla.appendChild(fila);

for(let nombre of personas.keys() ) {
    fila = document.createElement('tr');
    dato = document.createElement('td');
    dato.textContent = nombre;
    fila.appendChild(dato);
    dato = document.createElement('td');
    dato.textContent = personas.get(nombre);
    fila.appendChild(dato);
    tabla.appendChild(fila);
};

document.body.appendChild(tabla);