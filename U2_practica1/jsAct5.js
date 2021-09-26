let sueldo =parseInt(prompt("Dime cuanto cobras en euros"));
let antigüedad = parseInt(prompt("Dime cuantos años llevas en la empresa"));

if (sueldo > 0) {
	if(sueldo >= 500){
	document.write(`Tu sueldo es ${sueldo}`);
	}
	else{
		if (antigüedad >= 10) {sueldo = sueldo * 3}
		if (antigüedad < 10) {sueldo = sueldo * 2}
		document.write(`Tu sueldo es ${sueldo}`);
	}
}
