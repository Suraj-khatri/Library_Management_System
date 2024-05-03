import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowComponent } from './borrow.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {path: '', component:BorrowComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowRoutingModule { }
