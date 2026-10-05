let color = window.prompt("¿Que color de fondo prefiere, Rojo (R), Verde (V) o Azul (A)?");
color = color.toUpperCase();

switch (color) {
    case 'R':
        document.body.style.backgroundColor = 'Red';
        break;

    case 'V':
        document.body.style.backgroundColor = 'Green';
        break;

    case 'A':
        document.body.style.backgroundColor = 'Blue';
        break;

    default:
        window.alert("Esa opcion no es valida");
}