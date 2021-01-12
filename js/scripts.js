let pokemonsList=
[{name: 'charmander', height: '0.6', type: 'fire'},
{name: 'caterpie', height: '0.3', type: 'bug'},

{name: 'ekans', height: '2', type: 'poison'}]

function myLoopFunction(pokemon) {
  console.log(pokemon.name + " " + pokemon.height + " " + pokemon.type);
}
pokemonsList.forEach(myLoopFunction);
