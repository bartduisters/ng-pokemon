import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonContainerComponent } from './pokemon-container/pokemon-container.component';

export const routes: Routes = [
  { path: 'pokemon', component: PokemonContainerComponent },
  { path: 'pokemon/:id', component: PokemonContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
