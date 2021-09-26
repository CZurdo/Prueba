let num1 =parseInt(prompt("Dime el primer num"));
let num2 = parseInt(prompt("Dime el segundo num"));
let num3 = parseInt(prompt("Dime el tercer num"));

if (num1 < 0 || num2 < 0 || num3 < 0) {
	alert("hay un numero menor a 0  recarga la pagina y vuelve a meterlos");
	
}else{
	if (num1 > 10) {alert(`${num1} es mayor a 10!!`)}
	if (num2 > 10) {alert(`${num2} es mayor a 10!!`)}
	if (num3 > 10) {alert(`${num3} es mayor a 10!!`)}
}