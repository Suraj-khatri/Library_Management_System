import { CustomermembershipFormComponent } from './customermembership-form/customermembership-form.component';
import { Component, OnInit } from '@angular/core';
import { CustomershipService } from './customership.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomermembershipComponent } from './add-customermembership/add-customermembership.component';

@Component({
  selector: 'app-customermembership',
  templateUrl: './customermembership.component.html',
  styleUrls: ['./customermembership.component.scss']
})
export class CustomermembershipComponent implements OnInit {


  public displayedColumns: any;
  public dataSource: any;




  constructor(private cmService:CustomershipService,public dialog: MatDialog ) {


   }

  ngOnInit(): void {

    this.getCustomerMembership();
  }


  addBook(){

  }

  getCustomerMembership() {
    let json = {};
    this.cmService.getCustomerMembershipData(json).subscribe((res) => {
      if (res) {
        this.dataSource = res.data;
        console.log(res.data);
        this.displayedColumns = res.column;
     //this.displayedColumns = [...this.displayedColumns , ...this.action];

      }
    });
  }

  add(){
    const dialogRef =  this.dialog.open(AddCustomermembershipComponent,
      {
        data:{data:'xyz',mode:'Add'},
        disableClose:true,
      });
      dialogRef.afterClosed().subscribe((res)=>{
        this.getCustomerMembership();
      });
  }

  upgrade(){
    const dialogRef =  this.dialog.open(CustomermembershipFormComponent,
      {
        data:{data:'xyz',mode:'Add'},
        disableClose:true,
      });
      dialogRef.afterClosed().subscribe((res)=>{
        this.getCustomerMembership();
      });
  }


  // edit(row:any) : void {
  //   const dialogRef = this.dialog.open(CustomermembershipFormComponent,{
  //     data: { data: row, mode: 'Edit' },
  //     disableClose: true,
  //   });
  //   dialogRef.afterClosed().subscribe((res) => {
  //     console.log(res)
  //     this.getCustomerMembership();
  //   });
  // }


}
