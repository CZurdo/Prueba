let num = parseInt(prompt("dame un nº mayor a 1 "));

if (num != null && num > 1) {
	for (var i = 1; i <= num; i++) {
		for (var y =1; y <= i; y++) {
			document.write("*");
		}
		document.write("<br>");
	}
}
else{
	alert("los datos introducidos son erroneos");
}