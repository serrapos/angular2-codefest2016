/* tslint:disable */

import { Component } from '@angular/core';
import { PokedexService } from './service/pokedex.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  pokemons: Pokemon[] = [];
  isLoading: boolean = false;
  error: boolean = false;
  //filterText : string;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;

    this.pokedexService.getPokemon(this.pokemons.length, 100)
      .then(pokemons => {
        pokemons = pokemons.map(p => {
          p.imageLoaded = false;
          return p;
        });
        this.pokemons = this.pokemons.concat(pokemons);
        this.isLoading = false;
        this.error = false;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  }
}
