import { Injectable } from '@angular/core';
import { POKEMONS_MOCK } from './mock-data/pokemon.mock';
import { Pokemon } from './models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  selectedPokemon: Pokemon;

  constructor() {}

  getPokemon(): Array<Pokemon> {
    return POKEMONS_MOCK;
  }

  getSelectedPokemon(): Pokemon {
    return this.selectedPokemon;
  }
  setSelectedPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
