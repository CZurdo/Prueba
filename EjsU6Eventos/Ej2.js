//let cuerpo = document.body;
let documentu = document;
documentu.addEventListener("mousemove",mueveRaton);


function mueveRaton(event) {
	console.log(event.type);
	if (event.type == "mousemove") {
		console.log("la x "+ event.clientX + " la y "+event.clientY);
		let liX = document.querySelector("#x");
		let liY = document.querySelector("#y");
		liX.textContent=`Posicion Y: ${event.clientX}`;
		liY.textContent=`Posicion Y: ${event.clientY}`;

	}

}