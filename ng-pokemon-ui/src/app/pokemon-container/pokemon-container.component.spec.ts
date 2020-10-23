import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject } from 'rxjs';
import { routes } from '../app-routing.module';
import { POKEMONS_MOCK } from '../mock-data/pokemon.mock';
import { PokemonService } from '../pokemon.service';
import { PokemonContainerComponent } from './pokemon-container.component';

describe('PokemonContainerComponent', () => {
  let component: PokemonContainerComponent;
  let fixture: ComponentFixture<PokemonContainerComponent>;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
  let router: Router;
  const params$ = new Subject<{ id?: string }>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [PokemonContainerComponent],
      providers: [
        {
          provide: PokemonService,
          useValue: jasmine.createSpyObj('PokemonService', [
            'getPokemon',
            'getPokemonById',
            'getSelectedPokemon',
            'setSelectedPokemon',
          ]),
        },
        {
          provide: ActivatedRoute,
          useValue: { params: params$ },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    pokemonServiceSpy = TestBed.inject(PokemonService) as jasmine.SpyObj<
      PokemonService
    >;
    activatedRouteSpy = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<
      ActivatedRoute
    >;
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonContainerComponent);
    component = fixture.componentInstance;
    pokemonServiceSpy.getPokemon.and.returnValue(of(POKEMONS_MOCK));
    params$.next({}); // Emulates visiting route /pokemon
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should bind POKEMONS`, () => {
    fixture.detectChanges();
    expect(component.POKEMONS).toEqual(POKEMONS_MOCK);
  });

  describe('given no pokémon is selected', () => {
    beforeEach(() => {
      fixture.detectChanges();
      pokemonServiceSpy.getPokemonById.and.returnValue(of(POKEMONS_MOCK[1]));
      params$.next({}); // Emulates visiting route /pokemon/1
      fixture.detectChanges();
    });
    it('should not show details', () => {
      fixture.detectChanges();

      const pokemonDetailEl = fixture.debugElement.query(
        By.css('app-pokemon-detail')
      );

      expect(pokemonDetailEl).toBeNull();
    });

    it('should show the list', () => {
      const pokemonListEl = fixture.debugElement.query(
        By.css('app-pokemon-list')
      );

      expect(pokemonListEl.properties.pokemons).toEqual(POKEMONS_MOCK);
    });

    describe('given a pokémon is clicked in the list', () => {
      it('should navigate to that pokémon', () => {
        spyOn(router, 'navigateByUrl');
        const stubPokemon = POKEMONS_MOCK[1];

        fixture.detectChanges();

        const pokemonListEl = fixture.debugElement.query(
          By.css('app-pokemon-list')
        );
        pokemonListEl.triggerEventHandler('pokemonClick', stubPokemon);

        expect(router.navigateByUrl).toHaveBeenCalledWith(
          `/pokemon/${stubPokemon.id}`
        );
      });
    });
  });

  describe('when a pokémon is selected', () => {
    beforeEach(() => {
      fixture.detectChanges();
      pokemonServiceSpy.getPokemonById.and.returnValue(of(POKEMONS_MOCK[1]));
      params$.next({ id: '1' }); // Emulates visiting route /pokemon/1
      fixture.detectChanges();
    });

    it('should show the details of the selected pokémon', () => {
      const pokemonDetailEl = fixture.debugElement.query(
        By.css('app-pokemon-detail')
      );
      expect(pokemonDetailEl.properties.pokemon).toEqual(
        component.selectedPokemon
      );
    });

    it('should not show the list', () => {
      const pokemonListEl = fixture.debugElement.query(
        By.css('app-pokemon-list')
      );

      expect(pokemonListEl).toBeNull();
    });
  });
});
