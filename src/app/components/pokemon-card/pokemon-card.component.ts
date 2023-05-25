import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {

  constructor(private pokedex: PokedexService) { }

  ngOnInit() {}

}
