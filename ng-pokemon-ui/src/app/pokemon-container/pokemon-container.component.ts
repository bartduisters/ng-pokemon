import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.css'],
})
export class PokemonContainerComponent implements OnInit, OnDestroy {
  POKEMONS: Array<Pokemon>;
  selectedPokemon: Pokemon = null;
  id: number;
  destroy$ = new Subject();

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (+params.id >= 0) {
        this.pokemonService.getPokemonById(+params.id).subscribe((pokemon) => {
          this.selectedPokemon = pokemon;
        });
      }
    });

    this.pokemonService
      .getPokemon()
      .pipe(take(1))
      .subscribe((value) => (this.POKEMONS = value));
  }

  pokemonClicked(pokemon: Pokemon): void {
    this.router.navigateByUrl(`/pokemon/${pokemon.id}`);
  }
}
