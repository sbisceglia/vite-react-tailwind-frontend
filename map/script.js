fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    let arrayNombres = [];
    console.log(data.results);
    data.results.forEach((element) => {
      arrayNombres.push(element.name);
    });
    console.log(arrayNombres);
  });

const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();

    const arrayNombres = data.results.map((poke) => poke);
    console.log(arrayNombres);

    const dataResult = data.results;
    dataResult.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();
