import { MembershipService } from './../membership/membership.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomermembershipComponent } from './customermembership.component';
import { CustomermembershipRoutingModule } from './customermembership-routing.module';
import { CustomermembershipFormComponent } from './customermembership-form/customermembership-form.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddCustomermembershipComponent } from './add-customermembership/add-customermembership.component';
import { UserService } from '../user/user.service';
import { CustomershipService } from './customership.service';
import { NavigationService } from '../layout/navigation/navigation.service';



@NgModule({
  declarations: [

    CustomermembershipComponent,
       CustomermembershipFormComponent,
       AddCustomermembershipComponent
  ],
  imports: [
    CommonModule,
    CustomermembershipRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  providers: [UserService]
})
export class CustomermembershipModule { }
