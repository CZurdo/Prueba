let peticionhttp=new XMLHttpRequest();

let boton = document.getElementById("idBoton");

boton.addEventListener('click',cargarAJAX,false);

let botonVotar = document.getElementById("idBoton2");

botonVotar.addEventListener('click',sumarVotos,false);

function cargarAJAX() {  
  
  peticionhttp.addEventListener('load',cargarVotos,false);
  
  peticionhttp.open('GET', 'http://localhost:3000/votos',true);
 // peticionhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
 //peticionhttp.send(JSON.stringify({ name: "Igor" , location: "Massa"}));
 peticionhttp.send();

};

function cargarVotos() {
     
    let r = document.getElementById("idResultado");
    if (peticionhttp.readyState == 4 && peticionhttp.status == 200) {      
      
      let datosPeticion = peticionhttp.responseText;

      let datosJson = JSON.parse(datosPeticion);

      console.log(datosJson);

      r.innerHTML=datosJson[0].numero;
      
    } else {
      r.innerHTML = "En proceso";
    }
}

/*
//cuando el archivo que tiene el json es un .js (como en este ramdon.js) no se puede editar la db generada, solo consultarla
function mandarVotos() {  
  let nVotos = document.getElementById("idResultado").innerHTML;
  let datosPeticion = peticionhttp.responseText;

  let datosJson = JSON.parse(datosPeticion);

  peticionhttp.addEventListener('load',cargarVotos,false);
  
  peticionhttp.open('PATCH', 'http://localhost:3000/votos/1',true);
  peticionhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  peticionhttp.send(JSON.stringify({numero: `${nVotos}`}));


};*/


function sumarVotos() {
     
    let r = document.getElementById("idResultado");
    let numVoto = parseInt(r.innerHTML);

    r.innerHTML=numVoto+1;
}