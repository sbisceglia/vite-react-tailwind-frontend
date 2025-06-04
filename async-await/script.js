const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);

    const dataResult = data.results;
    dataResult.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
