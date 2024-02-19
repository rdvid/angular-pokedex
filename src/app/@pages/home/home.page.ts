import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from 'src/app/interface/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public pokedexService: PokedexService) {}

  ngOnInit() {
    this.pokedexService.loadPokemons();
  }

  handleTextChange(e: any){
   this.pokedexService.searchPokemonByName(e.target.value)
  }

}
