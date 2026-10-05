let fecha = new Date(prompt("¿Que día naciste? YYYY/MM/DD"));

let milisegundos = Date.now()-fecha.getTime();
let segundos = milisegundos/1000;
let minutos = segundos/60;
let horas = minutos/60;
let dias = horas/24;

alert("Han transcurrido "+Math.trunc(dias)+" dias, aproximadamente, desde que naciste");