import { Component } from '@angular/core';
import { POKEMONS_MOCK } from './mock-data/pokemon.mock';
import { Pokemon } from './models/pokemon.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  POKEMONS = POKEMONS_MOCK;
  selectedPokemon = null;

  pokemonClicked(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
