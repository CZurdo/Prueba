//genera un n Aleatorio del 1 al 100
let nAleatorio = parseInt(Math.random()*100)+1;
let contIntentos = 1;
let respuestaUsu;
let volver;
let encontrado = false;

let valoresRonda=[];
let vRepetidos=[];
let nRepetido=false;

let numsAdivinar = [];
let mostrar ="";


alert("se ha generado un num aleatorio del 1 al 100  ADIVINALO"); 
console.log( "num Ale " + nAleatorio);

//añade el nAleatorio al array de numeros que hay que adivinar
numsAdivinar.push(nAleatorio);

do{
	//pide un n al usuario
	respuestaUsu = parseInt(prompt("dime el N que crees que es")); 
	
	//console.log("intentos " + contIntentos);

	//si la R no es un num, esta vacia o es null termina
	if (isNaN(respuestaUsu) || respuestaUsu === null || respuestaUsu==="") {alert("Datos introducidos ERRONEOS, se termina el juego");  break;}
	
	//si es un numero
	else{
		
		//busca dentro del array el numero introducido, si hay uno cambia el valor a true 
		nRepetido = valoresRonda.includes(respuestaUsu);
		//si se han metido mas de 2 valores en el arr y hay un repetido avisa del repetido y lo guarda en el arr
		if (valoresRonda.length >= 2 && nRepetido) {
			vRepetidos.push(respuestaUsu);
			alert("Numero repetido: "+ respuestaUsu);
		}
		//Si no ha repetido el num Guarda valores del usuario en un array
		else{valoresRonda.push(respuestaUsu);}
		//console.log("arrayValores: "+ valoresRonda +" longitud "+ valoresRonda.length);
		//console.log(" repe "+ nRepetido);
		//console.log("arrayRepes: "+ vRepetidos +" longitud "+ vRepetidos.length);
		
		nRepetido= false;
		
		//si acierta, muestra intentos y pregunta si quieres volver a jugar
		if(respuestaUsu === nAleatorio){
			 encontrado=true;
			if(encontrado){
				alert("Acertaste!!! , se termina el juego has usado " + contIntentos +" intentos");
				volver = parseInt(prompt("quieres volver a jugar, introduce -1"));
				if (volver == null || isNaN(volver) || volver === "") {alert("respesta incorrecta");}
				else if (volver === -1) {
					encontrado=false;
					//limpiar el array
					valoresRonda.length=0;
					alert("se ha generado un num aleatorio del 1 al 100  ADIVINALO");
				    nAleatorio = parseInt(Math.random()*100)+1;
				    //añade el nuevo num A al array
				    numsAdivinar.push(nAleatorio);
				}
				else{ 
					alert("se termino el GAME");
					//rellenar la cadena para mostrar los valores de la ronda
					for (var i = 0; i < valoresRonda.length; i++) {
						mostrar+=valoresRonda[i] + " ,";
					}
					//funcion para rellenar las tablas
					window.onload = function(){
						document.getElementById("nAdivinar").innerHTML=` ${nAleatorio}`;
						document.getElementById("valores").innerHTML = `${mostrar}`;
					}
				}
			}
		}

		//si es menor
		else if(respuestaUsu < nAleatorio){alert("El numero escondido es MAYOR"); contIntentos++; }
		//si es mayor
		else if(respuestaUsu > nAleatorio){alert("El numero escondido es MENOR"); contIntentos++; }	
	}	
		
}while(!encontrado) //mientras no lo encuentra 
