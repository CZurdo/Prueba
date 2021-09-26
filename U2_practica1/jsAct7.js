let numero =parseInt(prompt("Dime un numero, ha de ser mayor o igual a 2"));

//encontrar pares
if (numero >= 2) {
	for (var i = 2; i <= numero; i++) {
		
		if ((i+2)%2 == 0 ) {
			document.write(i + " es par <br>");}
	}
}
else{
	alert("el numero introducido es menor a 2");
}
