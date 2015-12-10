/** 
 * Director | constructs te complex object using the Builder Interface
*/

export default class Cocina {
	constructor(){
		this.tacoBuilder = null;
	}

	tipoTaco(tacoBuilder){
		this.tacoBuilder = tacoBuilder;
	}

	cookTaco(tortilla, salsa){
		this.tacoBuilder.buildTortilla(tortilla);
		this.tacoBuilder.buildSalsa(salsa);
		this.tacoBuilder.buildRelleno();
	}

	getTaco(){
		return this.tacoBuilder.getTaco();
	}
}