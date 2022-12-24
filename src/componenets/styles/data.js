module.exports = {
  id: 132,
  height: 3,
  weight: 40,
  name: "ditto",
  order: 214,
  past_types: [],
  abilities: [
    {
      ability: {
        name: "limber",
        url: "https://pokeapi.co/api/v2/ability/7/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "imposter",
        url: "https://pokeapi.co/api/v2/ability/150/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/",
      },
    },
  ],
  other: {
    dream_world: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
      front_female: null,
    },
    home: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
      front_shiny_female: null,
    },
    "official-artwork": {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    },
  },
};
