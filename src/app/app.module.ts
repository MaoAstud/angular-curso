import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './Heroes/Heroes.module';
import { HerramientasModule } from './Herramientas/Herramientas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    HeroesModule,
    HerramientasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
