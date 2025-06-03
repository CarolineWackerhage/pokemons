function buscarPokemon() {
    console.log("buscarPokemon")
    const inputpokemon = document.getElementById("input_pokemon");
    const nomepokemon = inputpokemon.value;
    console.log("buscando pokemon " + nomepokemon);
    fetch("https://pokeapi.co/api/v2/pokemon/" + nomepokemon)
      .then((resposta) => {
        return resposta.json();
    })
    .then((json) => {
      console.log(json);

      const altura = document.getElementById ("altura")
      altura.innerText = "A altura é: " + json.height;

      const peso = document.getElementById ("peso")
      peso.innerHTML = "O peso é: " + json.weight;

      const imagem = document.getElementById ("imagem")
      imagem.src = json.sprites.other.dream_world.front_default;
    });
}

function configurarEventos() {

    const inputpokemon = document.getElementById("botao_buscar");
    inputpokemon.addEventListener("click", buscarPokemon);
  
   }
  
  window.addEventListener("load", configurarEventos);