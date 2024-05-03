import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookService } from '../book.service';
import { BookComponent } from '../book.component';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  public bookGenre:any=[];
  constructor(

    public diaglogRef : MatDialogRef<BookComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public bService:BookService
  ) { }
  formObject = {
    title:'',
    author:'',
    genre : '',
    quantity:'',
    availableQuantity:'',
    userPersonId: localStorage.getItem('userPersonId'),
  };

  ngOnInit(): void {
    this.getBookGenre();
    console.log(this.data);
    if(this.data.mode.toLowerCase()=='edit')
    {
      this.formObject = {...this.data.data};
    }
  }



  save(){
    this.bService.setBook(this.formObject).subscribe(res =>{
      if(res){
        console.log(res);
        console.log('received')
        this.diaglogRef.close(res);
      }
    })
  }


  getBookGenre() {
    let json = {};
    this.bService.getBookGenre(json).subscribe((res) => {
      if (res) {
        this.bookGenre = res;
      }
    });
  }



}
