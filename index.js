function buscarPokemon() {
    const inputpokemon = document.getElementById("input_pokemon");
    const nomepokemon = inputpokemon.value;
    console.log("buscando pokemon " + nomepokemon);
    fetch("https://pokeapi.co/api/v2/pokemon/ditto" + nomepokemon)
      .then((resposta) => {
        return resposta.json();
    })
    .then((json) => {
      console.log(json);
      const inputpokemon = document.getElementById("input_pokemon");
      inputpokemon.value = json.Pokemon;

    });
}

function configurarEventos() {
    const inputpokemon = document.getElementById("input_pokemon");
    inputpokemon.addEventListener("click", buscarPokemon);
  
   }
  
  window.addEventListener("load", configurarEventos);