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


	/* Crear clase persiona, heredan autor y jugador constructores getter seter 1 metodo estatico 1 metodo    completarInfoAutor rellena la info atomaticamente*/

	class Persona{
		constructor (n,a,e){
			this._nombre = n;
			this._apellido = a;
			this._edad = e;
			
		}
		//propiedad privada
		#dni = "023157771F";

		//getters
		get nombre() {
			return this._nombre;
		}

		get apellido(){
			return this._apellido;
		}

		get edad() {
			return this._edad;
		}

		//setter
		set nombre(valor) {
			this._nombre = valor;
		}

		set apellido(valor){
			this._apellido = valor;
		}

		set edad(valor) {
			this._edad = valor;
		}

		//metodo static
		static saludar(){
			alert("Soy una personita");
		}

		//metodo privado
		#devolverDni(){
			return this.#dni;
		}

		//para usar el met priv
		verDni(){
			return this.#devolverDni();
		}

		//tostring
		toString(){
			return this.nombre;
		}

		//valueof
		valueOf(){
			return this.edad;
		}

		/*
		Creamos un metodo al prototipo Persona

		Persona.prototype.darAnimos=function(){console.log(`venga ${this.nombre} que puedes GaNaR!!!!!`)};
		
		(jugador)
		ramon.darAnimos();
		VM1843:1 venga ramon que puedes GaNaR!!!!!

		(autor)
		pepe.darAnimos()
		venga Joselito que puedes GaNaR!!!!!

		*/
	}

	//AUTORR
	class Autor extends Persona{
		//propiedades del padre y las nuevas
 		constructor(n,a,e,nJ,l,v){
 			//propiedades del padre
 			super(n,a,e);

 			this._github = "http://www...";
			this._nombreJuego =	nJ;	
			this._lenguaje = l;
			this._version = v;
 		}

 		#secretoDeAutor="Soy sexy";

 		//getters
 		get github() {
			return this._github;
		}

		get nombreJuego() {
			return this._nombreJuego;
		}

		get lenguaje() {
			return this._lenguaje;
		}

		get version() {
			return this._version;
		}

		//setters
		set github(valor) {
			this._github = valor;
		}
	
		set nombreJuego(valor) {
			this._nombreJuego = valor;
		}
	
		set lenguaje(valor) {
			this._lenguaje = valor;
		}
	
		set version(valor) {
			this._version = valor;
		}

		static saludar(){
			alert("Soy el autor del juego,contratame!");
		}

		//metodo privado
		#elSecretoDeAutor(){
			return this.#secretoDeAutor;
		}

		//para usar el met priv
		verSecreto(){
			return this.#elSecretoDeAutor();
		}

		//tostring
		toString(){
			return this.nombreJuego;
		}

		//valueof
		valueOf(){
			return this.version;
		}

		mostrarInfoAutor(){
			let cadena = `Datos Autor ---- 
			Nombre:${this.nombre} Ap:${this.apellido} 
			Edad${this.edad} Git:${this.github} 
			Nombre del Juego:${this.nombreJuego} Lenguaje:${this.lenguaje} Version:${this.version}`;
			return alert(cadena);
		}

		//crea directamente un objeto Autor relleno
		static completarInfoAutor(){
			let aut = new Autor("Joselito","Esparto",38,"El Juegaso","JS","V001");
			return aut;
		}
	}


	class Jugador extends Persona{
		//propiedades del padre y las nuevas
 		constructor(n,a,e,i){
 			//propiedades del padre
 			super(n,a,e);

 			this._identificador = i;
			this._puntuacion = 0;	
			this._aciertos = 0;
			this._fallos = 0;
			
 		}

 		#secretoDeJugador="Soy un pro";

 		//getters
 		get identificador() {
			return this._identificador;
		}

		get puntuacion() {
			return this._puntuacion;
		}

		get aciertos() {
			return this._aciertos;
		}

		get fallos() {
			return this._fallos;
		}

		//setters
		set identificador(valor) {
			this._identificador = valor;
		}
	
		set puntuacion(valor) {
			this._puntuacion = valor;
		}
	
		set aciertos(valor) {
			this._aciertos = valor;
		}
	
		set fallos(valor) {
			this._fallos = valor;
		}

		static saludar(){
			alert("Soy el jugador del año!");
		}

		//metodo privado
		#elSecretoDeJugador(){
			return this.#secretoDeJugador;
		}

		//para usar el met priv
		verSecreto(){
			return this.#elSecretoDeJugador();
		}

		//tostring
		toString(){
			return this.identificador;
			//console.log(`id ${jug}`);
		}

		//valueof
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

		//crea directamente un objeto Jugador relleno
		static completarInfoJugador(){
			let jug = new Jugador("Jouseppe","Spaggety",26,"ID0001");
			return jug;
		}

	}

	//testep
	var autorTest = Autor.completarInfoAutor();
	var jugadorTest = Jugador.completarInfoJugador();
