import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { POKEMONS_MOCK } from '../mock-data/pokemon.mock';
import { SpriteKeys } from '../models/pokemon.interface';
import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  const mockPokemon = POKEMONS_MOCK[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    component.pokemon = mockPokemon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the pokemon', () => {
    const nameEl = fixture.debugElement.query(By.css('h1'))
      .nativeElement as HTMLHeadingElement;
    const idEl = fixture.debugElement.query(By.css('div'))
      .nativeElement as HTMLDivElement;
    const imgEl = fixture.debugElement.query(By.css('img'))
      .nativeElement as HTMLImageElement;

    expect(nameEl.textContent).toContain(mockPokemon.name);
    expect(idEl.textContent).toContain(mockPokemon.id + '');
    expect(imgEl.src).toContain(mockPokemon.sprites[SpriteKeys.FRONT_DEFAULT]);
  });
});
