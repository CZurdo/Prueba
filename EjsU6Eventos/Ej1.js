
let boton = document.getElementById("botone").addEventListener("click",cambiaColor);
document.addEventListener("click",cambiaColor);


function cambiaColor(event) {
	let r = parseInt(Math.random()*255);
	let g = parseInt(Math.random()*255);
	let b = parseInt(Math.random()*255);

	console.log(event.target.type);
	//si lo que desencadena el evento es un boton
	if (event.target.type == "button") {
		document.body.style.backgroundColor=`rgb(${r},${g},${b})`;

	}
	else{
		document.body.style.backgroundColor=`white`;
	}
	//event.preventDefault()   si recarga la pagina automaticamente, cortas el submit
	//event.stopPropagation();
}