/** 
 * AbstractBuilder | specifies an abstract interface for creating parts of a Product object
*/

import Taco from './Taco';

export default class TacoBuilder {
	constructor(){
		this.taco = new Taco();
	}

	getTaco(){
		return this.taco;
	}
}
