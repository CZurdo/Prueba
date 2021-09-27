function dimeSiElAñoEsBisiesto(año) {
	if(año % 4 == 0 ){
		return 1;
	}
	else{
		return 0;
	}
}
//falta mejorar
let test = dimeSiElAñoEsBisiesto(2200);

console.log(test);