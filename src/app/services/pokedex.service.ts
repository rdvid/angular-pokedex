import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonClass } from 'src/app/interface/pokemon';
import { Observable, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokedexService{

  public pokemons: PokemonClass[] = [];
  public pokemonsUrls: string[] = [];

  constructor(private http: HttpClient) {
    // let pokemons = localStorage.getItem('pokemons');
    // if(pokemons){
    //   this.pokemons = JSON.parse(pokemons);
    //   console.log(JSON.parse(pokemons))
    // }else{
      this.getPokemonsUrl();
    // }
  }

  getPokemonsUrl(){
    this.http.get<string[]>(environment.baseUrl)
      .pipe(map((pokemons:any)=> {
        return pokemons['results']
      }))
      .subscribe((pokemonUrls:any[])=>{
        pokemonUrls.forEach(pokemonUrl => this.loadPokemonByUrl(pokemonUrl.url));
        // localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
      }, (err) => {
        console.log(err)
      });
  }

  loadPokemonByUrl(pokemonUrl: string){
    this.http.get<Pokemon>(pokemonUrl)
      .subscribe((data) => {
        let pokemon = new PokemonClass(data)
        this.pokemons.push(pokemon)
      }, (err: Error) => {
        console.log(err)
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

}
