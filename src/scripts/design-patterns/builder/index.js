/** 
 * Test builder pattern
*/

import Cocina from './Cocina';
import TacoBuilder from './TacoBuilder';
import TacoPastor from './TacoPastor';

var cocina = new Cocina();
var pastor = new TacoPastor();

cocina.tipoTaco(pastor);
cocina.cookTaco('Harina','Verde');

var taco = cocina.getTaco();

console.log('----------- Builder Pattern ------------');
console.log(taco.getInfo());