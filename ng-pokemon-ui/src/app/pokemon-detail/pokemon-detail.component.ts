import { Component, Input } from '@angular/core';
import { Pokemon, SpriteKeys } from '../models/pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent {
  @Input() pokemon: Pokemon;

  SpriteKeys = SpriteKeys;
}
