//url   3000/user/?nombre=Miguel

let peticionhttp=new XMLHttpRequest();

let boton = document.getElementById("idBoton");

boton.addEventListener('click',cargarAJAX,false);



function cargarAJAX() {  
  let usuarioMetido = document.getElementById("idUsuario").value;
  peticionhttp.addEventListener('load',comprobarUsuario,false);
  
  peticionhttp.open('GET', 'http://localhost:3000/usuarios?nombre='+ usuarioMetido ,true);
 // peticionhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
 //peticionhttp.send(JSON.stringify({ name: "Igor" , location: "Massa"}));
 peticionhttp.send();

 event.preventDefault();


};

function comprobarUsuario() {
     
    let r = document.getElementById("idResultado");


    let usuarioMetido = document.getElementById("idUsuario").value;
    console.log(usuarioMetido);
    if (peticionhttp.readyState == 4 && peticionhttp.status == 200) {      
      
      let datosPeticion = peticionhttp.responseText;

      let datosJson = JSON.parse(datosPeticion);

      console.log(datosJson);
      if (datosJson.length == 0) {
      	alert("no esta el usuario");
      }else{
      	alert(" el num de usuarios con ese nombre es"+ datosJson.length );
      }

     /*
      for(datos of datosJson){
      	if(datos.nombre == usuarioMetido){alert("si esta"); break}
      	else{alert("no esta");     break  	}
      } */
    } else {
      r.innerHTML = "En proceso";
    }
}
