
let miDiv = document.getElementById("papaDiv");

//sacamos numero de hijos
let cuantosHijos = miDiv.childNodes.length;

//foreach  e.nodeName
miDiv.childNodes.forEach (function(e){document.getElementById("tipo").innerHTML+=e.nodeName;});


function mostrarNumero(){
let elemento = document.getElementById(`numHijos`).innerHTML=cuantosHijos;

return elemento;
}