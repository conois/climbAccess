import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarabinersComponent } from './carabiners/carabiners.component';
import { RopesComponent } from './ropes/ropes.component';
import { ClimbtypesComponent } from './climbtypes/climbtypes.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarabinersComponent,
    RopesComponent,
    ClimbtypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
