import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MembershipService } from './membership.service';
import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipFromComponent } from './membership-from/membership-from.component';



@NgModule({
  declarations: [
    MembershipComponent,
    MembershipFromComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MembershipRoutingModule
  ],
  providers: [MembershipService]
})
export class MembershipModule { }
