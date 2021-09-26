let dia =parseInt(prompt("Dime un dia"));
let mes = parseInt(prompt("Dime un numero de mes"));

alert("vamos a ver si la fecha introducida corresponde a navidad");

if(dia == 24){
	if (mes == 12) {alert("Yep es el dia de navidad!!!");}
	else{alert("es otra fecha");}
}
else{alert("es otra fecha");}