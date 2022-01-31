//arrays de imagenes
var zFondos150 = ["./img/150x150/coche-1.jpg","./img/150x150/coche-2.jpg","./img/150x150/coche-3.jpg","./img/150x150/coche-4.jpg"];

var zFondos600 = ['./img/600x400/coche-1.jpg','./img/600x400/coche-2.jpg','./img/600x400/coche-3.jpg','./img/600x400/coche-4.jpg'];


var imagenPrincipal = document.querySelector("#idPrincipal");
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');



imagenPrincipal.style.backgroundImage=`url(${zFondos600[0]})`;


//for la i indica el Nº de subImagenes[i] y el fondo que va a tener zFondos150[i]  o foreach
for(let i = 0; i < zFondos150.length; i++){
	let imgPeke = `url('${zFondos150[i]}')`;
	//console.log(imgPeke);
	subImagenes[i].style.backgroundImage = imgPeke;
}

//para cada imagen (foreach) añadir evento mouseover  / pointerover (es mas concreto)
subImagenes.forEach(e => e.addEventListener("mouseover",accion)); 


//funcion que selecciona la imagen grande que se vera
function accion(event){
	console.log(this);
	console.log(" A- Elemento html    Evento -V ");
	console.log(event);
	//recupera el ultimo caracter del id del elemento
  let id = this.id[this.id.length -1]; 
  //console.log(id) 
  imagenPrincipal.style.backgroundImage =`url(${zFondos600[id-1]})`;
}


/**
  URL CÓDIGO FUENTE: https://francescricart.com/como-generar-una-galeria-de-imagenes-de-producto-con-javascript/
*/

//**********  PRUEBAS LOCAS
let bigContainer = document.querySelector("#pruebas-locas"); //"#relleno"
let relleno = bigContainer.firstElementChild;
console.log(relleno);
relleno.addEventListener("select", muestraSeleccion);

function muestraSeleccion(e){
		console.log(e);

		let start = e.target.selectionStart;
		let fin = e.target.selectionEnd;

		let textoEntero = relleno.value;
		let seleccionado = textoEntero.substring(start,fin);
		
		document.getElementById("vacio").innerHTML = seleccionado;
}
/*
Apuntes como funciona la funcion, para recuperar el ID de la etiqueta

subImagenes.forEach(elemento => {
  let id = elemento.id[elemento.id.length -1]
  elemento.style.backgroundImage=`url(${zFondos150[id]})`
});


Y

function accion(event){
	console.log(this);
	console.log(" A- Elemento html    Evento -V ");
	console.log(event);
	//recupera el ultimo caracter del id del elemento
  let id = this.id[this.id.length -1]  
  console.log(id);   //  <- OJO el ID empieza en 1 la coleccion en 0 ( id -1)
  imagenPrincipal.style.backgroundImage =`url(${zFondos600[id]})`;
}

 A
 |

(explicacion en apuntesEventos)

*/ 

