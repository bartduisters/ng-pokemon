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

  it(`should bind POKEMONS`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.POKEMONS).toEqual(POKEMONS_MOCK);
  });

  describe('pokemon details', () => {
    describe('when no pokemon is selected', () => {
      it('should not show details', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const pokemonDetailEl = fixture.debugElement.query(
          By.css('app-pokemon-detail')
        );

        expect(pokemonDetailEl).toBeNull();
      });
    });

    describe('when a pokemon is selected', () => {
      it('should show the details of the selected pokemon', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        app.selectedPokemon = POKEMONS_MOCK[1];
        fixture.detectChanges();

        const pokemonDetailEl = fixture.debugElement.query(
          By.css('app-pokemon-detail')
        );

        expect(pokemonDetailEl.properties.pokemon).toEqual(POKEMONS_MOCK[1]);
      });
    });
  });

  describe('pokemon list', () => {
    it('should bind POKEMONS to pokemon list input', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      const pokemonListEl = fixture.debugElement.query(
        By.css('app-pokemon-list')
      );

      expect(pokemonListEl.properties.pokemons).toEqual(POKEMONS_MOCK);
    });

    describe('given a pokemon is clicked', () => {
      it('should set the selected pokemon', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        fixture.detectChanges();

        const pokemonListEl = fixture.debugElement.query(
          By.css('app-pokemon-list')
        );

        pokemonListEl.triggerEventHandler('pokemonClick', POKEMONS_MOCK[1]);
        fixture.detectChanges();
        expect(app.selectedPokemon).toEqual(POKEMONS_MOCK[1]);
      });
    });
  });
});
