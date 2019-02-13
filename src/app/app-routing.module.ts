import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//Components
import { CarabinersComponent  } from "./carabiners/carabiners.component";
import { ClimbtypesComponent } from "./climbtypes/climbtypes.component";
import { HomeComponent } from "./home/home.component";
import { RopesComponent } from "./ropes/ropes.component";

const routes: Routes = [
/*   { path: '', component: HomeComponent  },
 */  { path: 'carabiners', component: CarabinersComponent },
  { path: 'ropes', component: RopesComponent },
  { path: 'types', component: ClimbtypesComponent },

];


@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
