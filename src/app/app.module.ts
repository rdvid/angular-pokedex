import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './@pages/home/home.page';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './components/searchbar/searchbar/searchbar.component';

@NgModule({
  declarations: [AppComponent, HomePage, PokemonCardComponent, SearchbarComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
