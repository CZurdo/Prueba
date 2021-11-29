// Código js

const tiposBarcos = new Set(["lanchas" ,"fragatas", "portaAviones"]);

const tamanoBarcos = new Map([["lanchas",1] ,["fragatas",2], ["portaAviones",3]]);

const numeroBarcos = new Map([["lanchas",3] ,["fragatas",2], ["portaAviones",1]]);


function crearMatriz(){
	let matrizMapa = [];

	//rellenar matriz ( mapa para ver que posiciones de la tabla estan ocupadas)
	for(let i= 0 ; i < 10; i++){  
		let col= [0,0,0,0,0,0,0,0,0,0];
		 matrizMapa.push(col)

	}
	return matrizMapa;
}

var matrizMapa = crearMatriz();


//Creo numero de fila del 1 al 10
function numeroAleatorioFila(){
	let numero=parseInt(Math.random() * (7 - 1) + 1);
	return numero;
}

//Creo numero de columna del 1 al 7 para evitar que portaAviones se salga de rango en el tablero
function numeroAleatorioColumna(){
	let numero=parseInt(Math.random() * (8 - 1) + 1);
	return numero;
}

function rellenarColMatriz(){
	for(let i = 0; i < 10; i++){
		for(let y = 0; y < 1; y++){
    		matrizMapa[i][y] = 1;
  		}
	}
}

function rellenarFilaMatriz(){
	for(let i = 0; i < 1; i++){
		for(let y = 0; y < 10; y++){
    		matrizMapa[i][y] = 1;
  		}
	}
}


//Comprueba hueco en la matriz y la edita
function comprobarHueco(tipo,fila,columna){
	let r=false;

	if (tipo == "lanchas"){
		while(r == false){
			//si el hueco en la matrz es 0, mira esa pos la anterior y la siguiente
			if (matrizMapa[fila][columna] == 0 && matrizMapa[fila][columna-1] == 0 && matrizMapa[fila][columna+1] == 0) {
				//ocupalo
				matrizMapa[fila][columna] = 1;
				matrizMapa[fila][columna-1] = 2;
				matrizMapa[fila][columna+1] = 2;
				console.log("pinta lanch en"+fila+" "+columna);
				r = true;
			}else{
				//di cual esta ocupada y genera nuevos nums
				console.log(`${r} fila ${fila} col ${columna}`);
				fila = numeroAleatorioFila();
				columna = numeroAleatorioColumna();
			}

		}

	}
	if(tipo == "fragatas"){

		while(r == false){
	
			let cntLibres = 0;
			//si el hueco en la matrz es 1 genera nuevos
			
			//mira la pos 1 y la anterior
			if (matrizMapa[fila][columna] == 0 && matrizMapa[fila][columna-1] == 0){ 
				if (matrizMapa[fila][columna+1] == 0 && matrizMapa[fila][columna+2] == 0) {

					matrizMapa[fila][columna] = 1;
							matrizMapa[fila][columna+1] = 1;
					matrizMapa[fila][columna+2] = 3;
					matrizMapa[fila][columna-1] = 3;
					console.log(`pinta en ${fila} ${columna}`);
					cntLibres++;
				}
			}
			else{console.log(`ocupado fila ${fila} col ${columna}`);}			
			
			if (cntLibres == 1) {r=true;}
			else{
				fila = numeroAleatorioFila();
				columna = numeroAleatorioColumna();
			}
		}
	} 
	if(tipo == "portaAviones"){

		while (r == false) {
			let cntLibres = 0;
			//si el hueco en la matrz es 1 genera nuevos
			
				//mira la pos 1 y la anterior
				
			if (matrizMapa[fila][columna] == 0 && matrizMapa[fila][columna-1] == 0) {
					if (matrizMapa[fila][columna+1] == 0 && matrizMapa[fila][columna+2] == 0) {
						if (matrizMapa[fila][columna+3] == 0) {

							matrizMapa[fila][columna] = 1;
							matrizMapa[fila][columna+1] = 1;
							matrizMapa[fila][columna+2] = 1;
							matrizMapa[fila][columna-1] = 4;
							matrizMapa[fila][columna+3] = 4;

							cntLibres++;
						}
					}

					console.log(`pinta en ${fila} ${columna}`);	
			}
			else {console.log(`ocupado fila ${fila} col ${columna}`);}
				
			if (cntLibres == 1) {r=true;}
			else {
				fila = numeroAleatorioFila();
				columna = numeroAleatorioColumna();
			}
		}

	}
	//devueve R
	return r;
}

//creamos todos los barcos por funciones.
function crearLancha2(){
	let nuevaLancha = new Map();
	let fila = numeroAleatorioFila();
	let columna = numeroAleatorioColumna();

	//rellena valores del map
	for( let valor of tiposBarcos){
				if(valor == "lanchas"){nuevaLancha.set("tipo",valor);}
	}
	for( const[clave,valor] of tamanoBarcos.entries()){
				if(clave=="lanchas"){nuevaLancha.set("tamano",valor);}
	}
	let comp = comprobarHueco(nuevaLancha.get("tipo"), fila, columna);

	let ocupa = [fila,columna];
	nuevaLancha.set("ocupa",ocupa);

	return nuevaLancha;
}

function crearFragata2(){
	let nuevaFragata = new Map();

	let fila = numeroAleatorioFila();
	let columna = numeroAleatorioColumna();
	
	//rellena valores del map
	for( let valor of tiposBarcos){
				if(valor == "fragatas"){nuevaFragata.set("tipo",valor);}
	}
	for( const[clave,valor] of tamanoBarcos.entries()){
				if(clave== "fragatas"){nuevaFragata.set("tamano",valor);}
	}

	//comprobar pos
	let comp = comprobarHueco(nuevaFragata.get("tipo"), fila, columna);
	
	if (comp) {
		//las posiciones que va ocupar en la tabla
		let ocupa = [fila, columna, fila ,(columna)+1];
		nuevaFragata.set("ocupa",ocupa);
	}
	return nuevaFragata;
}

function crearPortaavion2(){
	let nuevoPortaAvion = new Map();
	let fila = numeroAleatorioFila();
	let columna = numeroAleatorioColumna();
	
	//rellena valores del map
	for( let valor of tiposBarcos){
				if(valor == "portaAviones"){nuevoPortaAvion.set("tipo",valor);}
	}
	for( const[clave,valor] of tamanoBarcos.entries()){
				if(clave=="portaAviones"){nuevoPortaAvion.set("tamano",valor);}
	}

	//comprobar el hueco en la matriz y actualizarla
	let comp = comprobarHueco(nuevoPortaAvion.get("tipo"), fila, columna);


	if (comp) {
		//las posiciones que va ocupar en la tabla
		let ocupa = [fila, columna, fila ,(columna)+1, fila ,(columna)+2];
		nuevoPortaAvion.set("ocupa",ocupa);
	}
	return nuevoPortaAvion;
}


function crearTodo(){
	let final=[];

	for(let i=0;i<3;i++){
		let lancha=crearLancha2();
		final.push(lancha);
	}

	for(let i=0;i<2;i++){
		let fragata=crearFragata2();
		final.push(fragata);
	}
	
	let avion=crearPortaavion2();

	final.push(avion);
	
	return final;
}


//PROBANDO PINTAR EN TABLERO
var test=crearTodo();
//let barco1 = crearLancha();
console.log(test);

//coger posiciones
let posL1 = test[0].get("ocupa");
let posL2 = test[1].get("ocupa");
let posL3 = test[2].get("ocupa");
let posF1 = test[3].get("ocupa");
let posF2 = test[4].get("ocupa");
let posP1 = test[5].get("ocupa");


console.log(matrizMapa);


//pintar una celda
//document.getElementById(`id_${barco1.get("columna")}_${barco1.get("fila")}`).style.backgroundColor='red';


function pintar2(){

	//dos bucles for para recorrer la matriz cual array bidimensional
	for(let x=0;x<10;x++){
		for(let y=0;y<10;y++){

			if(matrizMapa[x][y] == 1){
				let casilla=document.getElementById(`id_${[x]}_${[y]}`);
				casilla.style.backgroundColor='red';
			}
		}

	}

}

function abrirDemo(){
	let vs = window.open("verDemo.html","Demo datos");


}

function abrirInfo(){
	let vs = window.open("propiedadesBarcos.html","Datos Barcos")
}