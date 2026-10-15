let data = [
  { name: "Nacho", telephone: "966112233", age: 40 },
  { name: "Ana", telephone: "911223344", age: 35 },
  { name: "Mario", phone: "611998877", age: 15 },
  { name: "Laura", telephone: "633663366", age: 17 },
];

data.push(
  { name: "Pedro", telephone: "611944444", age: 25 },
  { name: "Julia", phone: "633232323", age: 37 },
);

console.log(data);

let edad = structuredClone(data);
console.log(edad.sort(ordenaEdad));

let nombre = structuredClone(data);
console.log(nombre.sort(ordenaNombre));

console.log(mayorTreinta());

function ordenaEdad(e1, e2) {
  return e1["age"] - e2["age"];
}

function ordenaNombre(e1, e2) {
  return e1["name"].localeCompare(e2["name"]);
}

function mayorTreinta() {
  let mayorTreinta = [];

  for (let index = 0; index < data.length; index++) {
    if (data[index]["age"] > 30) {
      mayorTreinta.push(data[index]);
    }
  }

  return mayorTreinta;
}