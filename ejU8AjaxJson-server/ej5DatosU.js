let http = new XMLHttpRequest();
let petiBorrar = new XMLHttpRequest();
let petiEditar = new XMLHttpRequest();

//boton Post
let bAñadir = document.querySelector("#idañadir");
bAñadir.addEventListener("click",cargarAjaxPost);

//boton Delete
let bBorrar = document.querySelector("#idborrar");
bBorrar.addEventListener("click",cargarAjaxDelete);

//boton Patch
let bEditar = document.querySelector("#ideditar");
bEditar.addEventListener("click",cargarAyaxPatch);

let usuario;
//añadir usuarios
function cargarAjaxPost(e) {
	
	//recoger datos del form
	let vnombre = (document.querySelector("#idnombre").value).trim();
	let vapellido = (document.querySelector("#idapellido").value).trim();
	let vdni = (document.querySelector("#iddni").value).trim();
	let vaficiones = (document.querySelector("#idaficiones").value).trim();
	//limpiar aficiones y meter en array
	let arrAficiones = vaficiones.split(",");
	
	//comprobar datos introducidos
	if (comprobarCamposApi()) {
		// Si bien generar peticion
		http.addEventListener("load",muetraDatos);
		http.open("POST","http://localhost:3000/usuarios",true);
		//tipo de cabecera
		http.setRequestHeader("Content-Type","application/json;charset=UTF-8");
		//mandar los datos del form
		http.send(JSON.stringify({nombre: `${vnombre}`, apellido: `${vapellido}`, dni: `${vdni}` , aficiones: `${arrAficiones}`}));
	}
	else{
		alert("campos mal introducidos");
	}
	//evitar recarga
	e.preventDefault();
}

function muetraDatos(e) {
	let r = document.getElementById("idResultado");
	if (http.readyState == 4 &&  http.status == 201 || http.status == 200) {
		
		r.innerHTML = "correcto";
	}
	else if(http.status == 404 ){
		alert("Servidor no disponible");
	}
	else{
		alert("Error en la peticion");
		console.log(http.status + " status y readyState " + http.readyState);
	}
}

// fun borrado
function cargarAjaxDelete() {
	//recoger Valor del imput
	let vdni = (document.querySelector("#iddni").value).trim();
	
	http.addEventListener("load", recuperaIdYDelete);
	//open para conseguir el id mediante los datos introducidos: /archivo?campo=dato 
	http.open("GET","http://localhost:3000/usuarios?dni="+vdni,true);
	http.send();
}

function recuperaIdYDelete(e) {
	
	if(http.readyState == 4 &&  http.status == 201 || http.status == 200){
		//recupera el obj del Dni que se metio
			let datos = http.responseText;
			let datosJson = JSON.parse(datos);
			//coge el id
			let idUsuario = datosJson[0].id;

			if (comprobarCamposApi()) {

				petiBorrar.addEventListener("load",muetraDatos);
				//comienza la peticion delete  /archivo/id
				petiBorrar.open("DELETE","http://localhost:3000/usuarios/"+idUsuario,true);
				petiBorrar.send();
				console.log("usuario con id "+idUsuario + "se va a borrar ");
			}
			else{alert("campos mal introducidos");}
	}
	else{
		console.log("error peti para recuperar el dni");
	}
	e.preventDefault();
}

// fun editar
function cargarAyaxPatch() {
	let dni = document.querySelector("#iddni").value.trim();
	http.addEventListener("load",recuperarIdYEditar);
	http.open("GET","http://localhost:3000/usuarios?dni="+dni,true);
	http.send();
}

function recuperarIdYEditar() {
	if (http.readyState == 4 && http.status == 200 || http.status == 201) {
		let datos = http.responseText;
		let datosJson = JSON.parse(datos);
		console.log(datosJson);
		//ya tenemos el id
		usuario = datosJson[0].id;
		// comprobar valor de resto de campos
		if (comprobarCamposApi()) {
			//valor campos formu
			let nom = document.getElementById("idnombre").value.trim();
			let ape = document.getElementById("idapellido").value.trim();
			let afi = document.getElementById("idaficiones").value.trim();

			//hacer peti patch
			petiEditar.addEventListener("load",muetraDatos);
			petiEditar.open("PATCH","http://localhost:3000/usuarios/"+usuario,true);
			petiEditar.setRequestHeader("Content-Type","application/json;charset=UTF-8");
			petiEditar.send(JSON.stringify({nombre: nom, apellido: ape, aficiones: afi}));
		}
	}else{console.log("error al conseguir el dni (patch)")}
}


// fun comprobar campos mediante Api

function comprobarCamposApi() {
	return (comprobarNombre() && comprobarApellido() && comprobarDni() && comprobarAficiones());
}
	// comprobar nombre
function comprobarNombre() {
	let nombre = document.querySelector("#idnombre");
	
	if (nombre.checkValidity() == false) {
		if (nombre.validity.valueMissing) {
			nombre.setCustomValidity("Este campo (nombre) es obligatorio rellenarlo")
		}
		else{
			nombre.setCustomValidity("");
		}
		document.getElementById("idResultado").innerHTML = nombre.validationMessage;
		return false;
	}
	else{return true;}
}
	//comprobar App
function comprobarApellido() {
	let apellido = document.querySelector("#idapellido");
	if (apellido.checkValidity() == false) {
		if (apellido.validity.valueMissing) {
			apellido.setCustomValidity("Este campo (apellido) es obligatorio rellenarlo")
		}
		else{
			apellido.setCustomValidity("");
		}
		document.getElementById("idResultado").innerHTML = apellido.validationMessage;
		return false;
	}
	else{return true;}
}
	// comprobar Dni
function comprobarDni() {
	let dni = document.querySelector("#iddni");
	if (dni.checkValidity() == false) {
		if (dni.validity.patternMismatch) {
			dni.setCustomValidity("el patron esta equivocado, 8 num 1 letra");
		}
		else if(dni.validity.valueMissing){
			dni.setCustomValidity("Este campo (dni) es obligatorio rellenarlo");
		}else{
			dni.setCustomValidity("");
		}
		document.getElementById("idResultado").innerHTML = dni.validationMessage;
		return false;
	}
	else{return true}
}
	// comprobar Aficiones
function comprobarAficiones() {
	let aficiones = document.querySelector("#idaficiones");
	if (aficiones.checkValidity() == false) {
		if (aficiones.validity.valueMissing) {
			aficiones.setCustomValidity("Este campo (aficiones) es obligatorio rellenarlo")
		}
		else{
			aficiones.setCustomValidity("");
		}
		document.getElementById("idResultado").innerHTML = aficiones.validationMessage;
		return false;
	}
	else{return true;}
}
//limpiar espacios
	//vnombre = vnombre.trim();