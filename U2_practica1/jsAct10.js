let diez = false;
let corta = -1;
let entrada = null;

while(entrada != corta){
	entrada = parseInt(prompt(" mete un numero del 1 al 10, para terminar ingresa -1 "));
	if (entrada > 10 || entrada < -1) {alert(" datos de entrada incorrectos");}
	if (entrada != null && entrada == 10) {diez = true;}
}
if (diez) {document.write("SI");}
else{
	document.write("NO");
}