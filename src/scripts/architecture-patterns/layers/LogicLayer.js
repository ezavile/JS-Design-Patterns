import DataLayer from './DataLayer';

let data = new DataLayer();

export default class LogicLayer{
	getPokemon(number){
		return data.getPokemon(number);
	}

	getPokemons(){
		let pokemons = data.getPokemons();

		if(pokemons.length === 0){
			console.log("There aren't any pokemons!");
		}

		return pokemons;
	}

	catchPokemon(number){
		let pokemon = this.getPokemon(number);
		if(pokemon.length == 0){
			console.log("Not exist this pokemon");
		} else{
			console.log("You caught to " + pokemon[0].name);
			return pokemon;
		}
	}

}