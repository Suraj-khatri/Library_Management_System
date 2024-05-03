import { Component, OnInit } from '@angular/core';
import { BorrowFormComponent } from './borrow-form/borrow-form.component';
import { BorrowService } from './borrow.service';
import { MatDialog } from '@angular/material/dialog';
import { ReturnComponent } from './return/return.component';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss']
})
export class BorrowComponent implements OnInit {

  public displayedColumns: any;
  public dataSource: any;
  formObject ={
    borrowId:''
  };

  public borrowList : any = [];

  constructor(private bbService:BorrowService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBorrow();
  }

  getBorrow() {
    let json = {};
    this.bbService.getBorrowData(json).subscribe((res) => {
      if (res) {
        this.borrowList = res.data;
        this.dataSource = res.data;
        console.log(res.data);
        this.displayedColumns = res.column;
     //this.displayedColumns = [...this.displayedColumns , ...this.action];

      }
    });
  }

  add(){
    const dialogRef =  this.dialog.open(BorrowFormComponent,
      {
        data:{data:'xyz',mode:'Add'},
        disableClose:true,
      });
      dialogRef.afterClosed().subscribe((res)=>{
        this.getBorrow();
      });
  }
  edit(row:any) : void {
    const dialogRef = this.dialog.open(ReturnComponent,{
      data: { data: row, mode: 'Edit' },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res)
      this.getBorrow();
    });
  }

  save(){
    this.bbService.setBorrow(this.formObject).subscribe(res =>{
      if(res){
        console.log(res);
        console.log('received')

      }
    })
  }




}
