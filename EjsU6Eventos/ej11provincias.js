//valores a agregar

let vComunidades= new Set(["Andalucia","Madrid","Galicia"]);
let vCiudades=new Map([["Andalucia1","Almeria"],["Andalucia2","Cadiz"],["Andalucia3","Cordoba"],["Andalucia4","Granada"],["Andalucia5","Huelva"],["Andalucia6","Jaen"],["Andalucia7","Malaga"],["Andalucia8","Sevilla"],["Madrid","Madrid Capital"],["Galicia1","La Coruña"],["Galicia2","Lugo"],["Galicia3","Orense"],["Galicia4","Pontevedra"]]);

let selProvicia = document.getElementById("idProvincia");
	

window.addEventListener("load",cargaComunisdades);
selProvicia.addEventListener("click",cargaCiudades)

function cargaComunisdades(event) {
	console.log("ha cargado");
	
	//recorre el set, por cada valor crea una option y se lo añade al selectProvincias
	for(let valor of vComunidades){
		console.log(valor);
		if(valor == "Andalucia"){console.log("A");
			let test = document.createElement("option");
			selProvicia.appendChild(test);
			test = test.innerHTML="<option value='Andalucia'> Andalucia </option>";
		}
		if(valor == "Madrid"){console.log("M");
		let test = document.createElement("option");
			selProvicia.appendChild(test);
			test = test.innerHTML="<option value='Madrid'> Madrid </option>";
		} 
		if(valor == "Galicia"){console.log("G");
			let test = document.createElement("option");
			selProvicia.appendChild(test);
			test = test.innerHTML="<option value='Galicia'> Galicia </option>";
		}
	}
}

function cargaCiudades(event) {
	console.log(selProvicia.value);
	let selCiudad = document.getElementById("idCiudad");
		
	if(selProvicia.value == "Andalucia"){
				for (let i = 1; i < 9; i++) {
					let valor = vCiudades.get(selProvicia.value+i);
					console.log(valor);
					let test = document.createElement("option");
					selCiudad.appendChild(test);
					test = test.innerHTML="<option value="+valor+">"+valor +"</option>";
				}
	}
	if(selProvicia.value == "Madrid"){
				let valor = vCiudades.get(selProvicia.value);
				let test = document.createElement("option");
				selCiudad.appendChild(test);
				test = test.innerHTML="<option value="+valor+">"+valor +"</option>";
	}
	if(selProvicia.value == "Galicia"){
		for (let i = 1; i < 5; i++) {
				let valor = vCiudades.get(selProvicia.value+i);
				console.log(valor);
				let test = document.createElement("option");
				selCiudad.appendChild(test);
				test = test.innerHTML="<option value="+valor+">"+valor +"</option>";	
		}	
	}
	
}

//falta limpar las opciones, al marcar una nueva se acumulan