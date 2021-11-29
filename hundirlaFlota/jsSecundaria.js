let coco = window.opener;

let oldMatriz = coco.matrizMapa;

//funcion internete delay
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
 
//funcion asincrona
async function pintar(){
	//dos bucles for para recorrer la matriz cual array bidimensional
	for(let x=0;x<10;x++){
		for(let y=0;y<10;y++){
			if(oldMatriz[x][y]==1){
				let casilla=document.getElementById(`id_${[x]}_${[y]}`);
				await delay(2);
				casilla.style.backgroundColor='red';
			}
			
		}
	}
}

if (oldMatriz != undefined){pintar();}