/** 
 * Product | represents the complex object that is being built.
*/
export default class Taco {
	constructor(){
		this.tortilla = '';
		this.salsa = '';
		this.relleno = '';
	}

	setTortilla(tortilla){
		this.tortilla = tortilla;
	}

	setSalsa(salsa){
		this.salsa = salsa;
	}

	setRelleno(relleno){
		this.relleno = relleno;
	}

	getInfo(){
		return 'Taco de ' + this.relleno + ' con tortilla de ' + this.tortilla + ' y con salsa ' + this.salsa;
	}
}
