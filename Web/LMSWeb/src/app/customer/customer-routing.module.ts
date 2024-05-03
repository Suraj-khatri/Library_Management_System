import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { GameComponent } from '../game/game.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  {path:'game',component:GameComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
