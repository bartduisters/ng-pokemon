import { TestBed } from '@angular/core/testing';
import { POKEMONS_MOCK } from './mock-data/pokemon.mock';
import { Pokemon } from './models/pokemon.interface';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPokemon', () => {
    it('should return all pokemon', () => {
      service.getPokemon().subscribe((value) => {
        expect(value).toEqual(POKEMONS_MOCK);
      });
    });
  });

  describe('getSelectedPokemon', () => {
    it('should return the selected pokemon', () => {
      service.selectedPokemon = POKEMONS_MOCK[1];
      service.getSelectedPokemon().subscribe((value) => {
        expect(value).toEqual(service.selectedPokemon);
      });
    });
  });

  describe('setSelectedPokemon', () => {
    it('should set selected pokemon', () => {
      const fakePokemon = {
        id: 69,
        name: 'Fake Pokemon',
      } as Pokemon;
      service.setSelectedPokemon(fakePokemon);
      expect(service.selectedPokemon).toEqual(fakePokemon);
    });
  });

  describe('getPokemonById', () => {
    it('should get the pokemon', () => {
      service.getPokemonById(POKEMONS_MOCK[1].id).subscribe((pokemon) => {
        expect(pokemon).toEqual(POKEMONS_MOCK[1]);
      });
    });
  });
});
