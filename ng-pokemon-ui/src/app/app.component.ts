import { Component } from '@angular/core';
import { POKEMONS_MOCK } from './mock-data/pokemon.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  POKEMONS = POKEMONS_MOCK;
}
