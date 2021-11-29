let coco = window.opener;
let barcos = coco.test;

//seleccionar elementos de la pagina
let l1 = document.getElementById("lanch1");

let l2 = document.getElementById("lanch2");

let l3 = document.getElementById("lanch3");

let f1 = document.getElementById("frag1");

let f2 = document.getElementById("frag2");

let p1 = document.getElementById("idportas");


let tipol1 = barcos[0].get("tipo");

let planchas = l1.children[0];

//planchas.innerHTML = tipol1;


//test
function mostrarDatos(){
	barcos.forEach(function (e,ind) {
		let cont = 0;
		let tipo="tipo";
		let tamano ="tamano";
		let ocupa = "ocupa";
		let dato1;
		let dato2;
		let dato3;

		if (ind == 0) {
			dato1 = e.get(tipo);
			dato2 = e.get(tamano);
			dato3 = e.get(ocupa);
			l1.children[0].innerHTML=`${tipo}:  ${dato1}`;
			l1.children[1].innerHTML=`${tamano}:  ${dato2}`;
			l1.children[2].innerHTML=`${ocupa}:  ${dato3}`;
		}
		if (ind == 1) {
			dato1 = e.get(tipo);
			dato2 = e.get(tamano);
			dato3 = e.get(ocupa);
			l2.children[0].innerHTML=`${tipo}:  ${dato1}`;
			l2.children[1].innerHTML=`${tamano}:  ${dato2}`;
			l2.children[2].innerHTML=`${ocupa}:  ${dato3}`;
		}
		if (ind == 2) {
			dato1 = e.get(tipo);
			dato2 = e.get(tamano);
			dato3 = e.get(ocupa);
			l3.children[0].innerHTML=`${tipo}:  ${dato1}`;
			l3.children[1].innerHTML=`${tamano}:  ${dato2}`;
			l3.children[2].innerHTML=`${ocupa}:  ${dato3}`;
		}
		if (ind == 3) {
			dato1 = e.get(tipo);
			dato2 = e.get(tamano);
			dato3 = e.get(ocupa);
			f1.children[0].innerHTML=`${tipo}:  ${dato1}`;
			f1.children[1].innerHTML=`${tamano}:  ${dato2}`;
			f1.children[2].innerHTML=`${ocupa}:  ${dato3}`;
		}
		if (ind == 4) {
			dato1 = e.get(tipo);
			dato2 = e.get(tamano);
			dato3 = e.get(ocupa);
			f2.children[0].innerHTML=`${tipo}:  ${dato1}`;
			f2.children[1].innerHTML=`${tamano}:  ${dato2}`;
			f2.children[2].innerHTML=`${ocupa}:  ${dato3}`;
		}
		if (ind == 5) {
			dato1 = e.get(tipo);
			dato2 = e.get(tamano);
			dato3 = e.get(ocupa);
			p1.children[0].innerHTML=`${tipo}:  ${dato1}`;
			p1.children[1].innerHTML=`${tamano}:  ${dato2}`;
			p1.children[2].innerHTML=`${ocupa}:  ${dato3}`;
		}	
	})

}

if (barcos != null) {
	mostrarDatos();
}