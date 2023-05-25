import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService{

  public pokemons = [];

  constructor() { }

  loadPokemons(){
    // do load pokemons function
  }

}
