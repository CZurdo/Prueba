
function crearElemento() {
	let nAleatorio = parseInt(Math.random()*200);
	//elemento padre
	let lista = document.getElementById("lista");
	//nuevo elemento
	let nuevoLi = document.createElement("li");
	//texto  nuevo 
	let textoLi = document.createTextNode("Nuevo elemento "+nAleatorio);
	//añadir el texto al elemento nuevo
	nuevoLi.appendChild(textoLi);
	//añadir el elemento a la lista
	lista.appendChild(nuevoLi);


}

function eliminarElemento() {
	
	//elemento padre
	let lista = document.getElementById("lista");
	//coge el ultimo li
	let ultimoLi = lista.lastElementChild;
	//si hay lo borra
	if (ultimoLi != null) {
		lista.removeChild(ultimoLi);
	}
	else{
		alert("no quedan");
	}

}

