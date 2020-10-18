import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [AppComponent, PokemonDetailComponent, PokemonListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
