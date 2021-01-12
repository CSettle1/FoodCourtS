var pokemonRepository = (function () {
var pokemonList = [
  {
    name: 'charmander',
    height: '0.6',
    type: 'fire'
    },
    {
  name: 'caterpie',
  height: '0.3',
  type: 'bug'
  },
  {
    name: 'ekans',
    height: '2',
    type: 'poison'
    }
    ];
function getAll() {
  return pokemonList;
}
function add(pokemon) {
  pokemonList.push(pokemon);
}
return {
  getAll: getAll,
  add: add,
};
})();

//console.log(pokemonRepository.getAll() );
pokemonRepository.add({ name: 'item' });
console.log(pokemonRepository.getAll());
