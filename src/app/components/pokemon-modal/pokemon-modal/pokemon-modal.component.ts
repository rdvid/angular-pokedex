import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonClass } from 'src/app/interface/pokemon';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent implements OnInit {

  @Input('pokemon') pokemon!: PokemonClass;

  constructor(
    protected pokedex: PokedexService, 
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  getBgColor(type:string){
    return `var(--${type}-color)`
  }

  async dismissModal(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
