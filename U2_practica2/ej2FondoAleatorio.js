//usar math.random()

let r = Math.random()*255;
let v = Math.random()*255;
let a = Math.random()*255;


document.write(`<div id="fondo"` + `style='background-color:rgb(${r},${v},${a}'`+`</div>`);



console.log(r);
console.log(v);
console.log(a);

//document.write(`<div id="fondo"` + `style='background-color:rgb(${r},${v},${a}'`+`</div>`);
/*
window.onload = function(){
	document.getElementById("fondo")
		fondo.style.backgroundColor=`rgb(${r},${v},${a})`;
}*/