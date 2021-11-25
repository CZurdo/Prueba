	//seleccionar el elemento
	let h1 = document.getElementById("titulo");
	//let test = document.getElementsByTagName("h1");
	let texto = h1.innerHTML;

	function cambiaColor() {
		if (h1.hasAttribute("style") == false) {
			//crear color
			let r = parseInt(Math.random()*256);
			let g = parseInt(Math.random()*256);
			let b = parseInt(Math.random()*256);

			//comprobar atributos del e
			console.log(h1.attributes);

			//añadir nuevo atributo
			h1.setAttribute("style",`color:rgb(${r},${g},${b})`);
		}else{
			h1.removeAttribute("style");
		}
	}

	function cambiaTamano() {
		if (h1.hasAttribute("style") == false) {
			let nAl = parseInt(Math.random()*5);
			//tamaño
			let tamano = `${nAl}em`;

			//comprobar atributos del e
			console.log(h1.attributes);

			//añadir nuevo atributo
			//h1.setAttribute("style",`fontSize:${tamano}`); forma nueva
			h1.setAttribute('style','fontSize:2000px'); 
			//h1.style.fontSize=tamano;

			//comprobar atributos del e
			console.log(h1.attributes);
		}else{
			h1.removeAttribute("style");
		}
	}
