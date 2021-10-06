//esta f crea una cadena aleatoria para dar color a un elemento html de forma aleatoria, los 3 valores son random
let cAleatorio = function (){
	let r = Math.random()*255;
	let v = Math.random()*255;
	let a = Math.random()*255;
	let color = `rgb(${r},${v},${a})`;
	return color;
}


let pTopAleatoria = function (){
	let top = Math.random()*1000;
	top = parseInt(top);
	return top;
}

let pLeftAleatoria = function (){
	let left = Math.random()*1000;
	left = parseInt(left);
	return left;
}

//f que crea un elemento div en la pagina, con un color posicionamiento y nombre
let creaDiv = function(nombre,color,top,left){
	//cuidado con las comillas del style 
	document.write(`<div id='${nombre}'` +  `style='background-color:${color}; top:${top}; left:${left}; width:50px; height:50px; position:fixed'>`+`</div>`);
}

window.onload = function(){
	for (var i = 0; i < 1999; i++) {
		let c = cAleatorio();
		let t = pTopAleatoria();
		let l = pLeftAleatoria();
		let d = creaDiv(i,c,l,t);
	}

}


//document.write(`<div id="2"` +  `style='background-color:rgb(100,50,200); top:200; left:100; width:50px; height:50px; position:fixed'>`+`</div>`);
