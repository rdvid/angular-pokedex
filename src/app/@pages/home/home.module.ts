import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { PokemonCardComponent } from 'src/app/components/pokemon-card/pokemon-card.component';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PokemonCardComponent, SearchbarComponent]
})
export class HomePageModule {}
