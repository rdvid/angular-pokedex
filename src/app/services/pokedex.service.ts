import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonClass } from 'src/app/interface/pokemon';
import { Observable, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  public pokemons: PokemonClass[] = [];
  public pokemonsUrls: string[] = [];

  constructor(private http: HttpClient) {
    
    this.getPokemonsUrl();
    
  }

  getPokemonsUrl(){
    this.http.get<string[]>(environment.baseUrl)
      .pipe(map((pokemons:any)=> {
        return pokemons['results']
      }))
      .subscribe((pokemonUrls:any[])=>{
        pokemonUrls.forEach(pokemonUrl => this.loadPokemonByUrl(pokemonUrl.url));
        
      }, (err) => {
        console.log(err)
      });
  }

  loadPokemonByUrl(pokemonUrl: string){
    this.http.get<Pokemon>(pokemonUrl)
      .subscribe({
        next: data => {
          let pokemon = new PokemonClass(data)
          this.pokemons.push(pokemon)
        },
        error: err => {
          console.log(err)
        }
      })
  }

  loadPokemons(){
    for(let url of this.pokemonsUrls){
      this.loadPokemonByUrl(url)
    }
  }

  searchPokemon(inputValue: string) {
    const params = new HttpParams().append('pokemon', inputValue)
  }

  searchPokemonByName(name: string){
    let arrayOfPokemonsUrl = [];

    
  }

}
// https://pokeapi.co/api/v2/pokemon-species/?offset=151&limit=151"