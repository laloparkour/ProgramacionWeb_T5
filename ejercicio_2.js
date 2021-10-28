/* 
Solicite al usuario capturar su nombre utilizando prompt, 
al hacerlo lance una alerta saludando por su nombre al usuario. 
*/

let edad = prompt("Digita tu edad: ");

parseInt(edad);

if (!isNaN(edad)) {
    if (edad < 18) {
        alert("No cuentas con edad para poder conducir");
    } else {
        alert("Cuentas con la edad para poder conducir");
    }
} else {
    alert("Dato incorrecto, solo se permiten números");
}

