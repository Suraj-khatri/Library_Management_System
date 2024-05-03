import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowComponent } from './borrow.component';
import { BorrowFormComponent } from './borrow-form/borrow-form.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BorrowRoutingModule } from './borrow-routing.module';
import { BookService } from '../book/book.service';
import { UserService } from '../user/user.service';
import { ReturnComponent } from './return/return.component';



@NgModule({
  declarations: [
    BorrowComponent,
    BorrowFormComponent,
    ReturnComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BorrowRoutingModule
  ],
  providers: [BorrowModule,BookService,UserService]
})
export class BorrowModule { }
