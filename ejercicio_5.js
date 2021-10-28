/*  
Solicite al usuario capturar calificaciones hasta que el usuario desee
terminar, al terminar muestre el promedio de calificaciones.
*/

var flag = true;
var promedio = 0;
var cont = 0;

parseFloat(promedio);


while (flag) {
    
    let cal = prompt("Ingresa la calificacion: ");
    
    promedio += parseFloat(cal);

    let opc = prompt("¿Desea continuar? [1 = Si, 0 = No]")
    parseInt(opc);

    if (opc == 0) {
        flag = false;
    }

    cont++;

}

alert("El promedio de las calificaciones ingresadas es: " + (promedio / cont));


