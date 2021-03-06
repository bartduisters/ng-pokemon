import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POKEMONS_MOCK } from './mock-data/pokemon.mock';
import { Pokemon } from './models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  selectedPokemon: Pokemon;

  constructor() {}

  getPokemon(): Observable<Array<Pokemon>> {
    return of(POKEMONS_MOCK);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    const pokemon = POKEMONS_MOCK.find((p) => p.id === id);
    return of(pokemon);
  }

  getSelectedPokemon(): Observable<Pokemon> {
    return of(this.selectedPokemon);
  }
  setSelectedPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
