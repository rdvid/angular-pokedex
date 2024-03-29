import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { ModalController } from '@ionic/angular';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal/pokemon-modal.component';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonId: string = '';
  @Input() pokemonName: string = '';
  @Input() pokemonImage: string = '';
  @Input() pokemonTypes: string = '';
  pokemonTypesArray: string[] = [];

  constructor(
    private pokedex: PokedexService, 
    private modalCtrl: ModalController
  ) { }
  
  ngOnInit() {
    this.pokemonTypesArray = this.pokemonTypes.split(',');
  }

  getTypeChipColor(type:string){
    return `var(--${type}-color)`
  }

  async openModal(){
    console.log(this.pokemonId)
    let pokemon = this.pokedex.pokemons.find((pokemon) => {
        return pokemon.id === Number(this.pokemonId);
    });
    
    if(!pokemon){
      throw Error('unable to keep going')
    }

    const modal = await this.modalCtrl.create({
      component: PokemonModalComponent,
      componentProps: {
        pokemon: pokemon
      }
    });
    
    await modal.present();

  }

}
