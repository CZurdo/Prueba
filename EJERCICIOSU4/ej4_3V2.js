
	//elementos del form
	let eDeporte = document.getElementById("deporte");
	let eSerie = document.getElementById("serie");
	let ePelicula = document.getElementById("pelicula");

	//set guardan valores ya introducidos
	let valoresDeporte = new Set();
	let valoresSerie = new Set();
	let valoresPelis = new Set();

	function pintarRespuesta() {
		//valores del input
		let vDeporte = eDeporte.value;
		let vSerie = eSerie.value;
		let vPeli = ePelicula.value;
		
		//deporte
		if (vDeporte != null || vDeporte != ""){
			let arrDeporte = vDeporte.split(",");

			let setDeporte = new Set();

			//set Relleno con elementos no repetidos
			for(e of arrDeporte){
				//comprueba repetidos en el input
				if (setDeporte.has(e)) {alert("valor " + e +" repetido en el input")}
				//comprueba en los valores
				else if(valoresDeporte.has(e)){alert("valor " + e +" ya introducido")}
				else{
					setDeporte.add(e);
				}
			}
			//añadir los valores al set general
			for( e of setDeporte){
				valoresDeporte.add(e);
			}

			//por cada elemento del Set, insertar un p con su contenido		
			for (let item of setDeporte){
				let nP = document.createElement("p");
				let tP = document.createTextNode(item);
				//añadir al p
				nP.appendChild(tP);
				let pPadre = document.getElementById("pDeportes");
				if (pPadre != null) {
					pPadre.appendChild(nP);
					//editar class
					pPadre.classList.remove("textoRojo");
					pPadre.classList.add("textoAzul");
					nP.classList.add("textoVerde");
				}
			}
		}
		else{
			alert("deporte Vacio");
		}

		//serires
		if (vSerie != null || vSerie != ""){
			let arrSerie = vSerie.split(",");

			let setSerie = new Set();

			//set Relleno con elementos no repetidos
			for(e of arrSerie){
				if (setSerie.has(e)) {alert("valor " + e +" repetido en el imput")}
				else if(valoresSerie.has(e)){alert("valor " + e +" ya introducido")}
				else{
					setSerie.add(e);
				}
			}

			//añadir los valores al set general
			for( e of setSerie){
				valoresSerie.add(e);
			}

			//por cada elemento del Set, insertar un p con su contenido
			for (let item of setSerie){
				let nP = document.createElement("p");
				let tP = document.createTextNode(item);
				//añadir al p
				nP.appendChild(tP);
				let pPadre = document.getElementById("pSeries");
				if (pPadre != null) {
					pPadre.appendChild(nP);
					//editar class
					pPadre.classList.remove("textoRojo");
					pPadre.classList.add("textoAzul");
					nP.classList.add("textoVerde");
				}
			}
		}
		else{
			alert("serie Vacio");
		}

		//pelis
		if (vPeli != null || vPeli != ""){
			let arrPeli = vPeli.split(",");

			let setPeli = new Set();

			//set Relleno con elementos no repetidos
			for(e of arrPeli){
				if (setPeli.has(e)) {alert("valor " + e +" repetido en el imput")}
				else if(valoresPelis.has(e)){alert("valor " + e +" ya introducido")}
				else{
					setPeli.add(e);
				}
			}

			//añadir los valores al set general
			for( e of setPeli){
				valoresPelis.add(e);
			}

			//por cada elemento del Set, insertar un p con su contenido			
			for (let item of setPeli){
				let nP = document.createElement("p");
				let tP = document.createTextNode(item);
				//añadir al p
				nP.appendChild(tP);
				let pPadre = document.getElementById("pPelis");
				if (pPadre != null) {
					pPadre.appendChild(nP);
					//editar class
					pPadre.classList.remove("textoRojo");
					pPadre.classList.add("textoAzul");
					nP.classList.add("textoVerde");
				}
			}
		}
		else{
			alert("pelis Vacio");
		}
	}