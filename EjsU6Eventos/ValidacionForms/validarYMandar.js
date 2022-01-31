/*
Validacion

cada input con su span
En el span, mostrariamos los errores despues de validar los campos

la validacion ha de hacerse desde js, porque pueden dehabilitar la de html

*/
let form = document.getElementsByName("formulario")[0];
let inputCorreo = document.querySelector("#idEmail");
let spanErroresCorreo = document.querySelector("#idEmailError");

let inputDni = document.querySelector("#idDni");
let spanErroresDni = document.querySelector("#idDniError");
/*
expresiones reg
const r = /.a.o/i;
r.test("cadena"); -> true o false
*/
let regExDni = /^\d{8}[a-z A-Z]$/;
//https://emailregex.com/
let regExCorreo =  	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//manejadores de eventos
inputCorreo.addEventListener("click",limpiarInput);
inputCorreo.addEventListener("blur",enviarSiCorreoCorrecto);

inputDni.addEventListener("click",limpiarInput);
inputDni.addEventListener("blur",enviarSiDniCorrecto);

function limpiarInput(event){
	console.log(event);
	let valorInput = this.value;
	spanErroresCorreo.innerHTML = "";
	spanErroresDni.innerHTML = "";
	if (valorInput != "") {
		console.log(`limpio el campo ${this.name}`);
		//limpiar
		this.value = "";
	}
}
/*
meter campo dni y validarlo con js, expre para dni, test , si true enviamos si no mostramos mensaje error
*/
function enviarSiDniCorrecto(event) {
	//si al comprobar el imput no cumple la reg
	if (regExDni.test(inputDni.value) == false) {
		let errorDNI = " ZyH el formato tiene que ser DNI: 8num1letra ";
		//rellena el campo error con el mensaje de error
		spanErroresDni.innerHTML = errorDNI;	
	}
	else{
		//enviar formulario
		form.submit();
		console.log(`enviado ${this.value}`);
		event.preventDefault(); // parar la ejecucion por defecto del evento
	}
}

//antes de enviar comprobamos si cumple, si no se muestra el error
function enviarSiCorreoCorrecto(event){
		//si esta mal
		//!inputCorreo.checkValidity()
		if( (this.checkValidity()) == false){
			let estadoValidacion = inputCorreo.validity;
			
			if ( estadoValidacion.valueMissing ) {
				 //modifica el mensaje de error para el input vacio
				 inputCorreo.setCustomValidity(" ZyH este campo es requerido ");
			}
			else if ( estadoValidacion.patternMismatch ) {
				//modifica el mensaje de error para cuando lo introduciodo no tiene formato de CORREO
				inputCorreo.setCustomValidity(" ZyH no tiene pinta de correo: word@word.word")
			}
			else{//limpiar el mensaje de error si no hay
				inputCorreo.setCustomValidity("");
			}
			
			//rellena el campo error con el mensaje de error
			spanErroresCorreo.innerHTML = inputCorreo.validationMessage;
		}
		//si es correcto el campo correo
		else{
			//enviar formulario
			form.submit();
			console.log(`enviado ${this.value}`);
			event.preventDefault(); // parar la ejecucion por defecto del evento
		}	
}


