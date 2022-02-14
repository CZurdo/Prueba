let http = new XMLHttpRequest();

let boton = document.querySelector("#idBoton");

boton.addEventListener("click",cargarAjax,false);

let botonVotar = document.getElementById("idBoton2");

botonVotar.addEventListener('click',sumarVotos,false);

let numPantalla;

//comprobar si local storage tiene la info, la pinta, si no actua normal
if (localStorage.getItem("numero") != undefined) {
	let res = document.getElementById("idResultado2");
	res.innerHTML = localStorage.getItem("numero");
}
else{console.log("localStorage no tiene valor");}


function cargarAjax() {
	http.addEventListener("load",mostrarDatos);
	http.open("GET","http://localhost:3000/votos",true);
	http.send();
}

function mostrarDatos() {
	let res = document.querySelector("#idResultado2");

	let datosCrudos = http.responseText;
	let datosJson = JSON.parse(datosCrudos);
	let num = datosJson[0].numero;

	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("numero",num);
		console.log(num);
		numPantalla = localStorage.getItem("numero");
		res.innerHTML = numPantalla;
	}

}

function sumarVotos() {
     
    let res = document.getElementById("idResultado2");
    let numVoto = parseInt(res.innerHTML);
    console.log(numVoto)
    res.innerHTML=numVoto+1;
}
