/* 
    Imprima N números de la sucesión fibonacci. 
    N debe estar definido por el usuario.
*/

let num = prompt("Ingresa los números para la suceción Fibonacci: ");
parseInt(num);
var a = 0;
var b = 1;
var c = 1;

console.log("0, ");
console.log("1, ");
for (let i = 0; i < num; i++) {
    c = a + b;
    console.log(c + ", ")
    a = b;
    b = c;

}