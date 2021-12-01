//clase
function tvSamsung(n,c,u,p) {
	
	//propiedad
	this.nombre =n;
	this.categoria = c;
	this.unidades = u;
	this.precio = p;
	//metodo
	this.importe = function () {
		return (this.precio * this.unidades);
 	}
}
