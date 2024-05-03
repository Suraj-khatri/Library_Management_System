import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomershipService } from '../customership.service';
import { CustomermembershipComponent } from '../customermembership.component';
import { MembershipService } from 'src/app/membership/membership.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-customermembership-form',
  templateUrl: './customermembership-form.component.html',
  styleUrls: ['./customermembership-form.component.scss']
})
export class CustomermembershipFormComponent implements OnInit {
  public membershipTypeList:any=[];
  public userList:any=[];


  customerMembership: any = { // Define a property to hold the form data
    userId: '',
    membershipId: '',
    userPersonId: localStorage.getItem('userPersonId')
  };


  constructor(
    public diaglogRef : MatDialogRef<CustomermembershipComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public cmService:CustomershipService,
    public mService:MembershipService,
    public uService: UserService

  ) { }

  ngOnInit(): void {
    this.getMembershipType();
    this.getUsers();
    if (this.data.mode.toLowerCase() === 'edit') {
      this.customerMembership = { ...this.data.data };

    }
  }

  save(){

    console.log(this.data);
    this.cmService.setCustomerUpgradeToMembership(this.customerMembership).subscribe(res =>{
      if(res){
        console.log(res);
        console.log('received')
        this.diaglogRef.close(res);
      }
    })
  }

  getMembershipType() {
    let json = {};
    this.mService.getMembershipType(json).subscribe((res) => {
      if (res) {
        this.membershipTypeList = res;
      }
    });
  }

  getUsers() {
    let json = {};
    this.uService.getAllUser(json).subscribe((res) => {
      if (res) {
        console.log("user");
        console.log(res);
        console.log("user");
        // this.userList = res.data;
        this.userList = res;
      }
    });
  }

}
