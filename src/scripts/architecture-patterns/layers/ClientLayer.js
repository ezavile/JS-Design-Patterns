import LogicLayer from './LogicLayer';

let logic = new LogicLayer();

export default class ClientLayer{
	constructor(name = 'Edgar'){
		this.name = name;
		this.pokemons = [];
	}

	getPokemons(){
		return logic.getPokemons();
	}

	myPokemons(){
		return 'Hi Edgar you have ' + this.pokemons.length + ' pokemons';
	}

	catchPokemon(number){
		let pokemon;
		if(typeof number !== 'number'){
			console.log('You must put only numbers');
		} else {
			pokemon = logic.catchPokemon(number);
			if(pokemon){
				this.pokemons.push(pokemon);
			}
		}
	}

}