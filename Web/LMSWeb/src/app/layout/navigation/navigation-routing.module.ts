import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { GameComponent } from 'src/app/game/game.component';



const routes: Routes = [
  {path: '', component:NavigationComponent},
  // {path: 'dashboard',component: DashboardComponent},
  // {
  //   path: 'navigation',
  //   component: NavigationComponent,
  //   children: [


  //   ]
  // }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
