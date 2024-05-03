import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BookRoutingModule } from './book-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookService } from './book.service';



@NgModule({
  declarations: [
    BookComponent,
    BookFormComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BookRoutingModule
  ],
   providers: [BookService]
})
export class BookModule { }
