import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.css'],
})
export class PokemonContainerComponent implements OnInit {
  POKEMONS: Array<Pokemon>;
  selectedPokemon: Pokemon = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemon()
      .subscribe((value) => (this.POKEMONS = value));
  }

  pokemonClicked(pokemon: Pokemon): void {
    this.pokemonService.setSelectedPokemon(pokemon);
    this.pokemonService
      .getSelectedPokemon()
      .subscribe((value) => (this.selectedPokemon = value));
  }
}
