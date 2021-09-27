let op1 = parseInt(prompt("dime el numero de la tabla, ha de ser mayor a 0"));
let num2 = parseInt(prompt("dime el numero hasta el que llega, ha de ser mayor a 0"));


if (op1 > 0 && op1 != null) {
	if (num2 > 0 && num2 != null) {
		let i = 1;
		let res = null;
		do{
			res = op1 * i;
			document.write(`!! ${op1} x ${i} = ${res} ¡¡`+ "<br>");
			i = ++i;
		}while(i <= num2);
	}
	else{
		alert("el num2 es menor a 0, o esta vacio");
	}
}

else{
		alert("el op1 es menor a 0, o esta vacio");
}