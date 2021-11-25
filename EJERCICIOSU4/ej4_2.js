let eInput = document.getElementById("num");
let vNum;





function pintarChecks() {
	//recoge el valor del input
	eInput != null ? vNum = parseInt(eInput.value) : alert(eInput + " no se encontro");
	console.log(vNum + " n ");

	for(let i = 0; i < vNum; i++){
		//crear elementos
		let nCheck = document.createElement("input");
		let nLabel = document.createElement("label");
		let nBr = document.createElement("br");
		let tLabel = document.createTextNode("numero "+i);
		nLabel.appendChild(tLabel );
		//dar attr
		nCheck.setAttribute("type","checkbox");
		//seleccionar al padre
		let eCont = document.getElementById("cont");
		 //añadir hijos
		 eCont.appendChild(nCheck);
		 eCont.appendChild(nLabel);
		 eCont.appendChild(nBr);

	}	
}