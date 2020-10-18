import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { POKEMONS_MOCK } from '../mock-data/pokemon.mock';
import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when there are pokemons', () => {
    it('should render list items', () => {
      component.pokemons = POKEMONS_MOCK;
      fixture.detectChanges();

      const liEls = fixture.debugElement.queryAll(By.css('li'));
      expect(liEls.length).toEqual(2);
    });

    describe('given a pokemon is clicked', () => {
      it('should emit the pokemon', () => {
        spyOn(component.pokemonClick, 'emit');
        component.pokemons = POKEMONS_MOCK;
        fixture.detectChanges();

        const liEls = fixture.debugElement.query(By.css('li'));
        liEls.triggerEventHandler('click', {});
        expect(component.pokemonClick.emit).toHaveBeenCalledWith(
          POKEMONS_MOCK[0]
        );
      });
    });
  });
});
