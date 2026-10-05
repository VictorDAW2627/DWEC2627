const hoy = new Date();
let dia_sem = hoy.getDay().toLocaleString("es-ES");
let dia_mes = hoy.getDate().toLocaleString("es-ES");
let mes = hoy.getMonth().toLocaleString("es-ES");
let año = hoy.getFullYear().toLocaleString("es-ES");

switch (parseInt(dia_sem)-1) {
    case 0:
        dia_sem = "Lunes";
        break;
    case 1:
        dia_sem = "Martes";     
        break;
    case 2:
        dia_sem = "Miercoles";        
        break;
    case 3:
        dia_sem = "Jueves";        
        break;
    case 4:
        dia_sem = "Viernes";       
        break;
    case 5:
        dia_sem = "Sabado";      
        break;
    case 6:
        dia_sem = "Domingo";        
        break;
}

switch (mes) {
    case "0":
        mes = "Enero";
        break;
    case "1":
        mes = "Febrero";     
        break;
    case "2":
        mes = "Marzo";        
        break;
    case "3":
        mes = "Abril";        
        break;
    case "4":
        mes = "Mayo";       
        break;
    case "5":
        mes = "Junio";      
        break;
    case "6":
        mes = "Julio";        
        break;
    case "7":
        mes = "Agosto";
        break;
    case "8":
        mes = "Septiembre";     
        break;
    case "9":
        mes = "Octubre";        
        break;
    case "10":
        mes = "Noviembre";        
        break;
    case "11":
        mes = "Diciembre";       
        break;
}

alert("Hoy es "+dia_sem+", "+dia_mes+" de "+mes+" de "+año);