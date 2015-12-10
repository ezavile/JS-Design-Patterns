/** 
 * ConcreteBUilder | constructs and puts together parts of the product by implementing the Builder interface
*/

import TacoBuilder from './TacoBuilder';

export default class TacoPastor extends TacoBuilder{
	buildTortilla(tipo){
		this.taco.setTortilla(tipo);
	}

	buildSalsa(salsa){
		this.taco.setSalsa(salsa);
	}

	buildRelleno(){
		this.taco.setRelleno('Pastor');
	}

}