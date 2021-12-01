/*----------------------
 	JSON
*/
 	let autor = {
		nombre: "carlos",
		apellidos: "izq",
		edad: "55",
		github: "http://www...",
		nombreJuego:"Hundir La Flota",
		fecha: new Date(1996,11,26),
		lenguaje: "",
		version: "",
		
		infoAutor: function (){
			return `Nombre:${this.nombre} apellidos:${this.apellidos} edad:${this.edad} git:${this.github} juego:${this.nombreJuego} fechaSalida: ${this.fecha} lenguaje:${this.lenguaje} version:${this.version} `;
		}
 	}
	

	let jugador = {
		nombre: "jugador1",
		apellidos: "ap1",
		edad: "05",
		identificador:"xxxxx",
		puntuacion:"x",
		aciertos:"x",
		fallos:"x",

		infoJugador: function (){
			
			return `nombre: ${this.nombre} apellidos:${this.apellidos} id:${this.identificador} puntos:${this.puntuacion} aciertos:${this.aciertos}  fallos:${this.fallos}`;
		}
	}

class Persona{
	constructor(n,a,e){
		this._nombre = n;
		this._apellido = a;
		this._edad = e;
	}
	#especie = "humano";

	get nombre(){
		return this._nombre;
	}

	set nombre(v){
		this._nombre=v;
	}

	get apellido(){
		return this._apellido;
	}

	set apellido(v){
		this._apellido=v;
	}

	get edad(){
		return this._edad;
	}

	set edad(v){
		this._edad=v;
	}

	static saludar(){
		return alert("soy una persona");
	}

	#decirEspecie(){
		return this.#especie;
	}

	mostrarEspecie(){
		return this.#decirEspecie();
	}
	toString(){
		let nombreCompleto = this.nombre +" "+this.apellido;
		return nombreCompleto;
	}

	valueOf(){
		return this.edad;
	}
}

class Autor extends Persona{
	constructor(n,a,e,nJ,l,v){
		super(n,a,e);
		this._nombreJuego=nJ;
		this._lenguaje = l;
		this._version = v;
		this._fecha = new Date();
		this._github = "http://www.github";
	}

	#firma = "sawarma";

	get nombreJuego(){
		return this._nombreJuego;
	}

	set nombreJuego(v){
		this._nombreJuego=v;
	}

	get lenguaje(){
		return this._lenguaje;
	}

	set lenguaje(v){
		this._lenguaje=v;
	}

	get version(){
		return this._version;
	}

	set version(v){
		this._version=v;
	}

	set version(v){
		this._version=v;
	}

	get github(){
		return this._github;
	}

	set github(v){
		this._github=v;
	}

	get fecha(){
		return this._fecha;
	}

	set fecha(v){
		this._fecha=v;
	}

	static hablar(){
		return alert("soy un Autor");
	}

	#saberFirma(){
		alert(this.#firma);
	}

	mostrarFirma(){
		return this.#saberFirma;
	}

	toString(){
		let datos = `nombreJuego ${this.nombreJuego} lenguaje ${this.lenguaje} version${this.version}`;
		return datos;
	}

	valueOf(){
		return this.fecha;
	}

	mostrarInfoAutor(){
			let cadena = `Datos Autor ---- 
			Nombre:${this.nombre} Ap:${this.apellido} 
			Edad${this.edad} Git:${this.github} 
			Nombre del Juego:${this.nombreJuego} Lenguaje:${this.lenguaje} Version:${this.version}`;
			return alert(cadena);
	}

	static completarInfoAutor(){
		let  jug = new Autor("Carlos","Izq",24,"ilJuego","JS","00,1");
		return jug;
	}
}

class Jugador extends Persona{
	constructor(n,a,e){
		super(n,a,e);
		this._puntuacion=0;
		this._aciertos=0;
		this._fallos=0;
		this._identificador ="ID";
	}

	get puntuacion(){
		return this._puntuacion;
	}

	set puntuacion(v){
		this._puntuacion=v;
	}

	get aciertos(){
		return this._aciertos;
	}

	set aciertos(v){
		this._aciertos=v;
	}

	get fallos(){
		return this._fallos;
	}

	set fallos(v){
		this._fallos=v;
	}

	get identificador(){
		return this._identificador;
	}

	set identificador(v){
		this._identificador=v;
	}

	#gamer = "soy un Hamer";

	#seceto(){
		alert(this.#gamer);
	}

	decirSecreto(){
		return this.#seceto;
	}

	static hablar(){
		return alert("soy un Jugador");
	}

	toString(){
		let datos = `identificador${this.identificador} puntuacion ${this.puntuacion} aciertos ${this.aciertos} fallos${this.fallos}`;
		return datos;
	}

	valueOf(){
		return this.puntuacion;
	}

	mostrarInfoJugador(){
			let cadena = `Datos Jugador ---- 
			Nombre:${this.nombre} Ap:${this.apellido} 
			Edad${this.edad} ID:${this.identificador} 
			Puntuacion${this.puntuacion} Aciertos:${this.aciertos} Fallos:${this.fallos}`;
			return alert(cadena);
	}

	static completarInfoJugador(){
		let  jug = new Jugador("Mikael","Edwads",44);
		return jug;
	}
}

var testJ = Jugador.completarInfoJugador();

var testA = Autor.completarInfoAutor();