
class productos{
	constructor (n,c,u,p){
		//atributos
		this._nombre = n;
		this._categoria = c;
		this._unidades = u;
		this._precio= p;
	}
	//getters nombre
	get nombre() {
		return this._nombre;
	}
	//setters nombre
	set nombre(valor) {
		this._nombre = valor;
	}

	//getters categoria
	get categoria() {
		return this._categoria;
	}
	//setters categoria
	set categoria(valor) {
		this._categoria = valor;
	}
	//getters _unidades
	get unidades() {
		return this._unidades;
	}
	//setters _unidades
	set unidades(valor) {
		this._unidades = valor;
	}
	//getters _precio
	get precio() {
		return this._precio;
	}
	//setters precio
	set precio(valor) {
		this._precio = valor;
	}


	importe () {
		return (this.precio * this.unidades);
 	}

 	getInfo(){
 		return `Nombre: ${this.nombre} (categoría: ${this.categoria}) : unidades ${this.unidades} uds x precio ${this.precio}€ = importe = ${this.importe()}  €`;
 	}
}