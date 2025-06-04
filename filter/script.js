const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();

    const arrayNom = data.results.filter(poke => poke.name !== 'bulbasaur');
    console.log(arrayNom);

  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();
