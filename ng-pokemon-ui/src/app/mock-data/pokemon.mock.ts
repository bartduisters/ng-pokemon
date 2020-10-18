import { SpriteKeys } from '../models/pokemon.interface';

export const POKEMONS_MOCK = [
  {
    id: 132,
    name: 'ditto',
    sprites: {
      [SpriteKeys.BACK_DEFAULT]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
      [SpriteKeys.BACK_FEMALE]: null,
      [SpriteKeys.BACK_SHINY]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png',
      [SpriteKeys.BACK_SHINY_FEMALE]: null,
      [SpriteKeys.FRONT_DEFAULT]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      [SpriteKeys.FRONT_FEMALE]: null,
      [SpriteKeys.FRONT_SHINY]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png',
      [SpriteKeys.FRONT_SHINY_FEMALE]: null,
    },
  },
  {
    id: 25,
    name: 'pikachu',
    sprites: {
      [SpriteKeys.BACK_DEFAULT]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
      [SpriteKeys.BACK_FEMALE]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
      [SpriteKeys.BACK_SHINY]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
      [SpriteKeys.BACK_SHINY_FEMALE]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
      [SpriteKeys.FRONT_DEFAULT]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      [SpriteKeys.FRONT_FEMALE]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
      [SpriteKeys.FRONT_SHINY]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
      [SpriteKeys.FRONT_SHINY_FEMALE]:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
    },
  },
];
