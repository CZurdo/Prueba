let num1 =parseInt(prompt("Dime el primer num"));
let num2 = parseInt(prompt("Dime el segundo num"));
let num3 = parseInt(prompt("Dime el tercer num"));
let nombre = prompt("Dime tu nombre");
let apellido = prompt("Dimetu apellido");

let nombreYApellido = nombre+" "+ apellido;
let sumaTresNum = num1 + num2 + num3;
let multiTresNum = num1 * num2 * num3;
let diviPrimerYTercer = num1 / num3;
alert(` Tu nombre completo es ${nombreYApellido}`);
alert(` La suma de los 3 numeros es:  ${sumaTresNum}`);
alert(` La multiplicacion de los 3 numeros es:  ${multiTresNum}`);
alert(` La division del 1º y 3º numero es:  ${diviPrimerYTercer}`);
console.log(nombreYApellido);
console.log(sumaTresNum);
console.log(multiTresNum);
console.log(diviPrimerYTercer);