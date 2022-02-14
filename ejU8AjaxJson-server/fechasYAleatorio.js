let peticionhttp=new XMLHttpRequest();

let boton = document.getElementById("idBoton");

boton.addEventListener('click',cargarAJAXFecha,false);

let botonRamdon = document.getElementById("idBoton2");

botonRamdon.addEventListener('click',cargarAJAXRand,false);

//peticion a 2 archivos de servidor, (date y ramdon) solo puede haber levantado a la vez 1, por lo que si se hace una peti al que no lo esta (retorna 404) hay que indicarlo


function cargarAJAXFecha() {  
  
  peticionhttp.addEventListener('load',cargarHora,false);
  
  peticionhttp.open('GET', 'http://localhost:3000/fecha',true);

  peticionhttp.send();

};

function cargarAJAXRand() {  
  
  peticionhttp.addEventListener('load',cargarRand,false);
  
  peticionhttp.open('GET', 'http://localhost:3000/votos',true);
 
  peticionhttp.send();

};

function cargarHora() {
     
    let r = document.getElementById("idFecha");
    if (peticionhttp.readyState == 4 && peticionhttp.status == 200) {      
      
      let datosPeticion = peticionhttp.responseText;

      let datosJson = JSON.parse(datosPeticion);

      console.log(datosJson);
      
      let fechiToda = datosJson[0].valor;

      let fechiGood = fechiToda.substring(0,19);

      
      console.log(fechiToda);

      let objFecha = new Date(fechiGood);

      console.log(objFecha);

      r.innerHTML=objFecha.getHours()+ " : "+objFecha.getMinutes()+ " : "+objFecha.getSeconds();
      
    }else if (peticionhttp.status == 404) {
      alert("servidor Rand No disponible")
    }
    else {
      r.innerHTML = "En proceso";
    }
}

function cargarRand() {
     
    let r = document.getElementById("idRand");
    if (peticionhttp.readyState == 4 && peticionhttp.status == 200) {      
      
      let datosPeticion = peticionhttp.responseText;

      let datosJson = JSON.parse(datosPeticion);

      console.log(datosJson);

      r.innerHTML=datosJson[0].numero;
      
    }else if(peticionhttp.status == 404){
      alert("servidor Fechas No disponible");
    } else {
      r.innerHTML = "En proceso";
    }
    
}