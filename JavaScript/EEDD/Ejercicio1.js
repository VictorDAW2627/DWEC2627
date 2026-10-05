let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];

data.push({name: "Pedro", telephone: "611944444", age: 25}, {name: "Julia", phone: "633232323", age: 37} );

console.log(data);

console.log(data.sort(ordenaEdad))

function ordenaEdad(e1, e2) {
    let claves = e1.keys();
    claves.forEach(clave => {
        if (clave == "age") {
            return e1[clave]-e2[clave];
        }
    });

}