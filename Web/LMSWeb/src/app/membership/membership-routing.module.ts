import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MembershipComponent } from './membership.component';
import { MembershipFromComponent } from './membership-from/membership-from.component';

const routes: Routes = [

  {path: '', component:MembershipComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
