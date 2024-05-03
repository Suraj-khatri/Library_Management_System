import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomermembershipComponent } from './customermembership.component';
import { RouterModule, Routes } from '@angular/router';
import { MembershipModule } from '../membership/membership.module';



const routes: Routes = [
  {path: '', component:CustomermembershipComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomermembershipRoutingModule { }
