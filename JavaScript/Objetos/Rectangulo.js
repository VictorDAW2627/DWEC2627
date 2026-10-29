class Rectangulo {

    ancho=0;
    alto=0;

    constructor(ancho, alto) {
        if (ancho <= 0) {
            ancho = 1;
        }else{
            this.ancho=ancho;
        }

        if (alto <= 0) {
            alto = 1;
        }else{
            this.alto=alto;
        }
    }

    cambiarDimensiones(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(){
        return this.ancho*this.alto;
    }

    copia(){
        return copia = new Rectangulo(this.ancho, this.alto);
    }

    comparar(rectangulo){
        switch (rectangulo) {
            case rectangulo.calcularArea()<this.calcularArea():
                return "Mayor";
            case rectangulo.calcularArea()>this.calcularArea():
                return "Menor";
            default:
                return "Igual";
        }
    }

    getAncho(){
        return this.ancho;
    }

    getAlto(){
        return this.alto;
    }

}

let body = document.getElementsByTagName["body"][0];
let parrafo = document.createElement("p");

let r1 = new Rectangulo(5, 4);
let area = r1.calcularArea();
parrafo.textContent = "El rectangulo r1 tiene las dimensiones "+r1.getAncho+" de ancho y "+r1.getAlto+" de alto, y su area es: "+area;
body.appendChild(parrafo);
let r2 = r1.copia();
area = r2.calcularArea();
parrafo = document.createElement("p");
parrafo.textContent = "El rectangulo r2 es una copia de r1, y su area es: "+area;
body.appendChild(parrafo)
let comparacion =r1.comparar(r2);
parrafo = document.createElement("p");
parrafo.textContent = "El rectangulo r1 es "+comparacion+" a r2";
body.appendChild(parrafo)
r1.cambiarDimensiones(5, 5);
comparacion = r1.comparar(r2);
parrafo = document.createElement("p");
parrafo.textContent = "Cambiamos las dimensiones de r1 a 5X5 y ahora es "+comparacion+" a r2";
body.appendChild(parrafo)