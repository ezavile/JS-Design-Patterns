import Pokemons from './db-pokemons';

export default class DataLayer{
	constructor(){
		this.pokemons = Pokemons;
	}

	getPokemons(){
		return this.pokemons;
	}

	getPokemon(number){
		let pokemon = this.pokemons.filter((p) => {
			return (p.number === number)
		});

		return pokemon;
	}
}