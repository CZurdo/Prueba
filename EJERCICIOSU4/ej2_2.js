
let miBody = document.getElementById("body");

let divSeleccionado=miBody.children[1];

let parrafos=divSeleccionado.getElementsByTagName("p");

function añadirPuntos() {
	for(let i = 0; i < parrafos.length; i++){
		//recupera el valor del p
		let text =parrafos[i].innerHTML;
		parrafos[i].innerHTML=text+" .";
	}
}
