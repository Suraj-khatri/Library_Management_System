import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BorrowComponent } from '../borrow.component';
import { BorrowService } from '../borrow.service';
import { BookService } from 'src/app/book/book.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-borrow-form',
  templateUrl: './borrow-form.component.html',
  styleUrls: ['./borrow-form.component.scss']
})
export class BorrowFormComponent implements OnInit {
  public userList:any=[];
  public bookList:any=[];


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
    //this.getMembershipType();
    this.getUser();
    this.getBook();
    console.log(this.data);
    if(this.data.mode.toLowerCase()=='edit')
    {
      this.formObject = {...this.data.data};
    }
  }

  getUser() {
    let json = {};
    this.bbService.getUserMembership(json).subscribe((res) => {
      if (res) {
        this.userList = res;
      }
    });
  }
  getBook(){
    let json = {};
    this.bbService.getBook(json).subscribe((res) => {
      if (res) {
        this.bookList = res.data;
      }
    });
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
