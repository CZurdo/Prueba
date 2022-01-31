let caja = document.querySelector("#caja");


document.addEventListener("keydown",moverCaja);

//posiciones
let pxTop=200;
let pxLeft = 300;
let mueve = 5;


function moverCaja(event) {
	console.log(event.type + " " + event.key);
	//subir
	if (event.key == 8 || event.key == "w") {
		console.log("subo");
		//caja.style.top="10px";
		pxTop = pxTop-mueve;
		caja.style.top=`${pxTop}px`;
	}
	//bajar
	if (event.key == 2 || event.key == "s") {
		console.log("bajo");
		pxTop = pxTop+mueve;
		caja.style.top=`${pxTop}px`;	
	}
	//izquierda
	if (event.key == 4 || event.key == "a") {
		console.log("izq");
		pxLeft = pxLeft-mueve;
		caja.style.left=`${pxLeft}px`;
	}
	//derecha
	if (event.key == 6 || event.key == "d") {
		console.log("der");
		pxLeft = pxLeft+mueve;
		caja.style.left=`${pxLeft}px`;
	}
}