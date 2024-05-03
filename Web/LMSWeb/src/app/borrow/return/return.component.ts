import { Component, Inject, OnInit } from '@angular/core';
import { BorrowComponent } from '../borrow.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BorrowService } from '../borrow.service';
import { BookService } from 'src/app/book/book.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

  constructor(

    public diaglogRef : MatDialogRef<BorrowComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public bbService:BorrowService,
     public uService:UserService,
    public bService:BookService
  ) { }
  formObject = {
    userId:'',
    bookId:'',
    userPersonId: localStorage.getItem('userPersonId'),
  };

  ngOnInit(): void {

    console.log(this.data);
    if(this.data.mode.toLowerCase()=='edit')
    {
      this.formObject = {...this.data.data};
    }
  }

  save(){
    this.bbService.setBorrow(this.formObject).subscribe(res =>{
      if(res){
        console.log(res);
        console.log('received')
        this.diaglogRef.close(res);
      }
    })
  }

}
