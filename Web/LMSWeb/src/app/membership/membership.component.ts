import { Component, OnInit } from '@angular/core';
import { MembershipService } from './membership.service';
import { MatDialog } from '@angular/material/dialog';
import { MembershipFromComponent } from './membership-from/membership-from.component';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  public displayedColumns: any;
  public dataSource: any;


  public membershipList : any = [];


  constructor(private mService:MembershipService,public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.getMembership();


  }

  getMembership() {
    let json = {};
    this.mService.getMembershipData(json).subscribe((res) => {
      if (res) {
        this.membershipList = res.data;
        this.dataSource = res.data;
        console.log(res.data);
        this.displayedColumns = res.column;

      }
    });
  }


  add(){
    const dialogRef =  this.dialog.open(MembershipFromComponent,
      {
        data:{data:'xyz',mode:'Add'},
        disableClose:true,
      });
      dialogRef.afterClosed().subscribe((res)=>{
        this.getMembership();
      });
  }
  edit(row:any) : void {
    const dialogRef = this.dialog.open(MembershipFromComponent,{
      data: { data: row, mode: 'Edit' },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res)
      this.getMembership();
    });
  }


}
