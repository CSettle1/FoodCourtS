let pokemonsList= [{name: 'charmander', height: '0.6', type: 'fire'},
{name: 'caterpie', height: '0.3', type: 'bug'},
{name: 'ekans', height: '2', type: 'poison'}]


for (let i = 0; i < pokemonsList.length; i++) {
  if (pokemonsList[i].height > 1) {
    document.write( '<p>' +
      pokemonsList[i].name + "" + " (height: " + pokemonsList[i].height + ") " +
        " -Wow, that's big! "
    );
  } else {
   document.write( '</p>' +
      pokemonsList[i].name +
        "" +
        " (height: " +
        pokemonsList[i].height +
        ")"
    );
  }
}
