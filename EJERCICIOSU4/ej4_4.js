
let lista = document.querySelector("ol");

let hijosOL = lista.children;

let arrayLi=Array.from(hijosOL);

//ver el text de cada li
arrayLi.forEach(function(e){console.log (e.textContent)});

let eComidita = document.querySelector("input");
let vComidita;


function gilipollasMuestrate() {
	
	if (eComidita != null) {
		vComidita = eComidita.value;
		console.log(vComidita);

		//creamos elemento li
		let nuevoLi=document.createElement("li");
		
		//creamos texto para el elemento
		let nuevoTexto=document.createTextNode(vComidita);

		//añadimos texto al elemento
		nuevoLi.appendChild(nuevoTexto);

		//añadimos al array de Li el nuevo elemento
		arrayLi.push(nuevoLi);

		//selecciono el elemento 
		let colocacion=lista.querySelectorAll("li:nth-child(1)");
		lista.insertBefore(nuevoLi,colocacion[0]);
		console.log(colocacion);
	}
}