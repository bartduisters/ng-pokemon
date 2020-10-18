import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { POKEMONS_MOCK } from './mock-data/pokemon.mock';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-pokemon-ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.POKEMONS).toEqual(POKEMONS_MOCK);
  });

  it('should bind pokemon input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const pokemonDetailEl = fixture.debugElement.query(
      By.css('app-pokemon-detail')
    );

    expect(pokemonDetailEl.properties.pokemon).toEqual(POKEMONS_MOCK[0]);
  });
});
