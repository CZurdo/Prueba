let nota =parseFloat(prompt("Dime tu nota de 0 a 10"));

if (nota < 3 && nota >= 0) {nota = "muy deficificiente";}
if (nota < 5 && nota >= 3) {nota = "insuficiente";}
if (nota < 6 && nota >= 5) {nota = "bien";}
if (nota < 9 && nota >= 6) {nota = "notable";}
if (nota <= 10 && nota >= 9) {nota = "sobresaliente";}

console.log(nota);
