import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { POKEMONS_MOCK } from '../mock-data/pokemon.mock';
import { PokemonService } from '../pokemon.service';
import { PokemonContainerComponent } from './pokemon-container.component';

describe('PokemonContainerComponent', () => {
  let component: PokemonContainerComponent;
  let fixture: ComponentFixture<PokemonContainerComponent>;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonContainerComponent],
      providers: [
        {
          provide: PokemonService,
          useValue: jasmine.createSpyObj('PokemonService', [
            'getPokemon',
            'getSelectedPokemon',
            'setSelectedPokemon',
          ]),
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    pokemonServiceSpy = TestBed.inject(PokemonService) as jasmine.SpyObj<
      PokemonService
    >;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonContainerComponent);
    component = fixture.componentInstance;
    pokemonServiceSpy.getPokemon.and.returnValue(POKEMONS_MOCK);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should bind POKEMONS`, () => {
    expect(component.POKEMONS).toEqual(POKEMONS_MOCK);
  });

  describe('pokemon details', () => {
    describe('when no pokemon is selected', () => {
      it('should not show details', () => {
        fixture.detectChanges();

        const pokemonDetailEl = fixture.debugElement.query(
          By.css('app-pokemon-detail')
        );

        expect(pokemonDetailEl).toBeNull();
      });
    });

    describe('when a pokemon is selected', () => {
      it('should show the details of the selected pokemon', () => {
        component.selectedPokemon = POKEMONS_MOCK[1];
        fixture.detectChanges();

        const pokemonDetailEl = fixture.debugElement.query(
          By.css('app-pokemon-detail')
        );
        expect(pokemonDetailEl.properties.pokemon).toEqual(
          component.selectedPokemon
        );
      });
    });
  });

  describe('pokemon list', () => {
    it('should bind POKEMONS to pokemon list input', () => {
      fixture.detectChanges();

      const pokemonListEl = fixture.debugElement.query(
        By.css('app-pokemon-list')
      );

      expect(pokemonListEl.properties.pokemons).toEqual(POKEMONS_MOCK);
    });

    describe('given a pokemon is clicked', () => {
      it('should set the selected pokemon', () => {
        const stubPokemon = POKEMONS_MOCK[1];
        fixture.detectChanges();

        const pokemonListEl = fixture.debugElement.query(
          By.css('app-pokemon-list')
        );

        pokemonServiceSpy.getSelectedPokemon.and.returnValue(stubPokemon);
        pokemonListEl.triggerEventHandler('pokemonClick', stubPokemon);
        fixture.detectChanges();
        expect(pokemonServiceSpy.setSelectedPokemon).toHaveBeenCalled();
        expect(component.selectedPokemon).toEqual(stubPokemon);
      });
    });
  });
});
