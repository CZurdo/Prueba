
let bola = document.querySelector("#bola");

let papeleraVacia = document.querySelector("#vacia");

bola.addEventListener("mousedown",tirarBola);

papeleraVacia.addEventListener("mouseenter",tirarBola);

function tirarBola(event){
	if(event.type == "mousedown"){
		console.log(event.type);
		console.log("se pulso la bola");

		//coordenadas del raton
		let shiftX = event.clientX - bola.getBoundingClientRect().left;

  		let shiftY = event.clientY - bola.getBoundingClientRect().top;

  		console.log(shiftX + " la x " + shiftY + " la Y");

  		//cambiar position del elemento
  		bola.style.position = "absolute";
  		bola.style.zIndex = 1000;
  		document.body.append(bola);

  		//console.log(event.pageX + " la x page " + event.pageY + " la Y page");
  		//f para cambiar la pos absoluta de la bola, moverla a las coordenadas(pageX,pageY)
  		function moverA(pageX,pageY){
  			bola.style.left = pageX - shiftX + "px";
  			bola.style.top = pageY - shiftY + "px";
  		}

  		moverA(event.pageX,event.pageY);

  		function cuandoMueveRaton (event) {
  			moverA(event.pageX,event.pageY);
  		}
  		//mueve la bola con mousemove
  		document.addEventListener("mousemove",cuandoMueveRaton);

  		//parra soltarla, eliminar manejador
  		bola.onmouseup = function (){
  			document.removeEventListener("mousemove",cuandoMueveRaton);
  			bola.onmouseup = null;
  		}
	}
	if(event.type == "mouseenter"){
		console.log(event.type);
		console.log("entro el raton");
	}
}
//sin esto no la suelta
bola.ondragstart = function() {
  return false;
};