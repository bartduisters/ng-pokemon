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
  selectedPokemon = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.POKEMONS = this.pokemonService.getPokemon();
  }

  pokemonClicked(pokemon: Pokemon): void {
    this.pokemonService.setSelectedPokemon(pokemon);
    this.selectedPokemon = this.pokemonService.getSelectedPokemon();
  }
}
