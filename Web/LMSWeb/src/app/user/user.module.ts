import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UserRoutingModule

  ],
  providers: [UserService]
})
export class UserModule { }
