import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  @Input() pokemons: Array<Pokemon> = [];
  @Output() pokemonClick = new EventEmitter<Pokemon>();

  pokemonClicked(pokemon: Pokemon): void {
    this.pokemonClick.emit(pokemon);
  }
}
