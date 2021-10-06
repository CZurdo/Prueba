let num = prompt("Dame un num");

//typeof dice que tipo tiene la variable
//isNaN()  determina cuando el valor es NaN o no     Number(valor) son convertir un string u otro valor a uno de tipo numérico cambiar valor a numerico
if(isNaN(Number(num))){alert("NO es un num");}
else{alert("SI es un numero");}
console.log(typeof(num));

/* 
if(typeof(num) !== 'number'){alert("NO es un num");}
else{alert("SI es un numero");}
console.log(typeof(num));
*/