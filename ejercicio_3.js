/* 
Solicite una calificación, muestre el nombre de la 
categoría de dicha calificación

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/

let calificacion = prompt("Digita una calificación: ");

parseFloat(calificacion);

if (!isNaN(calificacion)) {
    
    if (calificacion < 0 || calificacion > 10) {
        alert("La calificación ingresada es incorrecta");
    } else if (calificacion >= 0 && calificacion <= 3) {
        alert("Tu calificacion es Muy deficiente");
    } else if (calificacion > 3 && calificacion <= 5) {
        alert("Tu calificacion es Insuficiente");
    } else if (calificacion > 5 && calificacion <= 6) {
        alert("Tu calificacion es Suficiente");
    } else if (calificacion > 6 && calificacion <= 7) {
        alert("Tu calificacion es Buena");
    } else if (calificacion > 7 && calificacion <= 9) {
        alert("Tu calificacion es Notable");
    } else if (calificacion > 9 && calificacion <= 10) {
        alert("Tu calificacion es Sobresaliente");
    }

} else {
    alert("Dato incorrecto, solo se permiten números");
}