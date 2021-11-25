
	//elementos del form
	let eDeporte = document.getElementById("deporte");
	let eSerie = document.getElementById("serie");
	let ePelicula = document.getElementById("pelicula");
	
function pintarRespuesta() {
		if (eDeporte != null && eSerie != null && ePelicula != null) {
		
		//valores
		let vDeporte = eDeporte.value;
		let vSerie = eSerie.value;
		let vPeli = ePelicula.value;

		if (vDeporte != null || vDeporte != ""){
			//crear e
			let pDeporte = document.createElement("p");
			//crear text
			let tDeporte = document.createTextNode(vDeporte);
			//añadir al p
			pDeporte.appendChild(tDeporte);

			let arrFirstP = document.querySelectorAll("p:nth-child(1)");
			//seleccionar el p padre
			let firstP = arrFirstP[0];
			//añadirlo
			firstP.appendChild(pDeporte);
			//editar class
			firstP.classList.remove("textoRojo");
			firstP.classList.add("textoAzul");
			pDeporte.classList.add("textoVerde");
			console.log(firstP.attributes);
			
		}
		if (vSerie != null || vSerie != ""){
			let pSerie = document.createElement("p");
			let tSerie = document.createTextNode(vSerie);
			pSerie.appendChild(tSerie);
			let arrFirstP = document.querySelectorAll("p:nth-child(2)");
			let firstP = arrFirstP[0];
			firstP.appendChild(pSerie);
			//editar class
			firstP.classList.remove("textoRojo");
			firstP.classList.add("textoAzul");
			pSerie.classList.add("textoVerde");
			console.log(firstP.attributes);
		}
		if (vPeli != null || vPeli != ""){
			let pPeli = document.createElement("p");
			let tPeli = document.createTextNode(vPeli);
			pPeli.appendChild(tPeli);
			let arrFirstP = document.querySelectorAll("p:nth-child(3)");
			let firstP = arrFirstP[0];
			firstP.appendChild(pPeli);
			//editar class
			firstP.classList.remove("textoRojo");
			firstP.classList.add("textoAzul");
			pPeli.classList.add("textoVerde");
			console.log(firstP.attributes);

		}
		else{
			alert("no hay valores");
		}
	}
	else{
		alert("elemento no encontrado");
	}
}