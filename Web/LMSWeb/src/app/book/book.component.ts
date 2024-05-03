import { MatDialog } from '@angular/material/dialog';
import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { BookFormComponent } from './book-form/book-form.component';







@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {





  public displayedColumns: any;
  public dataSource: any;


  public bookList : any = [];


  constructor(private bService:BookService,public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.getBooks();
  }


  addBook(){

  }

  getBooks() {
    let json = {};
    this.bService.getBookData(json).subscribe((res) => {
      if (res) {
        this.bookList = res.data;
        this.dataSource = res.data;
        console.log(res.data);
        this.displayedColumns = res.column;
     //this.displayedColumns = [...this.displayedColumns , ...this.action];

      }
    });
  }

  add(){
    const dialogRef =  this.dialog.open(BookFormComponent,
      {
        data:{data:'xyz',mode:'Add'},
        disableClose:true,
      });
      dialogRef.afterClosed().subscribe((res)=>{
        this.getBooks();
      });
  }
  edit(row:any) : void {
    const dialogRef = this.dialog.open(BookFormComponent,{
      data: { data: row, mode: 'Edit' },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res)
      this.getBooks();
    });
  }




}
