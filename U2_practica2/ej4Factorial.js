let n = parseInt(prompt("Dame un numero entero y positivo mayor a 1"));

//mientras que n sea null O sea NaN O sea menor o = a 1, Pide n y muestra error
while(n === null || isNaN(n) || n <= 1){
	alert("Error: datos incorrectos");
	n = parseInt(prompt("Dame un numero entero y positivo mayor a 1"));
}

//calcular el factorial de n
function fFactorial (n){
	let f;
	let guarda;
	for (var i = 2; i <= n; i++) {
		// i mayor a 2
		if(i > 2){
			//ej: guarda = 2 * 3 
			guarda = guarda * i;
			//for(let i=1; i < (num+1); i++)res*=i;
		}else{guarda = 1 * i;}
		f = guarda;
	}
	return f;
}
//f anonima
let fAnoFactorial = function (n){
	let f;
	let guarda;
	for (var i = 2; i <= n; i++) {
		if(i > 2){guarda = guarda * i;}
		else{guarda = 1 * i;}
		f = guarda;
	}
	return f;
}
//f flecha
let fFlechaFactorial = n =>{
	let f;
	let guarda;
	for (var i = 2; i <= n; i++) {
		//operador ternario condición ? expr1 : expr2 
		i > 2 ? guarda = guarda * i : guarda = 1 * i;
		f = guarda;
	}
	return f;
}

let res = fFlechaFactorial(n);

//alert(`el factorial de ${n} es ${res}`);

window.onload = function(){
	document.write(`<div id='resultado'` + `style= 'border:3px solid red; font-size:1.5em; top:50%; left:45%; position:fixed;'>`+ `Resultado: el factorial de ${n} es ${res}` + `</div>`);
}

console.log(n);