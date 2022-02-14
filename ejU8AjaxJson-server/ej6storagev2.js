let http = new XMLHttpRequest();

let boton = document.querySelector("#idBoton");

boton.addEventListener("click",cargarAjax,false);



let num;

if (localStorage.getItem("numero") != null) {
	let res = document.getElementById("idResultado");
	res.innerHTML=localStorage.getItem("numero");

	
}
else{console.log("localStorage no tiene valor");}


function cargarAjax() {
	http.addEventListener("load",mostrarDatos);
	http.open("GET","http://localhost:3000/votos",true);
	http.send();
}

function mostrarDatos() {
	let res = document.querySelector("#idResultado");

	//el navegador tiene pa guardar
	if (typeof(Storage) !== "undefined") {
		//SI local storage tiene algun num guardado
		if (localStorage.getItem("numero") != null){
			//dame ese num
			let numPantalla = localStorage.getItem("numero");
			//muestra
			res.innerHTML = numPantalla;
			//aumenta
			numPantalla++;
			//guardalo
			localStorage.setItem("numero",(numPantalla));
		}
		else{
			//cuando no tiene nada entra aqui
			let datosCrudos = http.responseText;
			let datosJson = JSON.parse(datosCrudos);
			num = (datosJson[0].numero);

			num = num+1;
			localStorage.setItem("numero",(num));
			console.log(num);
			let numPantalla = localStorage.getItem("numero");
			res.innerHTML = numPantalla;
		}
	}

}


