//genera un n Aleatorio del 1 al 100
let nAleatorio = parseInt(Math.random()*100)+1;
let contIntentos = 1;
let respuestaUsu;
let volver;
let encontrado = false;


alert("se ha generado un num aleatorio del 1 al 100  ADIVINALO"); //8

console.log( "num " + nAleatorio);

do{
	//pide un n al usuario
	respuestaUsu = parseInt(prompt("dime el N que crees que es")); //8
	//console.log("intentos " + contIntentos);

	//si la R no es un num, esta vacia o es null termina
	if (isNaN(respuestaUsu) || respuestaUsu === null || respuestaUsu==="") {alert("Datos introducidos ERRONEOS, se termina el juego");  break;}
	//si acierta, muestra intentos y pregunta si quieres volver a jugar
	else if(respuestaUsu === nAleatorio){
	 encontrado=true;
	 if(encontrado){
		alert("Acertaste!!! , se termina el juego has usado " + contIntentos +" intentos");
		volver = parseInt(prompt("quieres volver a jugar, introduce -1"));
		if (volver == null || isNaN(volver) || volver === "") {alert("respesta incorrecta");}
		else if (volver === -1) {
			encontrado=false;
			alert("se ha generado un num aleatorio del 1 al 100  ADIVINALO");
		    nAleatorio = parseInt(Math.random()*100)+1;}
		else{ alert("se termino el GAME");}
}
	}
	//si es menor
	else if(respuestaUsu < nAleatorio){alert("El numero escondido es MAYOR"); contIntentos++; }
	//si es mayor
	else if(respuestaUsu > nAleatorio){alert("El numero escondido es MENOR"); contIntentos++; }
}while(!encontrado) //mientras no lo encuentra 


