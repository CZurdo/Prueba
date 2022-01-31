
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar, false);
let formulario=document.forms["idFormulario"];

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/
function validar(e){
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName
  /* formulario.elements["idNombre"].className = "";
   formulario.elements["idEdad"].className = "";
   formulario.elements["idMatricula"].className = "";
   formulario.elements["idProvincia"].className = "";
   */
   for (let i = 0; i < formulario.elements.length; i++) {
       formulario.elements[i].className = "";
   }
   
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Spam de error
   /*
    document.getElementById('idNombreError').innerHTML="";
    document.getElementById('idEdadError').innerHTML="";
    document.getElementById('idMatriculaError').innerHTML="";
    document.getElementById('idProvinciaError').innerHTML="";*/

    //foreach
    document.querySelectorAll(".errorSpam").forEach(e =>{
        e.innerHTML="";
    });

   // IMPORTANTE!!! Deshabilitamos el botón
   this.disabled = true;

    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){

        return true;

    }else{
        e.preventDefault();
        //volver a habilitar el boton
        this.disabled = false;
        return false  
    }
}


/********************************************************************************************
 *******************************************************************************************
 *************** FUNCIÓN PARA VALIDAR DE FORMA MANUAL MEDIANTE JAVASCRIPT
 *******************************************************************************************
 *******************************************************************************************/
function validarJS(eventopordefecto) {
    
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombre() && validarEdad() && validarMatricula() && validarProvincia();             
}
/****************************************************************************
 * FUNCIÓN INDIVIDUALES DE CADA CAMPO
 /***************************************************************************/

function validarNombre() {
    let inputNombre= formulario.elements["idNombre"];

    if (inputNombre.value == ""){        
        formulario.elements["idNombre"].className = "error";
        formulario.elements["idNombre"].focus();
        document.getElementById('idNombreError').innerHTML="El campo: " + formulario.elements["idNombre"].name + " no puede estar en blanco";
        
        return false
    }
    return true
}

/***************************************************************************/
/***************************************************************************/

function validarEdad() {
 
    let inputEdad=formulario.elements["idEdad"]
    
    // IMPORTANTE!! Realizar la validación de la edad mediante javascript.(de 10 a 90 años)
    
    if(inputEdad.value < 0 || inputEdad.value > 100){
        formulario.elements["idEdad"].className="error";
        formulario.elements["idEdad"].focus();
        document.getElementById('idEdadError').innerHTML="El campo: " + formulario.elements["idEdad"].name + " debe estar entre 0 y 100 años";
        return false;
    }
    return true;
}
  
/***************************************************************************/
/***************************************************************************/

function validarMatricula() {
    
    let inputMatricula=formulario.elements["idMatricula"];
    let regExpMatricula=/^[0-9]{4}[BCDFGHKLMNPRSTVWXYZ]{3}/g;

    // IMPORTANTE!! Realizar la validación de la matrícula mediante javascript y utilizando expresiones regulares

    if(inputMatricula.value == "" || regExpMatricula.test(inputMatricula.value) == false){

        formulario.elements["idMatricula"].className="error";
        formulario.elements["idMatricula"].focus();
        document.getElementById('idMatriculaError').innerHTML="El campo: " + formulario.elements["idMatricula"].name + " debe tener formato (1111SSS) o esta vacio";
        return false;
    }
    return true;
}

/***************************************************************************/
/***************************************************************************/

function validarProvincia() {
    let selectProvincia=formulario.elements["idProvincia"];
    const valoresProvincia = new Set(["Gr","Ma"]);
   
    // IMPORTANTE!! Realizar la validación de la provincia mediante javascript   
    if (valoresProvincia.has(selectProvincia.value) == false ) {
        formulario.elements["idProvincia"].className="error";
        formulario.elements["idProvincia"].focus();
        document.getElementById('idProvinciaError').innerHTML="El campo: " + formulario.elements["idProvincia"].name + "Tiene que ser uno de la lista";
        return false;
    }

    return true;
}


/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/

function validarAPIHTML(eventopordefecto) { 
    //usar mensaje personalizado de error, setCustomValidity, y limpiar el error personalizado
  
   return(validarNombreHtml() && validarEdadHtml() && validarMatriculaHtml() && validarProvinciaHtml())
}
//***************************************************************************//
function validarNombreHtml(){
    let inputTexto = document.getElementById("idNombre");

     if ( (inputTexto.checkValidity()) == false) {
    
        if (inputTexto.validity.valueMissing) {
            inputTexto.setCustomValidity(" ZyH este campo es requerido ");
        }else{
            inputTexto.setCustomValidity("");
        }
        //rellena el campo error con el mensaje de error
         document.getElementById("idNombreError").innerHTML = inputTexto.validationMessage;
         return false;
    }
     else{
        return true;
    }
}
//***************************************************************************//
function validarEdadHtml(){
    let inputEdad = document.getElementById("idEdad");
    if ( (inputEdad.checkValidity()) == false) {
         if ( inputEdad.validity.rangeUnderflow || inputEdad.validity.rangeOverflow) {
            inputEdad.setCustomValidity(" ZyH el rango de edad no coincide 0 - 100");   
        }
        else{
            inputEdad.setCustomValidity("");
        }
        document.getElementById("idEdadError").innerHTML = inputEdad.validationMessage;
        return false;
    }
     else{
        return true;
    }
}
//***************************************************************************//
function validarMatriculaHtml(){
        let inputMatricula = document.getElementById("idMatricula");

    if((inputMatricula.checkValidity()) == false){
        if( inputMatricula.validity.patternMismatch){
            inputMatricula.setCustomValidity(" ZyH el patron no coincide 1111TTT");
        }
        else{
            inputMatricula.setCustomValidity("");
        }
        document.getElementById("idMatriculaError").innerHTML = inputMatricula.validationMessage;
        return false;
    }
     else{
        return true;
    }
}
//***************************************************************************//
function validarProvinciaHtml(){
    let inputProvincia = document.getElementById("idProvincia");
    if(inputProvincia.checkValidity() == false){
        if (inputProvincia.valueMissing) {
            inputProvincia.setCustomValidity(" ZyH el campo es obligatorio ");     
        }
        else{
            inputProvincia.setCustomValidity("");
        }
        document.getElementById("idProvinciaError").innerHTML = inputProvincia.validationMessage;
        return false;
    }
     else{
        return true;
    }

}