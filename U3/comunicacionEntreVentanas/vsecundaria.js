//cada vez que accede aumenta el cont del padre
window.opener.cont++;

//crear variables con los valores que pasa el formulario del padre
let nombre = window.opener.document.getElementById("idNombre").value;
let ape = window.opener.document.getElementById("idApellido").value;
let edad = window.opener.document.getElementById("idEdad").value;

//rellenar campos de secundario
document.getElementById("valorNombre").innerHTML = nombre;
document.getElementById("valorApellido").innerHTML = ape;
document.getElementById("valorEdad").innerHTML = edad;

// mostrar en secundario como va el contador
document.getElementById("valorContador").innerHTML=window.opener.cont;

//rellenar los datos del formulario principal mediante un prompt, en el secundario
let valorCalle = prompt("Dime los datos de la Calle");
//window.opener.document.getElementById("idCalle").innerHTML = valorCalle;