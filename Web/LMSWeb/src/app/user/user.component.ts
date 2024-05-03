import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public displayedColumns: any;
  public dataSource: any;


  public userList : any = [];



  constructor(private uService:UserService,public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let json = {};
    this.uService.getUserData(json).subscribe((res) => {
      if (res) {
        this.userList = res.data;
        this.dataSource = res.data;
        console.log(res.data);
        this.displayedColumns = res.column;

      }
    });
  }


  add(){
    const dialogRef =  this.dialog.open(UserFormComponent,
      {
        data:{data:'xyz',mode:'Add'},
        disableClose:true,
      });
      dialogRef.afterClosed().subscribe((res)=>{
        this.getUser();
      });
  }
  edit(row:any) : void {
    const dialogRef = this.dialog.open(UserFormComponent,{
      data: { data: row, mode: 'Edit' },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res)
      this.getUser();
    });
  }


}
