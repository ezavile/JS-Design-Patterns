import ClientLayer from './ClientLayer';

let client = new ClientLayer();

console.log('Get All Pokemons');
console.log(client.getPokemons());

console.log('Get My Pokemons');
console.log(client.myPokemons());

console.log('Catch Pokemon');
client.catchPokemon(2);

console.log('Get My Pokemons');
console.log(client.myPokemons());


console.log('Catch Pokemon');
client.catchPokemon(2000);

console.log('Get My Pokemons');
console.log(client.myPokemons());