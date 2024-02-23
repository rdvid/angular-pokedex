import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonClass } from 'src/app/interface/pokemon';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent implements OnInit {

  title: string = '';

  constructor(
    protected pokedex: PokedexService, 
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  async dismissModal(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
