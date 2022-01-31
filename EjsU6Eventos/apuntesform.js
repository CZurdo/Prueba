//acceder al formulario 
let formu = document.forms["idformu"];

//elementos
let elementos = formu.elements;

let datoTexto = document.querySelector("#idTexto");

let datoNumeros = document.querySelector("#idNumeros");

let datoContra = document.querySelector("#idPass");

let datoOculto = document.querySelector("#idOculto");

let datoArea = document.querySelector("#idArea");

let datoBuscador = document.querySelector("#idBuscador");

let datoSel = document.querySelector("#idSel");

let datoRadio = document.getElementsByName("radio");

let datoRadioH = document.querySelector("#idRadioH");

let datoRadioM = document.querySelector("#idRadioM");

let datoCheckA = document.querySelector("#idCkboxA");

let datoCheckP = document.querySelector("#idCkboxP");

let datoCorreo = document.querySelector("#idCorreo");

let datoFecha = document.querySelector("#idFecha");

let datoColor = document.querySelector("#idColor");

//recuperar evento enviar del form

let datoEnviar = document.querySelector("#idEnviar");

let infoFinal = document.querySelector("h3");
//test
//elementos["idEnviar"].addEventListener("submit",mostrar);

// si es en el submit es on click
formu.addEventListener('submit', mostrar);

//ej 6 mostrar los datos del form
function mostrar(event) {

		console.log(event.type + " tipo evento");
		//recoger valor de un texto

		//preguntar si con value esta bien
		let valorTexto = datoTexto.value;

		let valorNum = datoNumeros.value;

		let valorPass = datoContra.value;

		let valorArea = datoArea.value;

		let valorBuscador = datoBuscador.value;

		//hacer hincapie, ver tambien las opciones (apuntes word)
		let valorSelect = datoSel.value;     

		/* 
			recoger valor 
			datoSel.options[1].innerHTML

			para pillar todos 
				recuperar longitud (cuantas opciones hay)
				let long = datoSel.options.length;
				un for recorriendo tantas y pillando los valores
					for(let i = 0 ; i < long; i++){console.log(datoSel.options[i].innerHTML);}
		
			recuperar el seleccionado
				let idxSeleccionado = datoSel.selectedIndex;
			recoger el elemento seleccionado
				let opcionSeleccionada = datoSel.options[idxSeleccionado];     
			recoger el texto del valor
				let datoSeleccionado = opcionSeleccionada.innerHTML;

		*/
		let valorSex;

		for (let i = 0; i < datoRadio.length; i++) {
			if (datoRadio[i].checked) {
				valorSex = datoRadio[i].value;
			}
		}

		let valorComida;

			if (datoCheckA.checked) {
				valorComida = datoCheckA.value;
			}
			if (datoCheckP.checked) {
				valorComida = datoCheckP.value;
			}if(datoCheckA.checked && datoCheckP.checked){
				valorComida = datoCheckA.value + " y " + datoCheckP.value;
			}else{
				valorComida="No selecciono nada,pobre diablo";
			}
		
		let valorMail = datoCorreo.value;

		let valorFecha = datoFecha.value;

		let valorColor = datoColor.value;

		console.log(valorComida + " valor ");


		//ej8 recoger los datos de disponibilidad del formulario (checkbox)
		let divDispo = document.querySelector("#disponibilidad");
		let hijosDivDispo = divDispo.children;
		hijosDivDispo = Array.from(hijosDivDispo);

		let resultado="";
		for( let i = 2; i < hijosDivDispo.length; i++){
			if ( (i == 2) || (i == 5) || (i == 8) || (i == 11) || (i == 14) ) {
				if (hijosDivDispo[i].checked) {
					let valor = hijosDivDispo[i].value;
					resultado += valor+ " ";
				}
			}
		}
		//para editar el valor del select, hay que seleccionar el propio selec y de ahi, acceder a su hijo, no funciona con multiples valores
		let prefe = document.querySelector("#idDiaPref");
		prefe[0].innerHTML = resultado;
		prefe[0].value = resultado;
		console.log(resultado)


		//ej9 cambiar color de fondo de la pagina, con opcion del checkbox
		let divColor = document.querySelector("#colorfondo");
		let hijosDivColor = divColor.children;
		hijosDivColor = Array.from(hijosDivColor);

		let resultadoColor="";
		for( let i = 2; i < hijosDivColor.length; i++){
			if ( (i == 2) || (i == 5) || (i == 8) || (i == 11) || (i == 14) ) {
				if (hijosDivColor[i].checked) {
					let valor = hijosDivColor[i].value;
					resultadoColor += valor+ " ";
				}
			}
		}
		//para editar el valor del color
		document.body.style.backgroundColor = resultadoColor;
		
		console.log(resultadoColor)

		infoFinal.textContent = `Texto ${valorTexto} 
								Numero ${valorNum} 
								Password ${valorPass}
								Texto area ${valorArea}
								Valor Buscador ${valorBuscador} 
								Seleccionado ${valorSelect} 
								Sexo ${valorSex} 
								Comida ${valorComida} 
								Email ${valorMail}
								Fecha ${valorFecha}
								Color ${valorColor}`;
								
	event.preventDefault();
	
}

//ej7 sacar prompt de input texto y rellenarlo con el 
let inpTexto2 = document.querySelector("#idTexto2");

inpTexto2.addEventListener("click",rellenearConPrompt);

function rellenearConPrompt(){
	let respuesta = prompt("dime lo que quieras añadir");
	//se edita con value
	document.querySelector("#idTexto2").value=respuesta;
}

//10 Añadir al formulario un botón de limpieza del formulario, para que cuando el usuario lo pulse, se muestre un aviso como el que se muestra en la imagen.