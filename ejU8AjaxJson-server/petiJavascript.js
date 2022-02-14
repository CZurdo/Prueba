
let peticionhttp=new XMLHttpRequest();

let boton = document.getElementById("idBoton");

boton.addEventListener('click',cargarAJAX,false);



function cargarAJAX() {  
  
  peticionhttp.addEventListener('readystatechange',cargar,false);
  
  peticionhttp.open('DELETE', 'http://localhost:3000/users/6',true);
 // peticionhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
 //peticionhttp.send(JSON.stringify({ name: "Igor" , location: "Massa"}));
 peticionhttp.send();

};

function cargar() {
     
    let r = document.getElementById("idResultado");
    if (peticionhttp.readyState == 4 && peticionhttp.status == 200) {      
      
      let datosPeticion = peticionhttp.responseText;

      let datosJson = JSON.parse(datosPeticion);

      console.log(datosJson);
      
    } else {
      r.innerHTML = "En proceso";
    }
}
