/* 
Solicite al usuario capturar N número de calificaciones, 
el usuario capturará la cantidad de calificaciones definida 
y al terminar se mostrará el promedio.
*/

let num = prompt("Ingresa un número de calificaciones: ");
parseInt(num);

if (!isNaN(num)) {

    let promedio = 0;
    
    parseInt(num);
    parseFloat(promedio);
    
    for (let i = 0; i < num; i++) {
        let cal = prompt("Ingresa la calificacion " + (i + 1) + ": ");
        
        promedio += parseFloat(cal);
    }
    
    alert("El promedio de las calificaciones ingresadas es: " + (promedio / num));

} else {
    alert("Dato incorrecto, solo se permiten números");
}
