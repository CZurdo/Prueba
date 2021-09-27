function suma(num1,num2) {
	let r = parseInt(num1+num2);
	return r;
}

//repasar, saca NAN
let n1 = parseInt(prompt("dime el primer num a sumar"));
let n2 = parseInt(prompt("dime el segundo num a sumar"));

let resultado_suma = suma(n1+n2);

console.log( `el resultado es ${resultado_suma}`);